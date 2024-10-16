/* eslint-disable consistent-return */
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  clearStoredAuthToken,
  readStoredAuthToken,
} from "../utils/storage";

function authInterceptor(req: any): any {
  const authReq = { ...req };
  const authToken = readStoredAuthToken();

  if (
    authToken &&
    !authReq.url?.includes("login") &&
    !authReq.url?.includes("register")
  ) {
    authReq.headers = {
      ...authReq.headers,
      Authorization: `Bearer ${authToken}`,
    };
  }
  return authReq;
}

function forbiddenErrorInterceptor(error: AxiosResponse<AxiosError>) {
  const { status } = error.request;

  if (status === 401) {
    // Remove token if any and redirect to Login page
    if (
      error.config.url !== "login" &&
      error.config.url !== "agents/authenticate"
    ) {
      // pour le front office
      clearStoredAuthToken();
      window.location.assign("/we-movie/login");
    }
  } else {
    return Promise.reject(error);
  }
}

// Si le status est KO, on reject le promise
function forbiddenExceptionInterceptor(response: AxiosResponse) {
  if (response.data.status === "KO") {
    return Promise.reject(response);
  }
  return response;
}

const client = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

client.interceptors.request.use(authInterceptor);
client.interceptors.response.use(
  forbiddenExceptionInterceptor,
  forbiddenErrorInterceptor
);

export default client;

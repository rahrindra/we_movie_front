import axios from "./client";
import { LoginPayload, LoginResponse, RegisterPayload } from "./types";


export const register = async (payload: RegisterPayload) => {
  const { data } = await axios.post<any>(
    "user/register",
    payload
  );
  return data;
};

export const login = async (payload: LoginPayload) => {
  const { data } = await axios.post<LoginResponse>(
    "login",
    payload
  );
  return data;
};

export const getGenreList = async () => {
  const { data } = await axios.get<any>('genre/list');

  return data;
};


export const getMovieList = async () => {
  const { data } = await axios.get<any>('movie/list');

  return data;
};

export const getMovieDetails = async (id: number) => {
  const { data } = await axios.get<any>(`movie/details/${id}`);

  return data;
};


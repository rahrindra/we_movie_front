import axios from "./client";
import { LoginPayload, LoginResponse } from "./types";


export const login = async (payload: LoginPayload) => {
  const { data } = await axios.post<LoginResponse>(
    "login",
    payload
  );
  return data;
};



import axios from "./client";
import { LoginPayload, LoginResponse } from "./types";


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


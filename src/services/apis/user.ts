import axiosInstance from "../../utils/axiosInstance";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export const loginApi = (data: LoginData) =>
  axiosInstance({
    url: "/users/login",
    data,
    method: "post",
  });

export const registerApi = (data: RegisterData) =>
  axiosInstance({
    url: "/users/register",
    data,
    method: "post",
  });

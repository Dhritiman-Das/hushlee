import { authLinks } from "@/static/links/auth";
import axios from "axios";

interface IProp {
  userName: string;
  password: string;
}

export const login = async (payload: IProp) => {
  try {
    const response = await axios.post(authLinks.login, payload, {
      withCredentials: true,
    });
    return response;
  } catch (error: any) {
    if (error.response.status === 401) {
      return error.response;
    }

    throw new Error(error);
  }
};

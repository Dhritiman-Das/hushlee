import { authLinks } from "@/static/links/auth";
import axios from "axios";

interface IProp {
  userName: string;
  password: string;
}

export const login = async (payload: IProp) => {
  try {
    const response = await axios.post(authLinks.signup, payload, {
      withCredentials: true,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

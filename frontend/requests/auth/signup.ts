import { authLinks } from "@/static/links/auth";
import axios from "axios";

interface IProp {
  userName: string;
  password: string;
  setError: (message: string) => void;
}

export const signup = async (payload: IProp) => {
  try {
    const response = await axios.post(authLinks.signup, payload, {
      withCredentials: true,
    });
    return response;
  } catch (error: any) {
    console.log("error ", { error });
    if (error.response.status === 400) {
      const { setError } = payload;
      setError("Username already taken");
      return;
    }
    throw new Error(error.message);
  }
};

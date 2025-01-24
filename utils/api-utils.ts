import { User } from "@/types";
import axios from "axios";

interface Input {
  name: string;
  email: string;
  password: string;
}

const USERS_URL =
  "https://6790d7f9af8442fd7377fab0.mockapi.io/mantaryAPI/users";

export const getUser = async (input: Input, signingup: boolean) => {
  if (signingup) {
    // Signup
    const response = await axios.post(USERS_URL, {
      ...input,
      registeredEvents: [],
    });
    const user = response.data;
    return user;
  } else {
    // Login
    const response = await axios.get(USERS_URL);
    const user = response.data.find(
      (user: User) =>
        user.email === input.email && user.password === input.password
    );

    return user;
  }
};

import { useMutation } from "@tanstack/react-query";
import { createUser } from "../appwrite/api";

export const tanCreateUser = () => {
  return useMutation({
    mutationFn: (user) => createUser(user),
  });
};

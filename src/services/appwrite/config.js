import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const configAppwrite = {
  projectID: "",
  url: "",
};

export const client = new Client();
export const Account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

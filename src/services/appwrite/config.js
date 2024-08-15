import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const configAppwrite = {
  projectID: "66bcfe4300352ccbc616",
  url: "https://cloud.appwrite.io/v1",
  datebaseID: "66bdd0790023c326c1ed",
  storageID: "",
  userCollectionID: "66bdd151001ba1d3762f",
  cardCollectionID: "",
};

export const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66bcfe4300352ccbc616");

export const account = new Account(client);
export const databases = new Databases(client, "66bdd0790023c326c1ed");
export const storage = new Storage(client);
export const avatars = new Avatars(client);

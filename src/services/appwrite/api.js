import { AppwriteException, ID, Query } from "appwrite";
import { account, configAppwrite, databases } from "./config";

//user is a objetct that passes the user's
//address
//name
//email
//password

export async function createUser(user) {
  try {
    const newUser = await account.create(walletAdd, email, password);
    if (!newUser) throw error;
    const data = storeDatabase(user);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function storeDatabase(user) {
  try {
    const newUser = await databases.createDocument(
      configAppwrite.datebaseID,
      configAppwrite.userCollectionID,
      user
    );

    if (!newUser) throw error;
  } catch (error) {
    console.log(error);
  }
}

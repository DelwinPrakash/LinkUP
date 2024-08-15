import { AppwriteException, ID, Query } from "appwrite";
import { account, configAppwrite, databases } from "./config";

//user is a object that passes the user's
//address
//name
//email
//password

export async function createUser(user) {
  console.log(user.walletAdd, user.email, user.password, user.name + " from api");
  // try {
  //   const newUser = await account.create(ID.unique(), user.email, user.password, user.name);
  //   if (!newUser) throw error;
  //   const data = storeDatabase(user);
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
  const newUser = account.create(ID.unique(), user.email, user.password, user.name);
  newUser.then((response) => {
    console.log(response);
    storeDatabase(user);
  },
  (error) => {
    console.log(error);
  });
}

export async function storeDatabase(user) {
  try {
    const newUser = await databases.createDocument(
      configAppwrite.datebaseID,
      configAppwrite.userCollectionID,
      ID.unique(),
      user
    );

    if (!newUser) throw error;
  } catch (error) {
    console.log(error);
  }
}
/*
export const login = async (e) => {
  e.preventDefault();

  try {
    await account.createEmailPasswordSession(user.email, user.password);
  } catch (error) {
    console.log(error);
  }
}
*/
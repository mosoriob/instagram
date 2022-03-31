import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const userRef = firebase.firestore().collection("users");
  const query = await userRef.where("userName", "==", username).get();
  return query.size > 0;
}
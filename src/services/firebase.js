import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const userRef = firebase.firestore().collection("users");
  const query = await userRef.where("userName", "==", username).get();
  return query.size > 0;
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}

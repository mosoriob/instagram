import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
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
// Challenge: Implementing the getUserFollowPhotos service function

// AC:
//      - make a firebase firestore call to the 'photos' collection
//      - use the followingUserIds as an argument to 'where' (look at references)

// References
//      - https://firebase.google.com/docs/firestore/query-data/queries

// AC:
//      - Create a const called 'photosWithUserDetails' and use 'await Promise.all' to async map over the function 'getUserByUserId'
//- inside the map we will be going over the array 'userFollowedPhotos', and we want to make this map 'async'
//      - Within the map, create a let called 'userLikedPhoto' and assign this to false, once you have done that, 
          //check if 'photo.likes.includes' the 'userId' that is passed into the 'getUserFollowedPhotos' function. 
          //If it is true, change the 'userLikedPhoto' to true
//      - After this, create a new const called 'user' and await the response from 'getUserByUserId', 
//we need to pass in the 'photo.userId' here to get the username of the response,
// so an example would be 'const username = user[0].username'
//      - return inside the map the username, all the photo properties (spread the result of photo), and lastly userLikedPhoto
//      - To end this function return 'photosWithUserDetails'
//      - Once you have done that, go to the Timeline and where we are mapping 'I am a photo!', replace it with 'content.username' to see that we get back the username of the photos that we got back from the service call (tip: use the docId on the photos.map for the key!)

export async function getUserFollowedPhotos(userId, followingUserIds) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", ["2"])
    .get();

  const userFollowedPhotos = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      console.log(photo.likes)
      const userLikedPhoto = photo.likes.includes(userId)
      const user = await getUserByUserId(userId)
      const username = user[0].username
      return { username, ...photo, userLikedPhoto}
    })
  );
    return photosWithUserDetails
}

import { useContext, useState, useEffect } from "react";
import UserContext  from "../context/user";
import { getUserByUserId, getUserFollowedPhotos} from "../services/firebase";
const useFollowedUsersPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const {
    user: { uid: userId = ''},
  } = useContext(UserContext);

  useEffect(() => {
        async function getTimelinePhotos() {
            //get the following user ids
            const followingUserIds = await getUserByUserId(userId);
            
            if (followingUserIds && followingUserIds[0].following.length > 0) {
                //get user followed photos
                const followedUserPhotos = await getUserFollowedPhotos(userId, followingUserIds[0].following);
                followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPhotos);
            }
         }

         getTimelinePhotos()
  }, [userId]);

  return photos;
};
export default useFollowedUsersPhotos;

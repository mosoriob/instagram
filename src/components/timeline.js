import Skeleton from "react-loading-skeleton";
import useFollowedUsersPhotos from "../hooks/use-followed-users-photos";
// Challenge: Create a new hook called 'useFollowedUsersPhotos'

// Acceptance Criteria
//   - Create a new file called 'use-followed-users-photos.js'
//   - In here, create a default function that is exported called 'useFollowedUsersPhotos'
//   - Create state for 'photos'
//   - Import the 'UserContext' and destructure out the 'uid' from the user object and alias the 'uid' to 'userId'--setting a default value of an empty string for userId
//   - Create an async function within this hook called 'getTimelinePhotos', which will be called within a 'useEffect', at the moment we can just leave this function empty, but make sure we call it
//   - Add 'userId' to the 'useEffect' dependency array
//   - Return '{ photos }'

// References
//   - https://reactjs.org/docs/hooks-effect.html

export default function Timeline() {
  const photos = useFollowedUsersPhotos();
  return (
    <div className="container col-span-2">
      <p>I am the timeline</p>
      {photos ? (
        photos.map((photo) => <p key={photo.docId}>{photo.username}</p>)
      ) : (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      )}
    </div>
  );
}

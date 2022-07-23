import Skeleton from "react-loading-skeleton";
import useFollowedUsersPhotos from "../hooks/use-followed-users-photos";
import Post from "./post";

export default function Timeline() {
  const photos = useFollowedUsersPhotos();
  return (
    <div className="container col-span-2">
      {photos ? (
        photos.map((photo) => <Post key={photo.docId} content={photo}/>)
      ) : (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      )}
    </div>
  );
}

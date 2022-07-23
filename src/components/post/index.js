import React, {useRef} from "react";
import Footer from "./footer";
import Header from "./header";
import Image from "./image";
import Comments from "./comments";
import Actions from "./actions";

const Post = ({content}) => {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();
  return (
    <div className="mb-16 border-gray-50 bg-white border border-rounded col-span-4">
        <Header />

        <Image src={content.imageSrc} caption={content.caption} />
        <Actions 
          docId={content.docId}
          totalLikes={content.likes.length}
          likedPhoto={content.userLikedPhoto}
          handleFocus={handleFocus}
          />
        <Footer caption={content.caption} username={content.username}/>
    </div>
  );
};
export default Post;

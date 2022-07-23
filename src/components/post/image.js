const Image = ({src, caption}) => {
    return (
        <div className="post__img">
          <img src={src} alt={caption} aria-label={caption}/>
        </div>
    );
    }
export default Image;

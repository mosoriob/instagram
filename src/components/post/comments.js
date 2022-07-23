const Comments = ({ comments }) => {
    return (
        <div className="comments">
        <h3>Comments</h3>
        {comments.map(comment => (
            <div key={comment.id} className="comment">
            <p>{comment.body}</p>
            </div>
        ))}
        </div>
    );
    }
export default Comments;
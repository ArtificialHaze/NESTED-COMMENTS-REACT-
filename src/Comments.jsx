import React, { useState } from "react";

const Comments = ({ comments, handleAddComments, handleDeleteComment }) => {
  const [showInput, setShowInput] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  const handleAdd = () => {
    let newComment = {
      id: Date.now(),
      text: commentBody,
      replies: [],
    };

    handleAddComments(comments.id, newComment);
    setShowInput(false);
  };

  return (
    <div>
      <div className={`${comments.text && "comment-container"}`}>
        <h3>{comments.text}</h3>
        {showInput && (
          <input
            type="text"
            autoFocus
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
          />
        )}
        {showInput ? (
          <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={() => setShowInput(false)}>Cancel</button>
          </div>
        ) : comments.text ? (
          <div>
            <button onClick={() => setShowInput(true)}>Reply</button>
            <button
              onClick={() => {
                handleDeleteComment(comments.id);
              }}
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
      <div style={{ paddingLeft: 25 }}>
        {comments?.replies?.map((item) => (
          <Comments
            key={item.id}
            comments={item}
            handleAddComments={handleAddComments}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;

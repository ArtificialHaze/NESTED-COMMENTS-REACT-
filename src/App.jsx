import React, { useState } from "react";
import "./App.scss";
import Comments from "./Comments";
import { commentData } from "./commentData";
import useFunction from "./useFunction";

const App = () => {
  const [comments, setComments] = useState(commentData);
  const { addComment, deleteComment } = useFunction();

  const handleAddComments = (commentId, comment) => {
    const updatedTree = addComment(comments, commentId, comment);
    setComments(updatedTree);
  };

  const handleDeleteComment = (commentId) => {
    const updateTree = deleteComment(comments, commentId);
    setComments(updateTree);
  };

  return (
    <div className="app">
      <Comments
        key={comments.id}
        comments={comments}
        handleAddComments={handleAddComments}
        handleDeleteComment={handleDeleteComment}
      />
    </div>
  );
};

export default App;

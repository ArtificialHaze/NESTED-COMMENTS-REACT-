const useFunction = () => {
  const addComment = (tree, commentId, newComment) => {
    if (tree.id === commentId) {
      tree.replies.unshift(newComment);
      return tree;
    }

    const updatedReplies = tree.replies.map((item) =>
      addComment(item, commentId, newComment)
    );

    return {
      ...tree,
      replies: updatedReplies,
    };
  };

  const deleteComment = (tree, commentId) => {
    if (tree.id === commentId) {
      return tree.replies.filter((item) => item.id !== commentId);
    }

    const updatedReplies = tree.replies.map((item) =>
      deleteComment(item, commentId)
    );

    return {
      ...tree,
      replies: updatedReplies,
    };
  };

  return { addComment, deleteComment };
};

export default useFunction;

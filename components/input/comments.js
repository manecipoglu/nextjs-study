import { useState, useEffect } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

export default function Comments({ eventId }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch("/api/comments/" + eventId)
        .then(res => res.json())
        .then(data => setComments(data.comments));
    }
  }, [showComments, eventId]);

  function addCommentHandler(commentData) {
    // send data to API
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={classes.comments}>
      <button onClick={() => setShowComments(prevStatus => !prevStatus)}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

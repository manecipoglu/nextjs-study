import classes from "./comment-list.module.css";
import { useState } from "react";

export default function CommentList({ items }) {
  return (
    <ul className={classes.comments}>
      {items.length &&
        items.map(item => (
          <li key={item._id}>
            <p>{item.text}</p>
            <div>
              By <address>{item.name}</address>
            </div>
          </li>
        ))}
    </ul>
  );
}

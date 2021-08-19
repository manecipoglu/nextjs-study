import classes from "./comment-list.module.css";
import { useState } from "react";

export default function CommentList({ items }) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Necip</address>
        </div>
      </li>
      <li>
        <p>My comment is awesome!</p>
        <div>
          By <address>Beca</address>
        </div>
      </li>
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

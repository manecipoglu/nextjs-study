import EventItem from "../event-item/EventItem";
import classes from "./event-list.module.css";

export default function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.events.map((event, idx) => (
        <EventItem key={event.title} id={`e${idx + 1}`} {...event} />
      ))}
    </ul>
  );
}

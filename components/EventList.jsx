import EventItem from "./EventItem";

export default function EventList(props) {
  return props.events.map(event => (
    <EventItem key={event.id} {...event}></EventItem>
  ));
}

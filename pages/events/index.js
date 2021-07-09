import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event-list/EventList";

export default function Events() {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

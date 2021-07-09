import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event-list/EventList";
import EventSearch from "../../components/event-search/EventSearch";

export default function Events() {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}

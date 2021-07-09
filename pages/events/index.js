import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event-list/EventList";
import EventSearch from "../../components/event-search/EventSearch";

export default function Events() {
  const events = getAllEvents();
  const router = useRouter();

  function onSearch(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventSearch onSearch={onSearch} />
      <EventList events={events} />
    </>
  );
}

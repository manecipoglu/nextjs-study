import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-list/EventList";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

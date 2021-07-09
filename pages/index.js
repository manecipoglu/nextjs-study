import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      {featuredEvents.map(event => (
        <h1 key={event.id}>{event.title}</h1>
      ))}
    </div>
  );
}

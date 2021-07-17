import { useRouter } from "next/router";
import EventList from "../../components/event-list/EventList";
import EventSearch from "../../components/event-search/EventSearch";

export default function Events({ events }) {
  const router = useRouter();

  function onSearch(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  if (!events) return <h1>Loading...</h1>;

  return (
    <>
      <EventSearch onSearch={onSearch} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://crwn-clothing-15ca1-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events = [...Object.values(data)];

  return { props: { events }, revalidate: 60 };
}

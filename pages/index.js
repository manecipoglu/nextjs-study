import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-list/EventList";
import NewsletterRegistration from "../components/input/newsletter-registration";

export default function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="Find great events" />
      </Head>
      <NewsletterRegistration />
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://crwn-clothing-15ca1-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const featuredEvents = Object.values(data).filter((event, idx) => {
    event.id = Object.keys(data)[idx];
    return event.isFeatured;
  });

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

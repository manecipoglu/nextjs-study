import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
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
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

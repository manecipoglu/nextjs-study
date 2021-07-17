import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/ErrorAlert";

export default function EventDetails({ event }) {
  if (!event)
    return (
      <ErrorAlert>
        <p>No event found</p>;
      </ErrorAlert>
    );

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const response = await fetch(
    "https://crwn-clothing-15ca1-default-rtdb.firebaseio.com/events.json"
  );
  const events = await response.json();
  const event = events[eventId];

  return {
    props: { event },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://crwn-clothing-15ca1-default-rtdb.firebaseio.com/events.json"
  );
  const events = await response.json();

  const paths = Object.keys(events).map(key => ({
    params: { eventId: key },
  }));

  return {
    paths,
    fallback: false,
  };
}

import EventList from "../../components/event-list/EventList";
import ResultsTitle from "../../components/results-title/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

export default function FilteredEvents(props) {
  if (props.hasError)
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        <ErrorAlert>
          <p>No event found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const filterData = params.slug;

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  )
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error"
      // }
    };

  const response = await fetch(
    "https://crwn-clothing-15ca1-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const allEvents = [...Object.values(data)];

  const filteredEvents = allEvents.filter(event => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

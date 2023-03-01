import * as React from 'react';
import Card from '../Card';
import './Cards.css';
import makeRequest from '../../utils/MakeRequest';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoints';
import { EventData } from '../../types';
import {
  filterEventsByBookMarked,
  filterEventsByRegistered,
  filterEventsBySeatsAvailable,
} from '../../utils/common/filterEvents';

interface CardsProps {
  // searchKey: string;
  theme: any;
  allClicked: boolean;
  registeredClicked: boolean;
  bookMarkedClicked: boolean;
  seatsClicked: boolean;
}

const Cards: React.FC<CardsProps> = (props: CardsProps): JSX.Element => {
  const [events, setEvents] = React.useState<EventData[]>();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS)
      .then(data => {
        if (props.allClicked) {
          data.sort((a: EventData, b: EventData) => (a.datetime < b.datetime ? -1 : 1));
          setEvents(data);
        } else {
          console.log('filtering');
          let newData = data;
          if (props.registeredClicked) {
            newData = filterEventsByRegistered(data);
          }
          if (props.seatsClicked) {
            newData = filterEventsBySeatsAvailable(newData);
          }
          if (props.bookMarkedClicked) {
            newData = filterEventsByBookMarked(newData);
          }
          newData.sort((a: EventData, b: EventData) => (a.datetime < b.datetime ? -1 : 1));

          setEvents(newData);
        }
      })
      .catch(err => {
        setError(err);
      });
  }, [props.seatsClicked, props.registeredClicked]);
  if (error) {
    return <div>Something went wrong</div>;
  }
  if (events) {
    return (
      <div className="cards">
        {events.map((event: any) => (
          <Card
            theme={props.theme}
            key={event.id}
            id={event.id}
            venue={event.venue}
            name={event.name}
            description={event.description}
            areSeatsAvailable={event.areSeatsAvailable}
            datetime={event.datetime}
            timezone={event.timezone}
            isRegistered={event.isRegistered}
            isBookmarked={event.isBookmarked}
            imgUrl={event.imgUrl}
          />
        ))}
      </div>
    );
  }
  return <div>Loading...</div>;
};
export default Cards;

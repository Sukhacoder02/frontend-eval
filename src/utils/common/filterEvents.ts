import { EventData } from '../../types';

const filterEventsByRegistered = (events: EventData[]) => {
  return events.filter(event => {
    return event.isRegistered;
  });
};

const filterEventsBySeatsAvailable = (events: EventData[]) => {
  return events.filter(event => {
    return event.areSeatsAvailable;
  });
};
const filterEventsByBookMarked = (events: EventData[]) => {
  return events.filter(event => {
    return event.isBookmarked;
  });
};
export { filterEventsByRegistered, filterEventsBySeatsAvailable, filterEventsByBookMarked };

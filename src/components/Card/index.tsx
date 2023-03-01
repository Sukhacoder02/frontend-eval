import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookMarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck, faBookmark as faBookmarkSolid, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import './Card.css';
import { EventData } from '../../types';
import formatDate from '../../utils/common/dateTimeFormat';
import makeRequest from '../../utils/MakeRequest';
import { PATCH_SINGLE_EVENT } from '../../constants/apiEndPoints';

const Card: React.FC<EventData> = (props: EventData): JSX.Element => {
  const [bookMarked, setBookMarked] = React.useState<boolean>(props.isBookmarked);

  const bookMarkButtonClick = async () => {
    console.log('bookmarked click');
    await makeRequest(PATCH_SINGLE_EVENT(props.id.toString()), {
      data: {
        isBookmarked: !bookMarked,
      },
    });
    setBookMarked(!bookMarked);
  };
  return (
    <div className={'eventCard ' + 'theme' + props.theme}>
      <img src={props.imgUrl} alt="event" />
      <hr />
      <div className="eventTitle">{props.name.toUpperCase()}</div>
      <div className="eventDescription cardPadding">{props.description}</div>
      <div className="eventVenue cardPadding">
        <span>VENUE: </span>
        {props.venue}
      </div>
      <div className="eventDate cardPadding">
        <span>DATE: </span>
        {formatDate(props.datetime)}
      </div>
      <div className="eventButtons cardPadding">
        {props.isRegistered ? (
          <div className="registered">
            <FontAwesomeIcon color="#A0F3AD" icon={faCircleCheck} />
            <span className="green">REGISTERED</span>
          </div>
        ) : !props.areSeatsAvailable ? (
          <div className="noSeats">
            <FontAwesomeIcon color="#ECECAB" icon={faCircleXmark} />
            <span className="yellow">NO SEATS AVAILABLE</span>
          </div>
        ) : (
          <div></div>
        )}
        <button type="button" className="right-icon red" onClick={bookMarkButtonClick}>
          <FontAwesomeIcon color="#ea8282" icon={bookMarked ? faBookMarkRegular : faBookmarkSolid} />
        </button>
      </div>
    </div>
  );
};
export default Card;

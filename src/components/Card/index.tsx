import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card: React.FC = (): JSX.Element => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src="https://i.ibb.co/3zbdvWX/battle-of-bands.jpg" alt="" />
      </div>
      <div className="cardDetails">
        <div className="cardTitle">
          <b> BATTLE OF THE BANDS </b>
        </div>
        <div className="cardDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat labore tenetur veniam, repellat ducimus atque
        </div>
        <div className="venue"> VENUE : All Stars Arena,Las Vegas, Nevada</div>
        <div className="date"> DATE : 28 Feb 2023, 21:00 PST</div>
      </div>
      <div className="reactions">
        <div className="register">
          <FontAwesomeIcon icon={faCircleCheck} />
          <span>REGISTER</span>
        </div>
        <div className="bookmark">
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    </div>
  );
};
export default Card;

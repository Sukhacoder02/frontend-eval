import * as React from 'react';
import './RadioButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';

import { RadioButtonProps } from '../../types';

const RadioButtons: React.FC<RadioButtonProps> = (props: RadioButtonProps): JSX.Element => {
  return (
    <div className="radioButtons">
      <div className="leftRadioButtons">
        <div className="radioButton">
          <button
            onClick={() => {
              props.setAllClicked(true);
              props.setRegisteredClicked(false);
              props.setSeatsClicked(false);
              props.setBookMarkedClicked(false);
            }}>
            <FontAwesomeIcon icon={props.allClicked ? faCircle : faCircleDot} />
          </button>
          <p>ALL</p>
        </div>
        <div className="radioButton">
          <button
            onClick={() => {
              props.setAllClicked(false);
              props.setRegisteredClicked(true);
            }}>
            <FontAwesomeIcon icon={props.registeredClicked ? faCircle : faCircleDot} />
          </button>
          <p>REGISTERED</p>
        </div>
      </div>
      <div className="rightRadioButtons">
        <div className="radioButton">
          <p>BOOKMARKED</p>
          <button
            onClick={() => {
              props.setAllClicked(false);
              props.setBookMarkedClicked(true);
            }}>
            <FontAwesomeIcon icon={props.bookMarkedClicked ? faCircle : faCircleDot} />
          </button>
        </div>
        <div className="radioButton">
          <p>SEATS AVAILABLE</p>
          <button
            onClick={() => {
              props.setAllClicked(false);
              props.setSeatsClicked(true);
            }}>
            <FontAwesomeIcon icon={props.seatsClicked ? faCircle : faCircleDot} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default RadioButtons;

import * as React from 'react';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Filter: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="filter">
      <div className="filterAndSearch">
        <div className="filterIcon">
          <FontAwesomeIcon icon={faFilter} />
          <p>FILTER</p>
          <button className="dropDown">
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="EVENT NAME" />
          <p>SEARCH</p>
        </div>
      </div>
    </div>
  );
};
export default Filter;

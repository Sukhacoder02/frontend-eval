import * as React from 'react';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
interface FilterProps {
  handleDropDown: () => void;
  dropDown: boolean;
  setSearchQuery: (value: string) => void;
}
const Filter: React.FC<FilterProps> = (props: FilterProps): JSX.Element => {
  const handleChange = (e: any) => {
    props.setSearchQuery(e.target.value);
  };
  return (
    <div className="filter">
      <div className="filterAndSearch">
        <div className="filterIcon">
          <FontAwesomeIcon icon={faFilter} />
          <p>FILTER</p>
          <button className="dropDown" onClick={props.handleDropDown}>
            <FontAwesomeIcon icon={props.dropDown ? faChevronUp : faChevronDown} />
          </button>
        </div>
        <div className="searchBar">
          <input onChange={handleChange} type="text" placeholder="EVENT NAME" />
          <button className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Filter;

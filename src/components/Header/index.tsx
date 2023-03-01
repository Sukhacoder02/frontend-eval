import './Header.css';
import * as React from 'react';

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <nav>
      <div className="navbar">
        <h1>Eventify</h1>
      </div>
    </nav>
  );
};
export default Header;

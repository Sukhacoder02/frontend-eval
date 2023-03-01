import './Header.css';
import * as React from 'react';
import { HeaderProps } from '../../types';
const Header: React.FC<HeaderProps> = (props: HeaderProps): JSX.Element => {
  return (
    <nav className={'theme' + props.theme}>
      <div className="navbar">
        <h1>EVENTIFY</h1>
      </div>
    </nav>
  );
};
export default Header;

import { Header } from '../../components/';
import Filter from '../../components/Filter';
import Cards from '../../components/Cards';
import RadioButtons from '../../components/RadioButtons';
import Footer from '../../components/Footer';
import './HomePage.css';

import * as React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import makeRequest from '../../utils/MakeRequest';
import { GET_THEMES } from '../../constants/apiEndPoints';

const HomePage: React.FC = (): JSX.Element => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  React.useEffect(() => {
    makeRequest(GET_THEMES).then(data => {
      setTheme(data.preferredThemeId);
    });
  }, []);

  const [_, reload] = React.useState('null');

  const reloadHomePage = () => {
    console.log('reload called');

    reload('anc');
  };

  const [dropDown, setDropDown] = React.useState(false);
  const [allClicked, setAllClicked] = React.useState(true);
  const [registeredClicked, setRegisteredClicked] = React.useState(false);
  const [bookMarkedClicked, setBookMarkedClicked] = React.useState(false);
  const [seatsClicked, setSeatsClicked] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState('');

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  const setSearchQuery = (value: string) => {
    setSearchKey(value);
  };
  return (
    <div className="homepage">
      <Header theme={theme} />
      <Filter handleDropDown={handleDropDown} dropDown={dropDown} setSearchQuery={setSearchQuery} />
      {dropDown && (
        <RadioButtons
          allClicked={allClicked}
          setAllClicked={setAllClicked}
          registeredClicked={registeredClicked}
          setRegisteredClicked={setRegisteredClicked}
          bookMarkedClicked={bookMarkedClicked}
          setBookMarkedClicked={setBookMarkedClicked}
          seatsClicked={seatsClicked}
          setSeatsClicked={setSeatsClicked}
        />
      )}
      <Cards
        theme={theme}
        // searchKey={searchKey}
        allClicked={allClicked}
        registeredClicked={registeredClicked}
        bookMarkedClicked={bookMarkedClicked}
        seatsClicked={seatsClicked}
      />
      <Footer theme={theme} reload={reloadHomePage} />
    </div>
  );
};
export default HomePage;

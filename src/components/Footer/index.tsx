import * as React from 'react';
import { GET_THEMES, PUT_THEME } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/MakeRequest';
import './Footer.css';
import { FooterProps } from '../../types';
const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const [prefferedTheme, setPrefferedTheme] = React.useState('1');
  React.useEffect(() => {
    makeRequest(GET_THEMES).then(data => {
      setPrefferedTheme(data.preferredThemeId);
    });
  }, []);
  const [selectedTheme, setSelectedTheme] = React.useState('1');

  const handleThemeCheck = (event: any) => {
    setSelectedTheme(event.target.id.substring(5));
  };
  const handleThemeClick = async (event: any) => {
    await makeRequest(PUT_THEME, {
      data: {
        preferredThemeId: Number(selectedTheme),
      },
    });
    props.reload();
  };
  return (
    <footer className={'theme' + props.theme}>
      <div className="wrapFooter">
        <div className="themes">
          <p>THEMES</p>
          <button onClick={handleThemeCheck}>
            <div id="theme1" className="theme"></div>
          </button>
          <button onClick={handleThemeCheck}>
            <div id="theme2" className="theme"></div>
          </button>
          <button onClick={handleThemeCheck}>
            <div id="theme3" className="theme"></div>
          </button>
        </div>
        <div className="button">
          <button className="save" onClick={handleThemeClick}>
            SAVE THEME
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

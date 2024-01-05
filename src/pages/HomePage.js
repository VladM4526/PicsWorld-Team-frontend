// import { NavLink } from 'react-router-dom';
// import {
//   LogoApp,
//   LogoContainer,
// } from '../Components/WelcomePage/Header/Header.styled';
// import WaterTracker from '../img/set-icons.svg';
import { Home } from 'Components/Home/Home';
import { Header } from 'Components/WelcomePage/Header/Header';

export const HomePage = () => {
  return (
    <>
      {/* <LogoContainer>
        <NavLink to="/HomePage">
          <LogoApp>
            <use href={`${WaterTracker}#icon-logo-app`}></use>
          </LogoApp>
        </NavLink>
      </LogoContainer> */}
      <Header/>
      <Home />
    </>
  );
};

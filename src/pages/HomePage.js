// import { NavLink } from 'react-router-dom';
// import {
//   LogoApp,
//   LogoContainer,
// } from '../Components/WelcomePage/Header/Header.styled';
// import WaterTracker from '../img/set-icons.svg';
// import DailyNorma from 'Components/DailyNorma/DailyNorma';
import { Home } from 'Components/Home/Home';

export default function HomePage() {
  return (
    <>
      {/* <LogoContainer>
        <NavLink to="/HomePage">
          <LogoApp>
            <use href={`${WaterTracker}#icon-logo`}></use>
          </LogoApp>
        </NavLink>
      </LogoContainer>
      <DailyNorma/> */}
      <Home />
    </>
  );
}

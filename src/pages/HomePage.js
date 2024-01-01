import { NavLink } from 'react-router-dom';
import {
  LogoApp,
  LogoContainer,
} from '../Components/WelcomePage/Header/Header.styled';
import WaterTracker from '../img/set-icons.svg';
import DailyNorma from 'Components/DailyNorma/DailyNorma';

export const HomePage = () => {
  return (
    <>
      <LogoContainer>
        <NavLink to="/HomePage">
          <LogoApp>
            <use href={`${WaterTracker}#icon-logo`}></use>
          </LogoApp>
        </NavLink>
      </LogoContainer>
      <DailyNorma/>
    </>
  );
};

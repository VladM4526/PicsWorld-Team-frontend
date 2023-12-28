import { NavLink } from 'react-router-dom';
import {
  LogoApp,
  LogoContainer,
} from '../Components/WelcomePage/Header/Header.styled';
import WaterTracker from '../Components/WelcomePage/img/set-icons.svg';

export const HomePage = () => {
  return (
    <>
      <LogoContainer>
        <NavLink to="/">
          <LogoApp>
            <use href={`${WaterTracker}#icon-logo`}></use>
          </LogoApp>
        </NavLink>
      </LogoContainer>
      <h1>HomePage</h1>
    </>
  );
};

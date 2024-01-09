import { NavLink } from 'react-router-dom';
import {
  HeaderSection,
  HeaderWrapper,
  HeaderBtn,
  LogoApp,
  HeaderUserIcon,
  LogoContainer,
} from './Header.styled.js';
import WaterTracker from '../../../img/set-icons.svg';

export const Header = () => {
  return (
    <>
      <HeaderSection>
        <LogoContainer>
          <NavLink to="/">
            <LogoApp>
              <use href={`${WaterTracker}#icon-logo-app`}></use>
            </LogoApp>
          </NavLink>
        </LogoContainer>
        <HeaderWrapper>
          <HeaderBtn type="button">
            <NavLink to="/FormLogin">Sign in</NavLink>
          </HeaderBtn>
          <HeaderUserIcon>
            <use href={`${WaterTracker}#icon-user-profile`}></use>
          </HeaderUserIcon>
        </HeaderWrapper>
      </HeaderSection>
    </>
  );
};

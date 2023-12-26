import {
  HeaderSection,
  HeaderWrapper,
  HeaderBtn,
  LogoApp,
  HeaderUserIcon,
  LogoContainer,
} from './Header.styled.js';
import WaterTracker from '../../WelcomePage/img/set-icons.svg';

export const Header = () => {
  return (
    <>
      <HeaderSection>
        <LogoContainer>
          <LogoApp>
            <use href={`${WaterTracker}#icon-logo`}></use>
          </LogoApp>
        </LogoContainer>

        <HeaderWrapper>
          <HeaderBtn type="button">Sign in</HeaderBtn>
          <HeaderUserIcon>
            <use href={`${WaterTracker}#icon-user-profile`}></use>
          </HeaderUserIcon>
        </HeaderWrapper>
      </HeaderSection>
    </>
  );
};

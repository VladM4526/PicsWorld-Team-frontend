import {
  HeaderSection,
  LogoText,
  HeaderWrapper,
  HeaderBtn,
  HeaderLink,
} from './Header.styled.js';
import WaterTracker from '../../WelcomePage/img/set-icons.svg';

export const Header = () => {
  return (
    <div>
      <HeaderSection>
        <HeaderLink to="/">
          <svg>
            <use href={`${WaterTracker}#icon-logo-app`}></use>
          </svg>
          <LogoText>
            tracker<br></br>of water
          </LogoText>
        </HeaderLink>

        <HeaderLink to="/signin">
          <HeaderWrapper>
            <HeaderBtn type="button">Sign in</HeaderBtn>
            <div>
              <svg>
                <use href={`${WaterTracker}#icon-user-profile`}></use>
              </svg>
            </div>
          </HeaderWrapper>
        </HeaderLink>
      </HeaderSection>
    </div>
  );
};

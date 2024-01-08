import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  HeaderSection,
  LogoApp,
  LogoContainer,
  UserData,
} from 'Components/WelcomePage/Header/Header.styled';
import WaterTracker from '../../img/set-icons.svg';
import { selectIsLoggedIn, selectUser } from '../../redux-files/auth/selectors';
import { UserLogoModal } from 'Components/UserModal/UserModal';

export const Menu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isActive, setIsActive] = useState(false);

  const closeOutside = e => {
    isActive(false);
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <LogoContainer>
          <NavLink to="/">
            {isLoggedIn && (
              <>
                <LogoApp>
                  <use href={`${WaterTracker}#icon-logo-app`}></use>
                </LogoApp>
              </>
            )}
          </NavLink>
        </LogoContainer>
        <UserData
          onClick={e => setIsActive(!isActive)}
        >{`${user.email}`}</UserData>
      </HeaderSection>
      {isActive && <UserLogoModal onClick={e => closeOutside()} />}
    </HeaderContainer>
  );
};

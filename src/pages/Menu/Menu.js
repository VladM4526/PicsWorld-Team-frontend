import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  HeaderSection,
  LogoApp,
  LogoContainer,
  UserData,
  UserPicture,
  UserLogoWrapper
} from 'Components/WelcomePage/Header/Header.styled';
import WaterTracker from '../../img/set-icons.svg';
import { selectUser, selectIsLoggedIn } from '../../redux-files/auth/selectors';
import { UserLogoModal} from 'Components/UserModal/UserModal';

export const Menu = () => {
  const users = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const [isActive, setIsActive] = useState(false);

  const toggleModal = e => {
    setIsActive(isActive => !isActive);
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <LogoContainer>
          <NavLink path="/">
            {isLoggedIn && (
              <>
                <LogoApp>
                  <use href={`${WaterTracker}#icon-logo-app`}></use>
                </LogoApp>
              </>
            )}
          </NavLink>
        </LogoContainer>
        <UserLogoWrapper>
        <UserData onClick={toggleModal}>
          {user.name ? user.name : 'V'}
          {users.avatarURL && (
            <UserPicture src={users.avatarURL} alt="avatar" />
          )}
        </UserData>
          {isActive && <UserLogoModal onCloseSetting={toggleModal} />}
        </UserLogoWrapper>
      </HeaderSection>
      
    </HeaderContainer>
  );
};

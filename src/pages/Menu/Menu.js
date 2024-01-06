import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HeaderSection,
  LogoApp,
  LogoContainer,
} from 'Components/WelcomePage/Header/Header.styled';
import WaterTracker from '../../img/set-icons.svg';
import { selectIsLoggedIn, selectUser } from '../../redux-files/auth/selectors';

export const Menu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
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
        <p>{`${user.name}`}</p>
      </HeaderSection>
    </>
  );
};

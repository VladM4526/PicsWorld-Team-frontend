import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectUserToken } from '../../redux-files/auth/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserToken);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

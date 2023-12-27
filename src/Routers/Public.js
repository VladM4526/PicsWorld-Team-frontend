import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectUserToken } from '../Redux/Auth/selectors';

export const PublicRoute = ({ component }) => {
  const token = useSelector(selectUserToken);
  const location = useLocation();

  return !token ? component : <Navigate to={location.state ?? '/'} />;
};

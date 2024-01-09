import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './Routes/Public';
import { PrivateRoute } from './Routes/Private';
import { WelcomePage } from './WelcomePage/Welcome';
import { HomePage } from 'pages/HomePage';
import FormReg from 'pages/FormReg';
import LoginPage from 'pages/LoginPage';
import { selectUserToken } from '../redux-files/auth/selectors';
import { refreshUserAccount } from '../redux-files/auth/backendRequest';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUserAccount());
    }
  }, [dispatch, token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          {/* add navlink after when user sign up made */}
          <Route
            path="FormReg"
            element={
              <PublicRoute redirectTo="/HomePage" component={<FormReg />} />
            }
          />
          <Route
            path="FormLogin"
            element={
              <PublicRoute redirectTo="/HomePage" component={<LoginPage />} />
            }
          />
          <Route
            path="HomePage"
            element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
          />
        </Route>
      </Routes>
    </>
  );
};

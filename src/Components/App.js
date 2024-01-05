import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
// import { FormLogin } from 'Components/FormLogin/FormLogin';
// import { FormReg } from 'Components/FormRegistration/FormSignUp';
// import { WelcomePage } from './Components/WelcomePage/Welcome';
// import { HomePage } from 'pages/HomePage';
// import { LogOutModal } from 'Components/LogOutModal/LogOutModal';
import { PublicRoute } from './Routes/Public';
import { PrivateRoute } from './Routes/Private';
import { WelcomePage } from './WelcomePage/Welcome';
import { HomePage } from 'pages/HomePage';
import FormReg from 'pages/FormReg';
import LoginPage from 'pages/LoginPage';
import { selectUserToken } from '../redux-files/auth/selectors';
import { refreshUserAccount } from '../redux-files/auth/backendRequest';
// import { MyDailyNormaPage } from 'pages/MyDailyNormaPage';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  console.log(token);

  useEffect(() => {
    if (token) {
      dispatch(refreshUserAccount());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
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
            element={
              <PrivateRoute redirectTo="/HomePage" component={<HomePage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

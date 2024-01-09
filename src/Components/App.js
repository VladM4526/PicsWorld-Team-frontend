import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './Routes/Public';
import { PrivateRoute } from './Routes/Private';
import { WelcomePage } from './WelcomePage/Welcome';
import { HomePage } from '../pages/HomePage';
import { FormReg } from '../pages/FormReg';
import { LoginPage } from '../pages/LoginPage';
import { Loader } from './Loader/Loader';
import {
  selectUserToken,
  selectIsRefreshing,
  selectIsLoggedIn,
} from '../redux-files/auth/selectors';
import { refreshUserAccount } from '../redux-files/auth/thunk';
// import { MyDailyNormaPage } from 'pages/MyDailyNormaPage';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectUserToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (token) {
      dispatch(refreshUserAccount());
    }

    if (!token) {
      dispatch(refreshUserAccount());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<WelcomePage />} />
          <Route
            path="HomePage"
            element={
              <PrivateRoute redirectTo="/HomePage" component={<HomePage />} />
            }
          />
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
        </Route>

        {isLoggedIn ? (
          <Route path="/HomePage" element={<HomePage />} />
        ) : (
          <Route path="/" element={<WelcomePage />} />
        )}
      </Routes>
    </>
  );
};

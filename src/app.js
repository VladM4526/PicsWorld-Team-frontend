import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout';
import { selectUserToken } from './Redux/Auth/selectors';
import { FormLogin } from 'Components/FormLogin/FormLogin';
import { FormReg } from 'Components/FormRegistration/FormSignUp';
import { WelcomePage } from './Components/WelcomePage/WelcomePage';
import { HomePage } from 'pages/HomePage';
// import { LogOutModal } from 'Components/LogOutModal/LogOutModal';
import { PublicRoute } from './Routers/Public';
import { PrivateRoute } from './Routers/Private';
// import { MyDailyNormaPage } from 'pages/MyDailyNormaPage';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  useEffect(() => {
    if (token) {
      dispatch(selectUserToken());
    }
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<WelcomePage />} />
          <Route
            index
            path="WelcomePage"
            element={
              <PrivateRoute redirectTo="HomePage" component={<HomePage />} />
            }
          />
          <Route
            path="FormReg"
            element={
              <PublicRoute redirectTo="HomePage" component={<FormReg />} />
            }
          />
          <Route
            path="FormLogin"
            element={
              <PublicRoute redirectTo="HomePage" component={<FormLogin />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

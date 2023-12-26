import { Outlet } from 'react-router-dom';
import { WelcomePage } from './Components/WelcomePage/WelcomePage';
import { FormLogin } from 'Components/FormLogin/FormLogin';
import { FormReg } from 'Components/FormRegistration/FormSignUp';

export const Layout = () => {
  return (
    <>
      <WelcomePage />
      <FormLogin />
      <FormReg />
      <Outlet />
    </>
  );
};

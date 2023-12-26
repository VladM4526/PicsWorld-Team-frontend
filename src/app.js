import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { FormLogin } from 'Components/FormLogin/FormLogin';
import { FormReg } from 'Components/FormRegistration/FormSignUp';
import { WelcomePage } from './Components/WelcomePage/WelcomePage';
import { LogOutModal } from 'Components/LogOutModal/LogOutModal';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/FormLogin" element={<FormLogin />} />
          <Route index path="/FormReg" element={<FormReg />} />
        </Route>
      </Routes>
    </>
  );
};

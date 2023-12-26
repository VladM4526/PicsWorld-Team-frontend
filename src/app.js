import { FormLogin } from 'Components/FormLogin/FormLogin';
import { FormReg } from 'Components/FormRegistration/FormSignUp';
import { WelcomePage } from './Components/WelcomePage/WelcomePage';

export const App = () => {
  return (
    <>
      <WelcomePage />
      <FormLogin />
      <FormReg />
    </>
 );
}
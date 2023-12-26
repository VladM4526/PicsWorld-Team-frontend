// import { BgPicture } from './BgPicture';
import { FormSignUp } from './Form';
import { Header } from '../WelcomePage/Header/Header';
import { FormSection } from 'Components/FormLogin/Form.styled';

export const FormReg = () => {
  return (
    <>
      <Header />
      <FormSection>
      <FormSignUp />
      </FormSection>
    </>
  );
};

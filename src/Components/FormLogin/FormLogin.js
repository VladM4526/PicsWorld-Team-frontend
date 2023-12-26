import { BgPicture } from './BgPicture';
import { FormSignIn } from './Form';
import { Header } from '../WelcomePage/Header/Header';
import { FormSection } from './Form.styled';

export const FormLogin = () => {
  return (
    <>
      <Header />
      <FormSection>
      <BgPicture />
      <FormSignIn />
    </FormSection>
    </>
  );
};

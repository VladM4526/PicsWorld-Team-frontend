// import { BgPicture } from './BgPicture';

import { Header } from '../WelcomePage/Header/Header';
import { FormSection, ImgBottle } from 'Components/FormLogin/Form.styled';
import SignUpForm from './FormRegistration';
// import { FormSignUp } from './Form';

export const FormReg = () => {
  return (
    <>
      {/* <Header /> */}
      <ImgBottle>
        <FormSection>
          <SignUpForm />
        </FormSection>
      </ImgBottle>
    </>
  );
};

// import { BgPicture } from './BgPicture';
import { FormSignUp } from './Form';
import { Header } from '../WelcomePage/Header/Header';
import { FormSection, ImgBottle } from 'Components/FormLogin/Form.styled';

export const FormReg = () => {
  return (
    <>
      <Header />
      <ImgBottle>
        <FormSection>
          <FormSignUp />
        </FormSection>
      </ImgBottle>
    </>
  );
};

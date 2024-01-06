// import { BgPicture } from './BgPicture';
import { FormLogin } from './FormLogin';
// import { Header } from '../WelcomePage/Header/Header';
import { FormSection, ImgBottle } from './Form.styled';

export const FormSignIn = () => {
  return (
    <>
      <ImgBottle>
        <FormSection>
          <FormLogin />
        </FormSection>
      </ImgBottle>
    </>
  );
};

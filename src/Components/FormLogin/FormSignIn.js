// import { BgPicture } from './BgPicture';
import { FormLogin } from './FormLogin';
// import { Header } from '../WelcomePage/Header/Header';
import { FormSection, ImgBottle } from './Form.styled';

export const FormSignIn = () => {
  return (
    <>
      {/* <Header /> */}
      <ImgBottle>
        <FormSection>
          {/* <BgPicture /> */}
          <FormLogin />
        </FormSection>
      </ImgBottle>
    </>
  );
};

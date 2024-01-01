// import { BgPicture } from './BgPicture';
import { FormSignIn } from './Form';
import { Header } from '../WelcomePage/Header/Header';
import { FormSection, ImgBottle } from './Form.styled';

export const FormLogin = () => {
  return (
    <>
      <Header />
      <ImgBottle>
        <FormSection>
      {/* <BgPicture /> */}
          <FormSignIn />
        </FormSection>
      </ImgBottle>
    </>
  );
};

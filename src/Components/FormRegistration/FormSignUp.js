// import { BgPicture } from './BgPicture';

// import { Header } from '../WelcomePage/Header/Header';
import { FormSection, ImgBottle } from 'Components/FormLogin/Form.styled';
import FormRegistration from './FormRegistration';
// import { FormSignUp } from './Form';

export const FormSignUp = () => {
  return (
    <>
      <ImgBottle>
        <FormSection>
          <FormRegistration />
        </FormSection>
      </ImgBottle>
    </>
  );
};

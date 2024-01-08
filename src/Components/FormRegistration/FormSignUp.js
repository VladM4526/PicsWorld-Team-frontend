import { FormSection, ImgBottle } from 'Components/FormLogin/Form.styled';
import FormRegistration from './FormRegistration';

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

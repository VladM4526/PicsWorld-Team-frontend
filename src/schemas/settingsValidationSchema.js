import * as Yup from 'yup';

export const settingsValidationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string(),
  gender: Yup.string().oneOf(['male', 'female'], 'Invalid gender'),
  oldPassword: Yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64'),
    newPasword: Yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64'),
    repeatNewPassword: Yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    
});
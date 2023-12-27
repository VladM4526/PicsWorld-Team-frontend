import * as yup from 'yup';

export const validateSchema = yup.object().shape({
  email: yup.string().required('Required'),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

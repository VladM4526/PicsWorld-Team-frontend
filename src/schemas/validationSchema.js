import * as Yup from 'yup';

export const validateSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

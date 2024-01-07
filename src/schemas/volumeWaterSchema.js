import * as Yup from 'yup';

export const volumeWaterSchema = Yup.object().shape({
  date: Yup.date().required('Required'),
  waterVolume: Yup.number()
    .positive('Must be a positive number')
    .min(1, 'Too small amount!')
    .max(3000, 'Too much!')
    .required('Required'),
});

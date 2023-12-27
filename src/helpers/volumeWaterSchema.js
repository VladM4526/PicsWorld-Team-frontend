import * as Yup from 'yup';

export const volumeWaterSchema = Yup.object().shape({
  date: Yup.date().required('Required'),
  volumeWater: Yup.number()
    .positive('Must be a positive number')
    .min(1, 'Too small amount!')
    .max(5000, 'Too much!')
    .required('Required'),
});

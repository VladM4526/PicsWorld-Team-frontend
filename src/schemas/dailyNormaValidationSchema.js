import * as Yup from 'yup';

export const dailyNormaValidationSchema = Yup.object().shape({
    weight: Yup.number('Must be number')
      .positive('Weight must be positive')
      .min(20)
      .required('Weight is required'),
    time: Yup.number('Must be number')
          .min(0)
          .max(24, 'Time mustn`t be less than 24')
          .required('Time is required'),
    sex: Yup.string()
      .oneOf(['For girl', 'For man'], 'Invalid sex')
      .required('Sex is required'),
    water: Yup.number('Must be number')
      .positive('Water must be positive')
      .required('Water is required'),
  });
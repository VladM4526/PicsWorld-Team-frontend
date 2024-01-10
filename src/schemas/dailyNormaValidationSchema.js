import * as Yup from 'yup';

export const dailyNormaValidationSchema = Yup.object().shape({
    weight: Yup.number('Must be number')
      .positive('Weight must be positive')
      .min(20, 'Weight must be more than 20 kg')
      .required('Weight is required'),
    time: Yup.number('Must be number')
          .min(0, 'Time mustn`t be negative')
          .max(24, 'Time mustn`t be less than 24'),
    sex: Yup.string()
      .oneOf(['For girl', 'For man'], 'Invalid sex')
      .required('Sex is required'),
    water: Yup.number('Must be number')
      .positive('Water must be positive')
      .required('Water is required'),
  });
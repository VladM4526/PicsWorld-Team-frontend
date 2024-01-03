import * as Yup from 'yup';

export const dailyNormaValidationSchema = Yup.object().shape({
    weight: Yup.number()
      .positive('Weight must be positive')
      .required('Weight is required'),
    time: Yup.number()
      .positive('Time must be positive')
      .required('Time is required'),
    sex: Yup.string()
      .oneOf(['For girl', 'For man'], 'Invalid sex')
      .required('Sex is required'),
    water: Yup.number()
      .positive('Water must be positive')
      .required('Water is required'),
  });
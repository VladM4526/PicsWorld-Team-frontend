import moment from 'moment';
export const localeFormat = 'eu';
export const localeTime = (date, locale = 'HH:mm') =>
  moment(date).format(locale);

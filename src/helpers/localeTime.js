import moment from 'moment';
export const localeFormat = navigator.language;
export const localeTime = (date, locale = 'HH:mm') =>
  moment(date).format(locale);

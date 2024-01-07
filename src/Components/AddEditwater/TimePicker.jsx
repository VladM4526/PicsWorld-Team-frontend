import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import eu from 'date-fns/locale/eu';
import { localeFormat } from 'helpers/localeTime';
registerLocale('eu', eu);

setDefaultLocale(localeFormat);

export const TimePicker = ({ onChange, date }) => {
  return (
    <ReactDatePicker
      selected={date}
      onChange={newDate => onChange(newDate)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={5}
      timeCaption="Time"
      dateFormat="HH:mm"
      shouldCloseOnSelect={true}
    />
  );
};

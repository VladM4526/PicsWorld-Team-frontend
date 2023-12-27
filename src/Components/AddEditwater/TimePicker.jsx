import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import eu from 'date-fns/locale/eu';
registerLocale('eu', eu);

const userLocale = navigator.language.split('-')[0] === 'en' ? 'en' : 'eu';
setDefaultLocale(userLocale);

export const TimePicker = ({ onChange, date }) => (
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

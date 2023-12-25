import Spinner from 'react-spinner-material';
import { TimePicker } from './TimePicker';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { getTimeHhMm } from 'helpers/getNowTime';
import { AmountWater } from './AmountWater';
import { volumeWaterSchema } from 'helpers/volumeWaterSchema';
// import { RegisterSchema } from 'helpers/submitCheck';
// import { register } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth';

const initialValues = {
  date: new Date(),
  volumeWater: 50,
};

const step = 50;

export const AddWater = ({ onClose }) => {
  const isLoading = false;

  const handleSubmit = values => {
    console.log('values', values);
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={volumeWaterSchema}
    >
      {({ values: { volumeWater, date }, setFieldValue }) => {
        const handleAmountChange = amount => {
          let value = volumeWater / step;
          value = amount < 0 ? Math.ceil(value) : Math.floor(value);
          setFieldValue('volumeWater', value * step + amount);
        };

        const handleChangeTime = newDate => setFieldValue('date', newDate);

        return (
          <Form name="addWater">
            <h3>Choose a value:</h3>

            <label htmlFor="volumeWaterDisplay">
              <h4>Amount of water:</h4>
            </label>

            <AmountWater
              onClick={handleAmountChange}
              step={step}
              volumeWater={volumeWater}
            />

            <label htmlFor="time">
              <h4>Recording time:</h4>{' '}
            </label>

            <TimePicker onChange={handleChangeTime} date={date} name="time" />
            <ErrorMessage name="time" component="div" />

            <label htmlFor="volumeWater">
              <h3>Enter the value of the water used:</h3>
            </label>

            <Field
              type="number"
              name="volumeWater"
              placeholder={volumeWater}
              step="10"
              min="0"
            />
            <ErrorMessage name="volumeWater" component="div" />

            <div>
              <span>{volumeWater + 'ml'}</span>
              <button type="submit">
                {isLoading ? (
                  <Spinner
                    radius={25}
                    color={'#333'}
                    stroke={3}
                    visible={true}
                  />
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

import Spinner from 'react-spinner-material';
import { TimePicker } from './TimePicker';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { getTimeHhMm } from 'helpers/getNowTime';
import { AmountWater } from './AmountWater';
import { volumeWaterSchema } from 'helpers/volumeWaterSchema';
import {
  AddWaterFooterStyled,
  ErrorMsgStyled,
  FormStyled,
  FormWrapStyled,
} from './AddEditWater.styled';
import { EditedData } from './EditedData';
// import { RegisterSchema } from 'helpers/submitCheck';
// import { register } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth';

const initialValues = {
  date: new Date(),
  volumeWater: 0,
};

const step = 50;

export const AddEditWater = ({ onClose, editData = true }) => {
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
          <FormStyled name="addWater">
            {!!editData && (
              <EditedData editedData={{ volume: 250, time: '07:00' }} />
            )}

            <h3>{!editData ? 'Choose a value:' : 'Correct entered data:'}</h3>

            <FormWrapStyled>
              <label htmlFor="volumeWaterDisplay">
                <h4>Amount of water:</h4>
                <AmountWater
                  onClick={handleAmountChange}
                  step={step}
                  volumeWater={volumeWater}
                />
              </label>

              <label htmlFor="time">
                <h4>Recording time:</h4>{' '}
                <ErrorMsgStyled name="time" component="div" />
                <TimePicker
                  onChange={handleChangeTime}
                  date={date}
                  name="time"
                />
              </label>

              <label htmlFor="volumeWater">
                <h3>Enter the value of the water used:</h3>
                <ErrorMsgStyled name="volumeWater" component="div" />
                <Field
                  type="text"
                  name="volumeWater"
                  placeholder={volumeWater}
                />
              </label>

              <AddWaterFooterStyled>
                <p>{volumeWater + 'ml'}</p>
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
              </AddWaterFooterStyled>
            </FormWrapStyled>
          </FormStyled>
        );
      }}
    </Formik>
  );
};

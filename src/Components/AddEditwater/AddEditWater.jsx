import { useDispatch } from 'react-redux';
import Spinner from 'react-spinner-material';
import { Field, Formik } from 'formik';
import { TimePicker } from './TimePicker';
import { AmountWater } from './AmountWater';
import { volumeWaterSchema } from 'helpers/volumeWaterSchema';
import {
  AddWaterFooterStyled,
  ErrorMsgStyled,
  FormStyled,
  FormWrapStyled,
} from './AddEditWater.styled';
import { EditNote } from './EditNote';
import { addWater, editWater } from '../../Redux/water/waterOperations';
import { useWater } from '../../Redux/hooks/useWater';

const initialValues = {
  date: new Date(),
  volumeWater: 0,
};

const step = 50;

export const AddEditWater = ({ onClose, editNote = '250', isEdit }) => {
  const dispatch = useDispatch();
  const { isLoading } = useWater();

  const handleSubmit = values => {
    if (isEdit) {
      dispatch(editWater(editNote.id, values));
      onClose();
    } else {
      dispatch(addWater(values));
    }
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
            {isEdit && <EditNote editNote={editNote} />}

            <h3>{isEdit ? 'Correct entered data:' : 'Choose a value:'}</h3>

            <FormWrapStyled>
              <label htmlFor="volumeWaterDisplay">
                <h4>Amount of water:</h4>
                <AmountWater
                  onClick={handleAmountChange}
                  step={step}
                  volumeWater={volumeWater}
                  name="volumeWaterDisplay"
                />
              </label>

              <label htmlFor="time">
                <h4>Recording time:</h4>
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

import { useDispatch } from 'react-redux';
import Spinner from 'react-spinner-material';
import { Field, Formik } from 'formik';
import { TimePicker } from './TimePicker';
import { AmountWater } from './AmountWater';
import { volumeWaterSchema } from 'schemas/volumeWaterSchema';
import {
  AddWaterFooterStyled,
  ErrorMsgStyled,
  FormStyled,
  FormWrapStyled,
} from './AddEditWater.styled';
import { EditNote } from './EditNote';
import { addWater, editWater } from '../../redux-files/water/waterOperations';
import { useWater } from 'redux-files/hooks/useWater';

const currentDay = new Date();
const step = 50;

export const AddEditWater = ({
  onClose,
  isEdit,
  id,
  editWaterVolume,
  editDate,
}) => {
  const dispatch = useDispatch();

  const { isLoading } = useWater();

  const handleSubmit = values => {
    const newNote = {
      date: values.date,
      waterVolume: values.waterVolume,
    };
    isEdit ? dispatch(editWater({ id, newNote })) : dispatch(addWater(newNote));
    onClose();
  };

  return (
    <Formik
      initialValues={{
        waterVolume: editWaterVolume || 0,
        date: editDate || currentDay,
      }}
      onSubmit={handleSubmit}
      validationSchema={volumeWaterSchema}
    >
      {({ values: { waterVolume, date }, setFieldValue }) => {
        const handleAmountChange = amount => {
          let value = waterVolume / step;
          value = amount < 0 ? Math.ceil(value) : Math.floor(value);
          setFieldValue('waterVolume', value * step + amount);
        };

        const handleChangeTime = newDate => {
          setFieldValue('date', newDate);
        };

        return (
          <FormStyled name="addWater">
            {isEdit && (
              <EditNote waterVolume={editWaterVolume} date={editDate} />
            )}

            <h3>{isEdit ? 'Correct entered data:' : 'Choose a value:'}</h3>

            <FormWrapStyled>
              <label htmlFor="waterVolumeDisplay">
                <h4>Amount of water:</h4>
                <AmountWater
                  onClick={handleAmountChange}
                  step={step}
                  waterVolume={waterVolume}
                  name="waterVolumerDisplay"
                />
              </label>

              <label htmlFor="time">
                <h4>Recording time:</h4>
                <ErrorMsgStyled name="time" component="div" />
                <TimePicker
                  onChange={handleChangeTime}
                  date={new Date(date)}
                  name="time"
                />
              </label>

              <label htmlFor="waterVolume">
                <h3>Enter the value of the water used:</h3>
                <ErrorMsgStyled name="waterVolume" component="div" />
                <Field
                  type="number"
                  name="waterVolume"
                  placeholder={waterVolume}
                />
              </label>

              <AddWaterFooterStyled>
                <p>{waterVolume + 'ml'}</p>
                <button type="submit">
                  {isLoading ? (
                    <Spinner
                      radius={20}
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

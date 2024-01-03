import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { ErrorMessage, Formik } from 'formik';
import {
  customStyles,
  LiterSpan,
  LabelRadio,
  FormHeader,
  ModalHeader,
  Label,
  LabelBold,
  StyledField,
  StyledForm,
  Button,
  SexDiv,
  Formula,
  ExplainFormula,
  ButtonWrapper,
} from './DailyNormaModal.styled';
import { dailyNormaValidationSchema } from 'schemas/dailyNormaValidationSchema';

const initialValues = {
  weight: 0,
  sex: 'For girl',
  time: 0,
  water: 0,
};

// const user = {
//   sex: 'Girl'
// }

export const DailyNormaModal = ({ isOpen, onRequestClose }) => {
  // const dispatch = useDispatch();
  // const [selectedSex, setSelectedSex] = useState('girl');
  // const user = useSelector(selectUser);

  const [formData, setFormData] = useState(initialValues);
  const [calculateWater, setCalculatedWater] = useState(0);

  const calculateWaterFunction = values => {
    const { weight, sex, time } = values;
    const numericWeight = parseInt(weight);
    const numericTime = parseInt(time);

    if (numericWeight || numericTime) {
      const multiplier = sex === 'For girl' ? 0.03 : 0.04;
      const waterValue =
        numericWeight * multiplier +
        numericTime * (sex === 'For girl' ? 0.4 : 0.6);
      setCalculatedWater(waterValue.toFixed(2));
    } else {
      setCalculatedWater(0);
    }
  };

  useEffect(() => {
    calculateWaterFunction(formData);
  }, [formData]);

  const handleChange = (e, formikProps) => {
    formikProps.handleChange(e);

    const { name, value } = e.target;
    const numericValue = parseFloat(value);

    setFormData(prevData => ({
      ...prevData,
      [name]: isNaN(numericValue) ? 0 : numericValue,
    }));

    if (name === 'sex' || name === 'time') {
      calculateWaterFunction({
        ...formikProps.values,
        [name]: isNaN(numericValue) ? 0 : numericValue,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>

      <ModalHeader>My daily norma</ModalHeader>
      <SexDiv>
        <p>
          For girl: <Formula>V=(M*0,03) + (T*0,4)</Formula>{' '}
        </p>
        <p>
          For man: <Formula>V=(M*0,04) + (T*0,6)</Formula>{' '}
        </p>
      </SexDiv>

      <ExplainFormula>
        * V is the volume of the water norm in liters per day, M is your body
        weight, T is the time of active sports, or another type of activity
        commensurate in terms of loads (in the absence of these, you must set 0)
      </ExplainFormula>

      <FormHeader>Calculate your rate:</FormHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={dailyNormaValidationSchema}
        onSubmit={values => {
          console.log(values); // тут треба зробити функцію, яка передає на бекенд значення поля water
        }}
      >
        {formikProps => (
          <StyledForm>
            <SexDiv>
              <LabelRadio>
                <StyledField
                  type="radio"
                  name="sex"
                  value="For girl"
                  onChange={e => handleChange(e, formikProps)}
                />
                For girl
              </LabelRadio>
              <LabelRadio>
                <StyledField
                  type="radio"
                  name="sex"
                  value="For man"
                  onChange={e => handleChange(e, formikProps)}
                />
                For man
              </LabelRadio>
            </SexDiv>

            <Label>
              Your weight in kilograms:
              <StyledField
                type="number"
                name="weight"
                onChange={e => handleChange(e, formikProps)}
              />
              <ErrorMessage name="weight" component="div" />
            </Label>
            <Label>
              The time of active participation in sports or other activities
              with a high physical. load:
              <StyledField
                type="number"
                name="time"
                onChange={e => handleChange(e, formikProps)}
              />
              <ErrorMessage name="time" component="div" />
            </Label>

            <p>
              The required amount of water in liters per day:{' '}
              <LiterSpan>{calculateWater} L</LiterSpan>{' '}
            </p>

            <LabelBold>
              Write down how much water you will drink:
              <StyledField type="number" name="water" />
              <ErrorMessage name="water" component="div" />
            </LabelBold>
            <ButtonWrapper>
              <Button type="submit" onClick={onRequestClose}>
                Save
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default DailyNormaModal;

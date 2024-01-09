import { Formik, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInThunk } from '../../redux-files/auth/thunk';
import WaterTrackerIcons from '../../img/set-icons.svg';
import {
  Button,
  ErrorMsg,
  FormWrapper,
  InputWrapper,
  Label,
  NavLinkStyled,
  SignInHeader,
  StyledField,
  SvgStyled,
} from './Form.styled';

import { validateSchema } from '../../schemas/validationSchema';

export const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = e => {
    dispatch(signInThunk(e));
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <FormWrapper>
      <SignInHeader>Sign In</SignInHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <Label>
              Enter your email
              <StyledField
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                $hasError={touched.email && errors.email}
                value={values.email}
                required
              />
              <ErrorMessage name="email" component={ErrorMsg} />
            </Label>
            <Label>
              Enter your password
              <InputWrapper>
                <StyledField
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  $hasError={touched.password && errors.password}
                  value={values.password}
                  required
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={togglePasswordVisibility}
                >
                  <use
                    href={`${WaterTrackerIcons}#${
                      showPassword ? 'icon-eye-open' : 'icon-open-closed'
                    }`}
                  ></use>
                </SvgStyled>
                <ErrorMessage name="password" component={ErrorMsg} />
              </InputWrapper>
            </Label>
            <Button type="submit">Sign In</Button>
          </Form>
        )}
      </Formik>
      <NavLinkStyled to="/FormReg">Sign Up</NavLinkStyled>
    </FormWrapper>
  );
};

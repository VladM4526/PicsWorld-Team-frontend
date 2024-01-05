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
} from 'Components/FormLogin/Form.styled';
import { toast } from 'react-toastify';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { validateSchema } from '../../schemas/validationSchema';

import WaterTrackerIcons from '../../img/set-icons.svg';
import { signUpThunk } from '../../redux-files/auth/backendRequest';

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

export const FormRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [repeatShowPassword, setRepeatShowPassword] = useState(false);

  const handleSubmit = async values => {
    console.log('Hello');
    if (values.password !== values.repeatPassword) {
      toast.error(`Password must be the same`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      dispatch(signUpThunk({ email: values.email, password: values.password }));
    }
  };

  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'repeatPassword') {
      setRepeatShowPassword(!repeatShowPassword);
    }
  };

  return (
    <FormWrapper>
      <SignInHeader>Sign Up</SignInHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <Label>Enter your email</Label>
            <StyledField
              type="email"
              name="email"
              placeholder="E-mail"
              $hasError={touched.email && errors.email}
              value={values.email}
              required
            />
            <ErrorMessage name="email" component={ErrorMsg} />

            <Label>
              Enter your password
              <InputWrapper>
                <StyledField
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  $hasError={touched.password && errors.password}
                  value={values.password}
                  required
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={() => togglePasswordVisibility('password')}
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
            <Label>
              Repeat password
              <InputWrapper>
                <StyledField
                  type={repeatShowPassword ? 'text' : 'password'}
                  name="repeatPassword"
                  placeholder="Repeat password"
                  $hasError={touched.repeatPassword && errors.repeatPassword}
                  value={values.repeatPassword}
                  required
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={() => togglePasswordVisibility('repeatPassword')}
                >
                  <use
                    href={`${WaterTrackerIcons}#${
                      showPassword ? 'icon-eye-open' : 'icon-open-closed'
                    }`}
                  ></use>
                </SvgStyled>
                <ErrorMessage name="repeatPassword" component={ErrorMsg} />
              </InputWrapper>
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <NavLinkStyled to="/FormLogin">Sign in</NavLinkStyled>
    </FormWrapper>
  );
};

export default FormRegistration;

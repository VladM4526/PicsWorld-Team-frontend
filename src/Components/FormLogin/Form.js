import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInThunk } from '../../Redux/Auth/backendRequest';
import WaterTrackerIcons from './img/set-icons.svg';
import {
  Button,
  FormWrapper,
  InputWrapper,
  Label,
  NavLinkStyled,
  SignInHeader,
  StyledField,
  SvgStyled,
} from './Form.styled';

import { validateSchema } from './validationSchema';

export const FormSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = e => {
    dispatch(signInThunk(e));
  };

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateSchema,
    onSubmit,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <FormWrapper>
      <SignInHeader>Sign In</SignInHeader>
      <form onSubmit={handleSubmit}>
        <Label>
          Enter your email
          <StyledField
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && errors.email ? <div>{errors.email}</div> : null}
          {/* <ErrorMsg name="email" component="div"/> */}
        </Label>
        <Label>
          Enter your password
          <InputWrapper>
            <StyledField
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              onChange={handleChange}
              value={values.password}
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
          </InputWrapper>
        </Label>
        <Button type="submit">Sign In</Button>
        <NavLinkStyled to="/FormReg">Sign Up</NavLinkStyled>
      </form>
    </FormWrapper>
  );
};

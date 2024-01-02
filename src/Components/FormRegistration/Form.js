import {
  Button,
  FormWrapper,
  InputWrapper,
  Label,
  NavLinkStyled,
  SignInHeader,
  StyledField,
  SvgStyled,
} from 'Components/FormLogin/Form.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { validateSchema } from './validationSchema';

import WaterTrackerIcons from '../../img/set-icons.svg';
import { signUpThunk } from '../../Redux/Auth/backendRequest';

export const FormSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = e => {
    dispatch(signUpThunk(e));
  };

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
      // repeatPassword: ""
    },
    validationSchema: validateSchema,
    onSubmit,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (

    <FormWrapper>
      <SignInHeader>Sign Up</SignInHeader>
      <form onSubmit={handleSubmit}>
        <Label>
          Enter your email
          <StyledField
            id="email"
            name="email"
            type="text"
            placeholder="Email"
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
              placeholder="Password"
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
        {/* <Label>
          Repeat password
          <InputWrapper>
            <StyledField
              id="passwordrepeat"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Repeat password"
              onChange={formik.handleChange}
              value={formik.values.password}
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
        </Label> */}

        <Button type="submit">Sign Up</Button>
      </form>
      <NavLinkStyled to="/FormLogin">Sign in</NavLinkStyled>
    </FormWrapper>

  );
};

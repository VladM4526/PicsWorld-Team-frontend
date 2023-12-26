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
import { useState } from 'react';

import * as Yup from 'yup';
import WaterTrackerIcons from './img/set-icons.svg';

export const FormSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <FormWrapper>
      <SignInHeader>Sign Up</SignInHeader>
      <form onSubmit={formik.handleSubmit}>
        <Label>
          Enter your email
          <StyledField
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
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
        </Label>
        <Label>
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
        </Label>

        <Button type="submit">Sign Up</Button>
        <NavLinkStyled to="/FormLogin">
          Sign in
        </NavLinkStyled>
      </form>
    </FormWrapper>
  );
};

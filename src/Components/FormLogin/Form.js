import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import WaterTrackerIcons from './img/set-icons.svg';
import { Button, FormWrapper, InputWrapper, Label, SignInHeader, StyledField, SvgStyled } from './Form.styled';

export const FormSignIn = () => {
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
      <SignInHeader>Sign In</SignInHeader>
      <form onSubmit={formik.handleSubmit}>
        <Label>Enter your email
        <StyledField
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        {/* <ErrorMsg name="email" component="div"/> */}
        </Label>
        <Label>Enter your password
          <InputWrapper>
              <StyledField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <SvgStyled height="16" width="16" onClick={togglePasswordVisibility}>
                  <use href={`${WaterTrackerIcons}#${showPassword ? "icon-eye-open" : "icon-open-closed"}`}></use>
              </SvgStyled>
            </InputWrapper>
            </Label>
        
        
            
         

        <Button type='submit'>Sign In</Button>
      
      </form>
    </FormWrapper>
  );
};

import { useFormik } from 'formik';
import * as Yup from 'yup';
// import WaterTrackerIcons from './img/set-icons.svg';
import { Button, FormWrapper, Label, SignInHeader, StyledField } from './Form.styled';

export const FormSignIn = () => {
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
        <Label>Password
        <StyledField
          id="password"
          name="password"
          type="text"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        </Label>
        {/* <svg>
          <use href={`${WaterTrackerIcons}#icon-user-profile`}></use>
        </svg> */}
        <Button type='submit'>Sign In</Button>
      
      </form>
    </FormWrapper>
  );
};

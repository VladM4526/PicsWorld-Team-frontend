import { useFormik } from 'formik';
import * as Yup from 'yup';
import WaterTrackerIcons from './img/set-icons.svg';

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
    <>
      <form onSubmit={formik.handleSubmit}>
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label>Password</label>
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <svg>
          <use href={`${WaterTrackerIcons}#icon-user-profile`}></use>
        </svg>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

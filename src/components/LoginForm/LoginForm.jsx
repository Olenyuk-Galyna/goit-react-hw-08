import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={ContactFormSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.text}>Email</span>
            <Field className={css.field} type="email" name="email" />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span className={css.text}>Password</span>
            <Field className={css.field} type="password" name="password" />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button className={css.btn} type="submit">
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

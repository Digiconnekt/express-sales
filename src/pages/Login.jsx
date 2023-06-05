import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axiosInstance from "../API/InstanceAPI";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../redux/userSlice";
import { toast } from "react-toastify";
import { Loading } from "../components";

const Login = () => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate("/");
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [user, Navigate]);

  const loginInitialValues = { email: "", password: "" };
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const loginHandler = async (loginData, { setSubmitting }) => {
    try {
      const res = await toast.promise(axiosInstance.post("/login", loginData), {
        pending: "Logging in",
        success: "Logged in successfully!",
        error: "An error occurred while logging in.",
      });
      console.log("🚀 ~ file: Login.jsx:7 ~ loginHandler ~ res:", res);
      Dispatch(loggedUser(res.data));
      Navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            <div className="hidden xl:flex flex-col min-h-screen">
              <NavLink to="/" className="-intro-x flex items-center pt-5">
                <img
                  alt="Express Sales"
                  className="w-32"
                  src="../assets/images/express/logo-white-text-right.png"
                />
              </NavLink>
              <div className="my-auto">
                <img
                  alt="Midone - HTML Admin Template"
                  className="-intro-x w-1/2 -mt-16"
                  src="../assets/images/illustration.svg"
                />
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                  A few more clicks to
                  <br />
                  sign in to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Manage all your e-commerce accounts in one place
                </div>
              </div>
            </div>
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 px-5 sm:px-8 py-8  rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center">
                  Sign In
                </h2>
                <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>

                <Formik
                  initialValues={loginInitialValues}
                  validationSchema={loginSchema}
                  onSubmit={loginHandler}
                >
                  {({ isSubmitting, submitForm }) => (
                    <Form>
                      <div className="intro-x mt-8">
                        <Field
                          type="text"
                          name="email"
                          className="intro-x login__input form-control py-3 px-4 block"
                          placeholder="Email"
                        />
                        <p className="text-danger mt-1">
                          <ErrorMessage name="email" />
                        </p>

                        <Field
                          type="password"
                          name="password"
                          className="intro-x login__input form-control py-3 px-4 block mt-4"
                          placeholder="Password"
                        />
                        <p className="text-danger mt-1">
                          <ErrorMessage name="password" />
                        </p>
                      </div>
                      {/* <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                      <div className="flex items-center mr-auto">
                        <input
                          id="remember-me"
                          type="checkbox"
                          className="form-check-input border mr-2"
                        />
                        <label
                          className="cursor-pointer select-none"
                          htmlFor="remember-me"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="">Forgot Password?</a>
                    </div> */}
                      <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary py-3 px-4 w-full align-top"
                          onClick={submitForm}
                        >
                          Login
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>

                <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                  {" "}
                  By signin up, you agree to our{" "}
                  <a className="text-primary dark:text-slate-200" href="">
                    Terms and Conditions
                  </a>{" "}
                  &{" "}
                  <a className="text-primary dark:text-slate-200" href="">
                    Privacy Policy
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import RadioFormik from "../radio/RadioFormik";
import CheckboxFormik from "../checkbox/CheckboxFormik";
import DropdownFormik from "../dropdown/DropdownFormik";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
];

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        term: false,
      }}
      validationSchema={yup.object({
        username: yup.string().required("Please enter your username"),
        email: yup
          .string()
          .email("Please enter your email address")
          .required("Please enter your email address"),
        password: yup
          .string()
          .min(8, "Your password must be at least 8 characters or greater")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
              message:
                "Your password must have at least 1 uppercase, 1 lower case, 1 special character",
            }
          )
          .required("Please enter your password"),
        gender: yup
          .string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "You can only select male or female"),
        job: yup
          .string()
          .required("Please select your job")
          .oneOf(["teacher", "developer", "doctor"]),
        term: yup
          .boolean()
          .required("Please accept the terms and conditions")
          .oneOf([true], "The terms and conditions must be accepted."),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          //JSON.stringify(values, null, 2)
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 3000);
      }}
    >
      {(formik) => {
        {
          /* console.log("formik", formik); */
        }
        const watchGender = formik.values.gender;
        const watchTerm = formik.values.term;
        {
          /* console.log(watchTerm); */
          /* console.log(watchGender); */
        }
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
            autoComplete="off"
          >
            <InputFormik
              label="Username"
              id="username"
              name="username"
              placeholder="Enter your username"
              type="text"
            ></InputFormik>
            <InputFormik
              label="Email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              type="email"
            ></InputFormik>
            <InputFormik
              label="Password"
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
            ></InputFormik>
            <div className="flex flex-col gap-3 mb-4">
              <label htmlFor="gender" className="cursor-pointer">
                Gender
              </label>
              <div className="flex gap-5 items-center">
                <RadioFormik
                  label="Male"
                  name="gender"
                  value="male"
                  checked={watchGender === "male"}
                ></RadioFormik>
                <RadioFormik
                  label="Female"
                  name="gender"
                  value="female"
                  checked={watchGender === "female"}
                ></RadioFormik>
              </div>
            </div>
            <DropdownFormik
              labelText="Are you"
              name="job"
              data={dropdownData}
              dropdownLabel="Select your job"
              setValue={formik.setFieldValue}
            ></DropdownFormik>
            <CheckboxFormik
              name="term"
              text="I accept the terms and conditions"
              id="term"
            ></CheckboxFormik>
            <button
              type="submit"
              className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${
                formik.isSubmitting ? "opacity-50 " : ""
              }`}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 mx-auto rounded-full border-2 border-white border-t-2 border-t-transparent animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;

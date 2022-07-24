import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
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
    term: yup.boolean().required("Please accept the terms and conditions"),
  })
  .required();

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

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    control,
    setValue,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValue: { gender: "male" },
  });
  console.log(errors);
  // console.log(isSubmitting);
  const onSubmitHandler = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          username: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          term: false,
        });
      }, 3000);
    });
  };

  const watchGender = watch("gender");
  // console.log(watchGender);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
      autoComplete="off"
    >
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          type="text"
          control={control}
        ></InputHook>
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          id="password"
          type="password"
          control={control}
        ></InputHook>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter your email address"
          id="email"
          type="email"
          control={control}
        ></InputHook>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="gender" className="cursor-pointer">
          Gender
        </label>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-x-3 ml-[5px]">
            <RadioHook
              control={control}
              name="gender"
              value="male"
              // defaultChecked={true}

              checked={watchGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
              checked={watchGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="job" className="cursor-pointer">
          Are you
        </label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
          dropdownLabel="Select your job"
        ></DropdownHook>
        {errors.job && (
          <p className="text-sm text-red-500">{errors.job.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <CheckboxHook
          name="term"
          control={control}
          text="I accept the terms and conditions"
          id="term"
        ></CheckboxHook>
        {errors.term && (
          <p className="text-sm text-red-500">{errors.term.message}</p>
        )}
      </div>

      <button
        type="submit"
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${
          isSubmitting ? "opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto rounded-full border-2 border-white border-t-2 border-t-transparent animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;

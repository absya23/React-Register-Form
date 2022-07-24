import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
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
        <p className="text-sm text-red-500">Please enter your username</p>
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
        <p className="text-sm text-red-500"></p>
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
        <p className="text-sm text-red-500"></p>
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="gender" className="cursor-pointer">
          Gender
        </label>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-x-3 ml-[5px]">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="job" className="cursor-pointer">
          Are you
        </label>
        <DropdownHook></DropdownHook>
      </div>
      <div className="">
        <CheckboxHook
          name="term"
          control={control}
          text="I accept the terms and conditions"
          id="term"
        ></CheckboxHook>
      </div>

      <button
        type="submit"
        className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;

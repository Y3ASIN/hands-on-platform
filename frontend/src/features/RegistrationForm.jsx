import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const registrationMutation = useMutation({
    mutationFn: "",
    onSuccess: (data) => {
      console.log("Registration Successful!", data);
      navigate("/dashboard/profile");
    },
    onError: (err) => {
      console.log("Registration Failed!", err);
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    const formattedData = {
      ...data,
      skills: data.skills
        ? data.skills.split(",").map((skill) => skill.trim())
        : [],
      causes: data.causes
        ? data.causes.split(",").map((cause) => cause.trim())
        : [],
    };

    registrationMutation.mutate(formattedData);
  };

  return (
    <div className="font-poppins mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-md rounded-lg bg-white px-6 py-8 shadow-md"
      >
        <div className="mb-4">
          <label className="input-label">Full Name</label>
          <input
            className="input-field"
            {...register("name", { required: true })}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="input-label">Email</label>
          <input
            type="email"
            className="input-field"
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="input-label">Password</label>
          <input
            type="password"
            className="input-field"
            {...register("password", { required: true })}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="input-label">Skills</label>
          <Controller
            name="skills"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                className="input-field"
                {...field}
                placeholder="Enter skills separated by commas"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="input-label">Causes</label>
          <Controller
            name="causes"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                className="input-field"
                {...field}
                placeholder="Enter causes separated by commas"
              />
            )}
          />
        </div>

        <button type="submit" className="input-button">
          Register
        </button>
      </form>

      <div className="mt-4">
        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-[#EC0B43]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

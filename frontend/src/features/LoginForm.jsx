import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/authContext";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/dashboard/profile");
    },
    onError: (err) => {
      console.log("Login Failed!", err);
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="font-poppins bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded bg-white px-6 py-10 shadow-md"
      >
        <div className="mb-4">
          <label className="input-label">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input-field"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="input-label">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="input-field"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="input-button">
          Login
        </button>
      </form>

      <div className="mt-4">
        <p className="text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-accent-secondary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

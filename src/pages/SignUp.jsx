import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import  z from "zod";

const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email format"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),

    repeatPassword: z
      .string()
      .min(6, "Repeat password is required"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const passwordValue = watch("password");

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    navigate("/home"); 
  };

  return (
    <div className="max-w-sm mx-auto mt-5 p-7 rounded-2xl bg-slate-900">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-amber-50">Name</label>
          <input
            type="text"
            {...register("name")}
            className={`w-full px-3 py-2 border rounded text-amber-50 ${
              errors.name ? "border-red-500 bg-red-100" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-amber-50">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`w-full px-3 py-2 border rounded text-amber-50 ${
              errors.email ? "border-red-500 bg-red-100" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-amber-50">Password</label>
          <input
            type="password"
            {...register("password")}
            className={`w-full px-3 py-2 border rounded text-amber-50 ${
              errors.password ? "border-red-500 bg-red-100" : "border-gray-300"
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-amber-50">
            Repeat Password
          </label>
          <input
            type="password"
            {...register("repeatPassword")}
            className={`w-full px-3 py-2 border rounded text-amber-50 ${
              errors.repeatPassword
                ? "border-red-500 bg-red-100"
                : "border-gray-300"
            }`}
            placeholder="Repeat your password"
          />
          {errors.repeatPassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.repeatPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600">
        <p>Password Watch: {passwordValue}</p>
      </div>
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email format"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter")
        .regex(/[0-9]/, "Must contain at least one number"),
});

export default function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });

    const emailValue = watch("email");
    const passwordValue = watch("password");

    const onSubmit = (data) => {
        console.log(data);
        navigate("/home");
    };


    return (
        <div className="max-w-sm mx-auto mt-20 p-7 rounded-2xl bg-slate-900">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-amber-50">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email")}
                        className={`w-full px-3 py-2 border rounded ${errors.email
                            ? "border-red-500 bg-red-100"
                            : emailValue
                                ? "border-green-500 bg-green-100"
                                : "border-gray-300"
                            }`}
                    />

                    {errors.email && (
                        <p className="text-red-600 text-sm mt-2">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-amber-50">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password")}
                        className={`w-full px-3 py-2 border rounded ${errors.password
                            ? "border-red-500 bg-red-100"
                            : passwordValue
                                ? "border-green-500 bg-green-100"
                                : "border-gray-300"
                            }`}
                    />

                    {errors.password && (
                        <p className="text-red-600 text-sm mt-2">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
                <div className="mt-4 text-sm text-gray-400">
                    If you don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-blue-500 hover:underline font-medium"
                    >
                        Sign Up
                    </Link>
                </div>

            </form>

            <div className="mt-4 text-sm text-gray-400">
                <p>Email: {emailValue}</p>
                <p>Password: {passwordValue}</p>
            </div>
        </div>
    );
}

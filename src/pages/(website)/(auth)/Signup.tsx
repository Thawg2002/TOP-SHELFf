import { logo } from "@/assets/img";
import { SignupUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Define TypeScript interface for form data
interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<SignupFormData>({
        mode: "onBlur", // Trigger validation on blur
    });

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async (user: SignupFormData) => {
            return await SignupUser(user);
        },
        onSuccess: (response: any) => {
            messageApi.open({
                type: "success",
                content: "Đăng ký thành công",
            });
            navigate("/signin");
        },
        onError: () => {
            messageApi.open({
                type: "error",
                content: "Đăng ký thất bại",
            });
        },
    });

    const onSubmit = async (data: SignupFormData) => {
        mutate(data);
    };

    return (
        <>
            {contextHolder}
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Name must be at least 3 characters",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message:
                                                "Name must not exceed 30 characters",
                                        },
                                    })}
                                    name="name"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.name && (
                                    <p className="text-red-500">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password must be at least 6 characters",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message:
                                                "Password must not exceed 30 characters",
                                        },
                                    })}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("confirmPassword", {
                                        required:
                                            "Confirm Password is required",
                                        validate: (value) =>
                                            value === getValues("password") ||
                                            "Passwords do not match",
                                    })}
                                    name="confirmPassword"
                                    type="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isPending ? (
                                    <LoaderCircle />
                                ) : (
                                    <span> Sign up</span>
                                )}
                            </button>
                        </div>
                        <div className="text-center">
                            <h5>or login </h5>
                            <div className="mt-2">
                                <a href="/api/v1/auth/google">
                                    <i className="fa-brands fa-google text-blue-500 text-[30px] mx-4"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-facebook  text-blue-500 text-[30px] mx-4"></i>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;

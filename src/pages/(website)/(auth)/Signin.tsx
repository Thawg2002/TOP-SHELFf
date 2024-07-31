import { logo } from "@/assets/img";
import { SigninUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
const Signin = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { mutate, isPending } = useMutation({
        mutationFn: async (user: any) => {
            return await SigninUser(user);
        },
        onSuccess: (response: any) => {
            // console.log("response", response);
            if (response) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response?.data.user),
                );
                localStorage.setItem("accessToken", response?.data.accessToken);
                document.cookie = `refreshToken=${
                    response?.data.refreshToken
                }; path=/; secure; samesite=strict; expires=${new Date(
                    Date.now() + 7 * 24 * 60 * 60 * 1000,
                ).toUTCString()}`;
            }

            messageApi.open({
                type: "success",
                content: "Đăng nhập thành công",
            });
            navigate("/");
        },
        onError: () => {
            messageApi.open({
                type: "error",
                content: "Đăng nhập thất bại",
            });
        },
    });
    const onSubmit = async (data: any) => {
        mutate(data);
    };
    // const handleLoginWithGoogle = async (credentialResponse: any) => {
    //     // console.log("onSubmit", credentialResponse);
    //     const newUser = jwtDecode(credentialResponse?.credential as any);
    //     // console.log("newUser", newUser);
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:8080/api/v1//google/verify",
    //             newUser,
    //         );
    //         console.log("response", response);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };
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
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("email")}
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
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
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("password")}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
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
                                    <span> Sign in</span>
                                )}
                            </button>
                        </div>
                        <div className="text-center">
                            <h5>or login </h5>
                            <div className="mt-2">
                                {/* <a href="" onClick={handleLoginWithGoogle}> */}
                                {/* <i className="fa-brands fa-google text-blue-500 text-[30px] mx-4"></i> */}
                                {/* </a> */}
                                <GoogleLogin
                                    onSuccess={(credentialResponse) => {
                                        console.log(credentialResponse);
                                        const newUser = jwtDecode(
                                            credentialResponse?.credential as any,
                                        );
                                        console.log("newUser", newUser);
                                    }}
                                    // onSuccess={handleLoginWithGoogle}
                                    onError={() => {
                                        console.log("Login Failed");
                                    }}
                                />

                                <a href="local">
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

export default Signin;

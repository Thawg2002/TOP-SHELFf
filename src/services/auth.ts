import instance from "@/configs/axios";

export const SigninUser = async (user: any) => {
    try {
        const response = await instance.post(`/auth/signin`, user);
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const SignupUser = async (user: any) => {
    try {
        const response = await instance.post(`/auth/signup`, user);
        return response;
    } catch (error) {
        console.log(error);
    }
};
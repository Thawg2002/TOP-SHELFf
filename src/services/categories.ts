import { ICategory } from "@/common/types/categories";
import instance from "@/configs/axios";
export const getAllCategories = async (params?: any): Promise<any> => {
    try {
        const response = await instance.get("/categories", { params });
        return response.data;
    } catch (error) {
        return [];
    }
};
export const getCategoriesById = async (id: any) => {
    try {
        const response = await instance.get(`/categories/${id}`, {
            // headers: {
            //     'Content-Type': 'application/json',
            //     "Authorization": "Bearer " + token ? token : ''
            // },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteCategories = async (id: any) => {
    try {
        const response = await instance.delete(`/categories/${id}`, {
            // headers: {
            //     'Content-Type': 'application/json',
            //     "Authorization": "Bearer " + token ? token : ''
            // },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const addCategories = async (category: ICategory) => {
    try {
        const response = await instance.post(`/categories`, category, {
            // headers: {
            //     "Content-Type": "application/json",
            //     Authorization: "Bearer " + token ? token : "",
            // },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const editCategories = async (category: ICategory) => {
    try {
        const response = await instance.put(
            `/categories/${category._id}`,
            category,
            {
                // headers: {
                //     "Content-Type": "application/json",
                //     Authorization: "Bearer " + token ? token : "",
                // },
            },
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

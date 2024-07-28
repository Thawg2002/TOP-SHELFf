import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const CLOUDINARY_UPLOAD_PRESET = "Xuong_React_Node_SU24";
const CLOUDINARY_FOLDER = "Xuong_React_Nodejs_SU24";
const CLOUDINARY_NAME = "dtbgv9jja";
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
const uploadFileCloudinary = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Thay bằng upload preset của bạn
        formData.append("folder", CLOUDINARY_FOLDER);
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`, // Thay bằng cloudinary name của bạn
            formData,
        );
        // return response.data.url;
        if (response.status === 200) {
            return response.data;
        } else {
            console.error("Upload failed", response.statusText);
        }
    } catch (error) {
        // handle error here
        console.error(error);
    }
};

export { uploadFileCloudinary };

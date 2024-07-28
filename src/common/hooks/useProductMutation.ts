import { addProduct, editProduct, removeProduct } from "@/services/product";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../types/product";
import { ProductJoiSchema } from "../validations/product";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

type useProductMutationProps = {
    action: "CREATE" | "DELETE" | "UPDATE"
    onSuccess?: () => void
}

const useProductMutation = ({ action, onSuccess }: useProductMutationProps) => {
    const queryClient = useQueryClient();
    const form = useForm({
        resolver: joiResolver(ProductJoiSchema),
        defaultValues: {
            name: "",
            price: 0,
            category: "",
            description: "",
            discount: 0,
            featured: false,
            countInStock: 0,
        },
    });


    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case "CREATE":
                    return await addProduct(product);
                case "DELETE":
                    return window.confirm('Bạn có chắc chắn không?') && await removeProduct(product)
                case "UPDATE":
                    return await editProduct(product);
                default:
                    return null;
            }
        },
        onSuccess: (data,) => {
            if (data) {
                onSuccess && onSuccess();
                queryClient.invalidateQueries({
                    queryKey: ["PRODUCT_KEY"],
                });
            } else {
                // Xử lý trường hợp không có dữ liệu trả về từ API
                toast({
                    title: "Có lỗi xảy ra",
                    description: "Vui lòng thử lại sau",
                });
                return
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });
    const onSubmit: SubmitHandler<IProduct> = async (product) => {
        mutate(product);
    };

    return { mutate, form, onSubmit, ...rest }
}

export default useProductMutation
import { toast } from "@/components/ui/use-toast";
import {
    addCategories,
    editCategories,
    getCategoriesById,
} from "@/services/categories";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

type FieldType = {
    _id?: string;
    name?: string;
};

const CategoryEdit = () => {
    const [form] = Form.useForm();
    const { id } = useParams();
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["category", id],
        queryFn: async () => {
            try {
                return await getCategoriesById(id);
            } catch (error) {
                throw new Error("Error");
            }
        },
    });
    const {
        mutate,
        isPending,
        isError: isErrorDelete,
        error: errorDelete,
    } = useMutation({
        mutationFn: async (category: any) => {
            try {
                return await editCategories(category);
            } catch (error) {
                throw new Error("Error");
            }
        },
        onSuccess: () => {
            toast({
                title: "Cập nhật danh mục thành công",
                typeof: "success",
            });
            queryClient.invalidateQueries({
                queryKey: ["category", id],
            });
        },
        onError: () => {
            toast({
                title: "Cập nhật danh mục thất bại",
                typeof: "error",
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        // console.log("Success:", values);
        const newData = {
            ...values,
            _id: id,
        };

        mutate(newData);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo,
    ) => {
        console.log("Failed:", errorInfo);
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    if (isErrorDelete) return <div>{errorDelete.message}</div>;
    return (
        <>
            <div className="flex justify-between">
                <h2 className="font-medium text-[18px] my-3">
                    Danh sách Danh mục
                </h2>
                <Link to={"/admin/category"} className="mr-10">
                    <Button>Quay lại</Button>
                </Link>
            </div>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                initialValues={{ ...data?.category }}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tên danh mục"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng điền tên danh mục!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        {isPending ? (
                            <AiOutlineLoading3Quarters />
                        ) : (
                            <span>Submit</span>
                        )}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CategoryEdit;

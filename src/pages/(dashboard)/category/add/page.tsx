import { toast } from "@/components/ui/use-toast";
import { addCategories } from "@/services/categories";
import { useMutation } from "@tanstack/react-query";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

type FieldType = {
    name?: string;
};

const CategoryAdd = () => {
    const [form] = Form.useForm();
    const {
        mutate,
        isPending,
        isError: isErrorDelete,
        error: errorDelete,
    } = useMutation({
        mutationFn: async (category: any) => {
            try {
                return await addCategories(category);
            } catch (error) {
                throw new Error("Error");
            }
        },
        onSuccess: () => {
            toast({
                title: "Thêm danh mục thành công",
                typeof: "success",
            });
            form.resetFields();
        },
        onError: () => {
            toast({
                title: "Thêm danh mục thất bại",
                typeof: "error",
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        // console.log("Success:", values);
        mutate(values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo,
    ) => {
        console.log("Failed:", errorInfo);
    };
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
                initialValues={{ remember: true }}
                onFinish={onFinish}
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

export default CategoryAdd;

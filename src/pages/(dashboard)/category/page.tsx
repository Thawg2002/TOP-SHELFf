import { toast } from "@/components/ui/use-toast";
import { deleteCategories, getAllCategories } from "@/services/categories";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { TableProps } from "antd";
import { Button, Popconfirm, Table } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
interface DataType {
    _id: string;
    key: string;
    name: string;
    slug: string;
}

const CategoryList = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            try {
                return await getAllCategories();
            } catch (error) {
                throw new Error("Error");
            }
        },
    });
    const dataNewKey = data?.categories.map((item: any) => {
        return {
            key: item._id,
            ...item,
        };
    });
    const {
        mutate,
        isPending,
        isError: isErrorDelete,
        error: errorDelete,
    } = useMutation({
        mutationFn: async (category: any) => {
            try {
                return await deleteCategories(category._id);
            } catch (error) {
                throw new Error("Error");
            }
        },
        onSuccess: () => {
            toast({
                title: "Xóa danh mục thành công",
                typeof: "success",
            });
            queryClient.invalidateQueries({
                queryKey: ["category"],
            });
        },
        onError: () => {
            toast({
                title: "Xóa danh mục thất bại",
                typeof: "error",
            });
        },
    });

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "slug",
            dataIndex: "slug",
            key: "slug",
        },
        {
            title: "Action",
            key: "action",
            render: (_, category) => (
                <>
                    <Link to={`/admin/category/${category._id}/edit`}>
                        <Button className="mx-2">Sửa</Button>
                    </Link>

                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => mutate(category)}
                        okText="Yes"
                        cancelText="No"
                    >
                        {isPending ? (
                            <AiOutlineLoading3Quarters />
                        ) : (
                            <Button danger>Xóa</Button>
                        )}
                    </Popconfirm>
                </>
            ),
        },
    ];
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    if (isErrorDelete) return <div>{errorDelete.message}</div>;
    return (
        <>
            <h2 className="font-medium text-[18px] my-3">Danh sách Danh mục</h2>
            <div className="mb-3">
                <Link to="/admin/category/add">
                    <Button>Thêm danh mục</Button>
                </Link>
            </div>
            <Table columns={columns} dataSource={dataNewKey} />
        </>
    );
};

export default CategoryList;

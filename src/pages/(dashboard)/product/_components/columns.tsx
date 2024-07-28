import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { removeProduct } from "@/services/product";
import { useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
// XÓA SẢN PHẨM
// const queryClient = useQueryClient();
// const onhandleDelete = async (row: any) => {
//     // console.log("row", row.original._id);
//     if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
//         try {
//             await removeProduct(row.original._id);
//             toast({
//                 title: "Xóa sản phẩm thành công",
//                 typeof: "success",
//             });
//             queryClient.invalidateQueries({
//                 queryKey: ["products"],
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }
// };
const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    const handleDelete = async (row: any) => {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            try {
                await removeProduct(row.original._id);
                toast({
                    title: "Xóa sản phẩm thành công",
                    typeof: "success",
                });
                queryClient.invalidateQueries({
                    queryKey: ["products"],
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    return handleDelete;
};
export const columns: ColumnDef<IProduct>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "featured_image",
        header: "ảnh sản phẩm",
        cell: ({ row }) => {
            const { image } = row.original;
            return <img src={image} alt="image" width={50} />;
        },
    },
    {
        accessorKey: "name",
        header: "Tên sản phẩm",
    },
    {
        accessorKey: "category",
        header: "Danh mục",
        cell: ({ row }: { row: any }) => {
            // Log dữ liệu của hàng để kiểm tra
            // console.log("row.original", row.original);

            // Giả sử row.original.category là một mảng các ID danh mục
            const NameCategory = row.original.category
                .map((item: any) => {
                    return item.name;
                })
                .join(", ");
            // console.log("NameCategory", NameCategory);
            // const x = NameCategory.join(", ");
            // console.log("x", x);
            // // Hiển thị các tên danh mục trong ô
            return <span>{NameCategory}</span>;
        },
    },
    {
        accessorKey: "regular_price",
        header: "Gía",
    },

    {
        accessorKey: "countInStock",
        header: "Số lượng",
    },
    // {
    //     accessorKey: "description",
    //     header: "Mô tả",
    // },
    {
        accessorKey: "discount",
        header: "Giảm giá",
        cell: ({ row }) => <span>{row.original.discount}%</span>,
    },
    {
        accessorKey: "featured",
        header: "Sản phẩm nổi bật",
        cell: ({ row }) => {
            const { featured } = row.original;
            return (
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                        featured
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                    }`}
                >
                    {featured ? "Yes" : "No"}
                </span>
            );
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const onhandleDelete = useDeleteProduct();
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        {/* <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
                        <DropdownMenuSeparator /> */}
                        <DropdownMenuItem>
                            <Link
                                to={`/admin/products/${row.original._id}/edit`}
                            >
                                Cập nhật
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button onClick={() => onhandleDelete(row)}>
                                Xóa
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

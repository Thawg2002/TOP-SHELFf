import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { columns } from "./columns";
import DataTable from "./DataTable";
import FooterTable from "./FooterTable";
import HeaderTable from "./HeaderTable";

const ProductList = () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {},
    );
    //GetAllSản phẩm
    const [rowSelection, setRowSelection] = useState({});
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: () => getAllProducts({ _expand: "category" }),
    });
    // console.log("data", data);
    const table = useReactTable({
        data: data?.data || [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;
    return (
        <div>
            <div>
                <Link to={"/admin/products/add"}>
                    <Button className="mb-4">Add Product</Button>
                </Link>
            </div>
            <div className="w-full">
                <div className="flex items-center py-4">
                    <HeaderTable table={table} />
                </div>
                <div className="rounded-md border">
                    <DataTable table={table} column={columns} />
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <FooterTable table={table} />
                </div>
            </div>
        </div>
    );
};

export default ProductList;

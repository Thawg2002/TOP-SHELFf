import { ICategory } from "@/common/types/categories";
import { getAllCategories } from "@/services/categories";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type Props = {};

const ListCategory = (props: Props) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;
    return (
        <div className="w-full mb:hidden lg:block">
            <div className="w-full flex justify-center items-center *:flex *:justify-center">
                <div className="gap-x-[49.5px] h-[56px] items-center">
                    <Link to={"/products"}>Shop All</Link>

                    {data?.categories?.map((item: ICategory, index: any) => (
                        <Link to={""} key={index}>
                            {item.name}
                        </Link>
                    ))}
                    <Link to={"/about"}>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default ListCategory;

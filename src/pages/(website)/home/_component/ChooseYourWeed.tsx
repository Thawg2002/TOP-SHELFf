import React, { useState } from "react";
import ProductListWeb from "../../_components/ProductList";
import { getAllProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "@/services/categories";
import { Link } from "react-router-dom";

type Props = {};

const ChooseYourWeed = (props: Props) => {
    const [category, setCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });
    const {
        data: Categories,
        isLoading: isLoadingCategory,
        isError: isErrorCategory,
        error: errorCategory,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
    });
    if (isLoadingCategory) return <div>Loading...</div>;
    if (isErrorCategory) return <div>{errorCategory.message}</div>;
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return (
        <>
            {/* CHOOSE YOUR WEED */}
            <div className="lg:w-[1200px] mx-auto sm:w-[95vw] mb:w-[342px] flex flex-col lg:py-24 mb:py-7">
                <strong className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[40px] lg:tracking-[-4.5px] mb:tracking-[-1.7px]">
                    CHOOSE YOUR WEED
                </strong>
                {/* menu */}
                <div className="flex mb:flex-col md:flex-row md:items-center mb:gap-y-8 md:gap-y-0 lg:gap-x-[40px] lg:mt-16 lg:mb-0.5 mb:my-6">
                    <span className="lg:text-2xl mb:text-base lg:tracking-[-0.5px]">
                        Filter by Interest
                    </span>

                    <ul className="*:md:h-[48px] overflow-x-scroll lg:mt-0 mb:-mt-[7px] hidden_scroll_x *:border flex whitespace-nowrap *:grid *:place-items-center *:px-5 *:py-2 *:rounded-[100px] lg:gap-x-[24px] mb:gap-x-4 *:lg:text-base *:mb:text-sm *:cursor-pointer *:duration-200">
                        <Link to="products">
                            <li>View All</li>
                        </Link>
                        {Categories?.categories?.map(
                            (item: any, index: number) => {
                                const isActive = item?._id === category;
                                return (
                                    <li
                                        key={index}
                                        onClick={() => setCategory(item?._id)}
                                        // className="bg-[#F2F6F4] text-[#05422C] border-black hover:bg-[#05422C] hover:text-[#F2F6F4] hover:border-white"
                                        className={`${
                                            isActive
                                                ? "bg-[#05422C] text-[#F2F6F4] border-white"
                                                : "bg-[#F2F6F4] text-[#05422C] border-black"
                                        } hover:bg-[#05422C] hover:text-[#F2F6F4] hover:border-white`}
                                    >
                                        {item.name}
                                    </li>
                                );
                            },
                        )}
                    </ul>
                </div>
                <ProductListWeb products={products} category={category} />
            </div>
            {/* END CHOOSE YOUR WEED */}
        </>
    );
};

export default ChooseYourWeed;

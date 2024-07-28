import React, { useEffect, useState } from "react";
import ProductListWeb from "../../_components/ProductList";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductById } from "@/services/product";
import ProductDetailLeft from "./_components/product_left/page";
import ProductDetailRight from "./_components/product_right/page";

const DetailProduct = () => {
    const { id } = useParams<{ id: any }>();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["getProductById", id],
        queryFn: () => getProductById(id),
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {
        data: products,
        isLoading: isLoadingGetAll,
        isError: isErrgetAll,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });
    if (isLoadingGetAll) return <div>Loading...</div>;
    if (isErrgetAll) return <div>Error loading data</div>;
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    const product = data?.product;
    return (
        <>
            <div>
                {/* header */}

                {/* main */}
                <main className="w-full *:lg:w-[1312px] *:w-[342px] *:mx-auto *:h-full lg:py-10 mb:py-6 lg:mt-0 mb:mt-0.5">
                    <div className="lg:grid lg:grid-cols-[573px_640px] justify-between border-b">
                        {/*  desktop : left  , mobile : row 1 */}
                        <ProductDetailLeft product={product} />
                        {/*desktop: right, mobile : row 2 */}
                        <ProductDetailRight product={product} />
                    </div>
                    {/* featured products */}
                    <div className="lg:mt-6 mb:-mt-1 lg:pt-[58px] mb:pt-[34px]">
                        <span className="lg:text-2xl text-xl lg:tracking-[-0.5px]">
                            Featured Product
                        </span>
                        <ProductListWeb products={products} />
                    </div>
                </main>
                {/* show img when click */}
                <div className="show_img_product hidden top-12 absolute left-1/2 -translate-x-1/2 z-[1]">
                    <section className="lg:w-[800px] mb:min-w-[342px] flex flex-col gap-y-6 lg:items-center">
                        <div className="relative w-full lg:h-[520px] mb:min-h-[414px]  grid place-items-center bg-[#F2F6F4] rounded-3xl">
                            <img
                                className="lg:w-[320px] lg:h-[320px] mb:w-[240px] mb:h-[240px]"
                                src="../Images/img_product.png"
                                alt=""
                            />
                            <div className="absolute bottom-0 cursor-pointer hover:scale-110 duration-300 right-0 -translate-x-1/2 -translate-y-1/2 lg:w-10 lg:h-10 mb:w-8 mb:h-8 lg:p-2.5 mb:p-2 rounded-[50%] bg-white grid place-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-external-link"
                                >
                                    <path d="M15 3h6v6" />
                                    <path d="M10 14 21 3" />
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                </svg>
                            </div>
                        </div>
                        <div className="*:lg:w-16 *:lg:h-16 *:mb:w-14 *:mb:h-14 flex items-center gap-x-4 *:rounded-lg *:p-2 *:bg-[#F2F6F4] *:border-2 *:cursor-pointer *:duration-300">
                            <img
                                className="border-[#17AF26]"
                                src="../Images/img_product.png"
                                alt=""
                            />
                            <img
                                className="hover:border-[#17AF26] border-[#F2F6F4]"
                                src="../Images/img_product.png"
                                alt=""
                            />
                            <img
                                className="hover:border-[#17AF26] border-[#F2F6F4]"
                                src="../Images/img_product.png"
                                alt=""
                            />
                            <img
                                className="hover:border-[#17AF26] border-[#F2F6F4]"
                                src="../Images/img_product.png"
                                alt=""
                            />
                        </div>
                    </section>
                </div>
                {/* lớp phủ */}
                <div className="bg_show_img_product hidden fixed top-0 w-screen h-screen bg-[#01100B40]"></div>
                {/* show cart */}
                <div className="show_cart translate-x-[110%] duration-300 fixed lg:w-[41vw] mb:w-screen lg:rounded-none mb:rounded-3xl z-[1] lg:h-screen mb:h-[90vh] lg:top-0 mb:top-[10vh] right-0 bg-white py-8 mb:px-6 lg:px-8">
                    {/* close */}
                    <button className="close_cart absolute -translate-x-[200%] top-1/2 -translate-y-1/2">
                        <div className="relative w-10 h-10 rounded-[50%] bg-white duration-300 hover:scale-110">
                            <img
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                src="../Images/arrow-right.png"
                                alt=""
                            />
                        </div>
                    </button>
                    <div className="border-b pb-6 flex justify-between item-center">
                        <strong className="text-xl font-medium text-[#060709]">
                            Your Cart
                        </strong>
                        <span className="text-[#9D9EA2] font-light">(0)</span>
                    </div>
                    {/* items */}
                    <div className="w-full">
                        {/* no items : */}
                        <div className=" show_items_cart w-full min-h-[519px] flex flex-col justify-center place-items-center gap-y-16">
                            <div className="lg:w-[160px] lg:h-[160px] mb:w-[120px] mb:h-[120px] rounded-[50%] bg-[#F2F6F4] grid place-items-center">
                                <img src="../Images/bag-2.png" alt="" />
                            </div>
                            <button className="lg:h-14 mb:h-10 grid place-items-center lg:px-10 mb:px-6 bg-[#17AF26] rounded-[100px] text-white">
                                Show Product
                            </button>
                        </div>
                        {/* list items and check out */}
                        <div className="hidden items_cart">
                            <div className="w-full flex flex-col gap-y-5 *:flex *:flex-col">
                                {/* list item */}
                                <div className="hidden_scroll_y flex flex-col gap-y-5 overflow-y-scroll mt-5">
                                    {/* item */}
                                    <div className="flex gap-x-4 border-b pb-5">
                                        <img
                                            className="w-14 h-14 p-2 border rounded-xl"
                                            src="../Images/img_product.png"
                                            alt=""
                                        />
                                        <div className="w-full flex flex-col gap-y-5">
                                            <section className="w-full flex flex-col gap-y-1.5">
                                                <strong className="flex lg:items-center mb:items-start font-normal justify-between text-[#05422C]">
                                                    Mix And Match Shatter/Budder
                                                    28g (4 X 7G){" "}
                                                    <button className="w-6 h-6 rounded-[50%] border text-[#9D9EA2] font-light text-xs grid place-items-center">
                                                        x
                                                    </button>
                                                </strong>
                                                <div className="w-full flex justify-between items-center">
                                                    <span className="flex gap-x-2 text-[#717378] font-light">
                                                        2x
                                                        <p className="font-normal">
                                                            $120.00
                                                        </p>
                                                    </span>
                                                    <p>$245.00</p>
                                                </div>
                                            </section>
                                            <section className="w-full flex flex-col gap-y-1.5">
                                                <strong className="flex lg:items-center mb:items-start font-normal justify-between text-[#060709]">
                                                    Add Integra Pack - 4g
                                                    <button className="w-6 h-6 rounded-[50%] border text-[#9D9EA2] font-light text-xs grid place-items-center">
                                                        x
                                                    </button>
                                                </strong>
                                                <div className="w-full flex justify-between items-center">
                                                    <span className="flex gap-x-2 text-[#717378] font-light">
                                                        1x
                                                        <p className="font-normal">
                                                            $2.00
                                                        </p>
                                                    </span>
                                                    <p>$2.00</p>
                                                </div>
                                            </section>
                                            <section className="w-full flex flex-col gap-y-1.5">
                                                <strong className="flex lg:items-center mb:items-start font-normal justify-between text-[#060709]">
                                                    Add Integra Pack - 8g{" "}
                                                    <button className="w-6 h-6 rounded-[50%] border text-[#9D9EA2] font-light text-xs grid place-items-center">
                                                        x
                                                    </button>
                                                </strong>
                                                <div className="w-full flex justify-between items-center">
                                                    <span className="flex gap-x-2 text-[#717378] font-light">
                                                        1x
                                                        <p className="font-normal">
                                                            $3.00
                                                        </p>
                                                    </span>
                                                    <p>$3.00</p>
                                                </div>
                                            </section>
                                            <span className="pt-5 flex justify-between text-[#9D9EA2] text-sm border-t">
                                                Subtotal{" "}
                                                <p className="text-[#060709]">
                                                    $245.00
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className="flex gap-x-4 border-b pb-5">
                                        <img
                                            className="w-14 h-14 p-2 border rounded-xl"
                                            src="../Images/img_product.png"
                                            alt=""
                                        />
                                        <div className="w-full flex flex-col gap-y-5">
                                            <section className="w-full flex flex-col gap-y-1.5">
                                                <strong className="flex lg:items-center mb:items-start font-normal justify-between text-[#05422C]">
                                                    Shipwreck Edibles Gummy{" "}
                                                    <button className="w-6 h-6 rounded-[50%] border text-[#9D9EA2] font-light text-xs grid place-items-center">
                                                        x
                                                    </button>
                                                </strong>
                                                <div className="w-full flex justify-between items-center">
                                                    <span className="flex gap-x-2 text-[#717378] font-light">
                                                        5x
                                                        <p className="font-normal">
                                                            $13.00
                                                        </p>
                                                    </span>
                                                    <p>$65.00</p>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    {/* subtotal */}
                                    <div className="border-b -mt-2">
                                        <span className="text-sm flex justify-between items-center pl-[75px]">
                                            TOTAL{" "}
                                            <p className="text-xl text-[#EB2606] font-medium">
                                                $305.00
                                            </p>
                                        </span>
                                        <button className="lg:h-14 mb:h-10 rounded-[100px] bg-[#17AF26] lg:px-10 mb:px-8 text-white my-5">
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                                {/* check out */}
                                <div className="gap-y-4">
                                    <span className="tracking-[1px] text-[#717378] text-xs">
                                        SECURE PAYMENTS PROVIDED BY
                                    </span>
                                    <div className="flex items-center gap-x-3">
                                        <img
                                            src="../Images/mastercard_v1.png"
                                            alt=""
                                        />
                                        <img
                                            src="../Images/mastercard_v2.png"
                                            alt=""
                                        />
                                        <img
                                            src="../Images/mastercard_v3.png"
                                            alt=""
                                        />
                                        <img
                                            src="../Images/mastercard_v4.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailProduct;

import { getAllProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import ProductListWeb from "../_components/ProductList";
import SideBarWeb from "./_components/SideBar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { getAllCategories } from "@/services/categories";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import ProductItem from "../_components/ProductItem";
type Props = {};

const ShopPage = (props: Props) => {
    const [categorifilter, setCategorifilter] = useState("");
    const [inputPrice, setInputPrice] = useState(0);
    const productListRef = useRef<HTMLDivElement>(null);
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
        data: category,
        isLoading: isLoadingCategory,
        isError: isErrorCategory,
        error: errorCategory,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const onhandleCategories = async (
        valueCategory: any,
        inputValue: any,
        verifyValue: any,
    ) => {
        try {
            if (verifyValue == true) {
                setCategorifilter(valueCategory);
                setInputPrice(inputValue);
            }
            //  else {
            //     setCategorifilter("");
            //     setInputPrice(0);
            // }
        } catch (error) {
            console.log(error);
        }
    };
    // Tạo cuộn xuống khi nhấn vào apply ở sidebar
    const handleScrollToProductList = () => {
        if (productListRef.current) {
            productListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    if (isLoadingCategory) return <div>LoadingCategory...</div>;
    if (isErrorCategory) return <div>{errorCategory.message}</div>;
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return (
        <>
            <div>
                {/* MAIN */}
                <div className="w-full lg:py-10 py-4 border pb-[199px]">
                    <div className="lg:container lg:mx-auto lg:w-[1315px] mb:w-full grid lg:grid-cols-[304px_978px] mb:grid-cols-[100%] *:w-full justify-between">
                        {/* filter */}
                        <SideBarWeb
                            category={category?.categories}
                            onchangeCategories={onhandleCategories}
                            onScrollToProductList={handleScrollToProductList}
                        />
                        {/* product */}
                        <div className="w-full flex flex-col mb:items-center lg:items-start">
                            {/* filter */}
                            <div className="mb:w-[342px] lg:w-full flex justify-between items-center border-b lg:pb-6 mb:pb-4">
                                <strong className="lg:text-2xl mb:text-base font-normal">
                                    Shop
                                </strong>
                                <div className="flex gap-x-[10px]">
                                    <div className="relative lg:hidden group w-[78px] flex place-items-center gap-x-2 h-[34px] border rounded-[100px] px-3 cursor-pointer border-gray-300 text-gray-700 text-xs tracking-[-0.5px]">
                                        Filter{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down group-hover:rotate-180 duration-300"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <ul className="absolute hidden group-hover:block top-full bg-white shadow-xl p-3 *:mb-3 *:mx-2 *:whitespace-nowrap left-0 columns-2 *:duration-300">
                                            <li className="hover:text-[#17AF26]">
                                                John Mayer
                                            </li>
                                            <li className="hover:text-[#17AF26]">
                                                John Mayer
                                            </li>
                                            <li className="hover:text-[#17AF26]">
                                                John Mayer
                                            </li>
                                            <li className="hover:text-[#17AF26]">
                                                John Mayer
                                            </li>
                                            <li className="hover:text-[#17AF26]">
                                                John Mayer
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative group flex lg:gap-x-3 gap-x-1.5 place-items-center py-2 border rounded-[100px] px-[14px] cursor-pointer border-gray-300 text-gray-700 lg:text-sm text-xs">
                                        Short By Lates{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down group-hover:rotate-180 duration-300 lg:w-[22px] lg:h-[22px] w-[14px] h-[14px]"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <ul className="absolute hidden group-hover:block top-full right-0 bg-white shadow-xl py-2 px-3 *:my-2 *:whitespace-nowrap w-[50vw]">
                                            <li>John Mayer</li>
                                            <li>John Mayer</li>
                                            <li>John Mayer</li>
                                            <li>John Mayer</li>
                                            <li>John Mayer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* endfilter */}
                            {/* text giới thiệu */}
                            {/* <div className="lg:w-[864px] mb:w-[342px] lg:mt-9 lg:pb-8 mb:pb-6 mb:mt-6">
                                <span className="lg:text-xl mb:text-base text-[#17AF26]">
                                    Cannabis
                                </span>
                                <p className="text-[#717378] mt-4 lg:text-base mb:text-[14px]">
                                    Here at WestCoastSupply’s “ cannabis
                                    section, we showcase the best Indica,
                                    Hybrid, and Sativa medical cannabis strain
                                    selections at the best prices online. You
                                    can be assured that all our strains go
                                    through a strict screening process to ensure
                                    that all your cannabis needs are
                                    top-quality. All of our flowers are sourced
                                    from reputable growers, based in British
                                    Columbia, Canada. We have hige grade
                                    selection comes from growers that produce
                                    AAAA+ quality cannabis flowers and have many
                                    years of experience in the cannabis
                                    industry. You are guaranteed to be receiving
                                    high-quality flowers at the best prices
                                    online with our unbeatable sales!
                                </p>
                            </div> */}
                            {/* end giới thiệu */}

                            {/* top best selling */}
                            <div className="bg-[#F2F6F4] w-full lg:rounded-2xl lg:pt-[25px] lg:pb-6 lg:px-8 pt-[22px] pb-4 mb-4">
                                <strong className="lg:text-2xl mb:text-lg lg:tracking-[-0.5px] mb:mx-11 lg:mx-0 font-medium ">
                                    Top Selling
                                </strong>
                                {/* <div className="lg:w-auto mb:w-full mx-auto overflow-x-auto snap-x scroll_dragging duration-300 scroll-smooth hidden_scroll_x grid grid-flow-col *:lg:w-[282.67px] *:mb:w-[240px] lg:pt-[27px] mb:pt-6 lg:gap-x-[32px] gap-x-6"> */}
                                <Swiper
                                    spaceBetween={50}
                                    breakpoints={{
                                        // Khi chiều rộng màn hình nhỏ hơn hoặc bằng 640px
                                        640: {
                                            slidesPerView: 2,
                                        },
                                        // Khi chiều rộng màn hình nhỏ hơn hoặc bằng 768px
                                        768: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    {products?.data?.map(
                                        (product: any, index: number) => (
                                            <SwiperSlide key={index}>
                                                <ProductItem
                                                    product={product}
                                                />
                                            </SwiperSlide>
                                        ),
                                    )}
                                </Swiper>
                                {/* </div> */}
                            </div>
                            {/* render products */}
                            <ProductListWeb
                                products={products}
                                category={categorifilter}
                                price={inputPrice}
                                ref={productListRef}
                            />

                            {/* contentratest */}
                            {/* <Contentratest/> */}
                            {/* products */}
                            {/* <ProductListWeb products={products} /> */}

                            {/* list page */}
                            <div className="lg:w-full flex lg:flex-row mb:flex-col justify-between items-center lg:pt-6 pt-[18px] mb:gap-y-5 lg:gap-y-0">
                                {/* show page */}
                                <span className="lg:w-auto  mb:w-full text-[#717378] lg:text-sm mb:text-xs">
                                    Showing 1-30 of 393 results
                                </span>
                                {/* list page */}
                                <div className="lg:w-auto mb:w-[342px] flex items-center justify-left *:w-9 *:h-9 *:rounded-[50%] *:grid *:place-items-center lg:gap-x-[9.5px] gap-x-1 text-xs lg:text-sm">
                                    <button className="border">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-left"
                                        >
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>
                                    {/* **** */}
                                    <button className="bg-[#F2F6F4]">1</button>
                                    <button className="hover:bg-[#f2f6f4]">
                                        2
                                    </button>
                                    <button className="hover:bg-[#f2f6f4]">
                                        3
                                    </button>
                                    <button className="hover:bg-[#f2f6f4]">
                                        4
                                    </button>
                                    <span className="hover:bg-[#f2f6f4]">
                                        ...
                                    </span>
                                    <button className="hover:bg-[#f2f6f4]">
                                        55
                                    </button>
                                    {/* **** */}
                                    <button className="border">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-right"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END MAIN */}
            </div>
        </>
    );
};

export default ShopPage;

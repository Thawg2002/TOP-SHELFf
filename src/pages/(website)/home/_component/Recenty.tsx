import { Product_5 } from "@/assets/img";
import React from "react";

type Props = {};

const Recenty = (props: Props) => {
    return (
        <>
            {/* RECENTY */}
            <div className="lg:w-[1200px] mx-auto sm:w-[95vw] mb:w-[342px] flex flex-col lg:mt-[20.5px] lg:pt-24 mb:pt-[39px]">
                <strong className="lg:text-[64px] mb:text-[32px] lg:leading-[70px] mb:leading-[40px] lg:tracking-[-4.5px] mb:tracking-[-1.8px]">
                    RECENTLY ADDED
                </strong>
                {/* menu */}
                <div className="relative flex mb:flex-col md:flex-row md:items-center mb:gap-y-6 md:gap-y-0 lg:gap-x-[40px] lg:mt-16 mb:my-6">
                    <span className="lg:text-2xl mb:text-base lg:tracking-[-0.5px]">
                        Filter by Interest
                    </span>
                    <ul className="*:md:h-[48px] overflow-x-scroll hidden_scroll_x *:border flex whitespace-nowrap *:grid *:place-items-center lg:text-base mb:text-sm *:px-5 *:py-2 *:rounded-[100px] lg:gap-x-[24px] mb:gap-x-4 *:cursor-pointer *:duration-200">
                        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] bg-[#F2F6F4] text-[#05422C] hover:border-black border-black">
                            Flowers
                        </li>
                        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">
                            Mushrooms
                        </li>
                        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">
                            Concentrate
                        </li>
                        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">
                            Edibles
                        </li>
                        <li className="hover:text-[#05422C] hover:bg-[#F2F6F4] hover:border-black">
                            Shop All Weed
                        </li>
                    </ul>
                    <a className="lg:text-base absolute right-0 text-[#17AF26] mb:text-sm underline">
                        Show All
                    </a>
                </div>
                <div className="grid lg:pt-16 lg:pb-[120px] lg:mt-[7px] mb:pb-[61px] lg:grid-cols-[276px_276px_276px_276px] mb:grid-cols-[159px_159px] border-y justify-between lg:gap-y-8 mb:gap-y-[29px] mb:pt-8">
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src={Product_5}
                                alt=""
                            />
                            <button
                                className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  
      mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md"
                            >
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="w-full flex flex-col justify-between gap-y-4 items-center">
                            <div className="flex flex-col gap-y-2 items-center">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    CONCENTRATES
                                </strong>
                                <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">
                                    Mix And Match Shatter/Budder 28g (4 X 7G)
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
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
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src={Product_5}
                                alt=""
                            />
                            <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                            <div className="flex flex-col gap-y-2 items-center">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    FLOWER
                                </strong>
                                <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">
                                    2 Oz Deal Watermelon Zkittles + Purple
                                    Gushers
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
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
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src={Product_5}
                                alt=""
                            />
                            <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                            <div className="flex flex-col gap-y-2 items-center">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    FLOWER
                                </strong>
                                <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">
                                    2 Oz Deal Watermelon Zkittles + Purple
                                    Gushers
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
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
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item 1 */}
                    <div className="grid grid-cols-[100%] lg:auto-rows-[240px_auto] mb:auto-rows-[160px_auto] lg:gap-y-6 mb:gap-y-[27px] overflow-hidden h-full rounded-xl">
                        {/* img */}
                        <div className="relative group w-full lg:h-[240px] mb:h-[160px] bg-[#F4F4F4] rounded-xl grid place-items-center">
                            <img
                                className="lg:w-[164px] mb:w-[120px] lg:h-[164px] mb:h-[120px]"
                                src={Product_5}
                                alt=""
                            />
                            <button className="absolute scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-[200%] duration-200 z-[2] lg:w-[152px] mb:w-[136px] lg:h-[64px]  mb:h-[48px] rounded-[100px] border-none bg-[#1A1E2630] text-sm text-white backdrop-blur-md">
                                Out Of Stock
                            </button>
                            <section className="hidden absolute top-0 left-0 bg-[#F2BC1B] px-3 py-1.5 text-white">
                                $60 ounce
                            </section>
                        </div>
                        {/* about */}
                        <div className="w-full flex flex-col justify-between gap-y-5 items-center">
                            <div className="flex flex-col gap-y-2 items-center">
                                <strong className="uppercase font-light lg:text-sm mb:text-xs text-center text-[#9D9EA2]">
                                    FLOWER
                                </strong>
                                <strong className="lg:text-lg text-center mb:text-base font-normal text-[#1A1E26]">
                                    2 Oz Deal <br className="lg:hidden" /> Ahi
                                    Tuna + Master Tuna
                                </strong>
                                <section className="lg:w-[163px] mb:w-[131px] h-[21px] mb:translate-y-0.5 lg:translate-y-0 *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                    <div className="flex items-start">
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
                                            className="lucide lucide-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <strong>4.6/5</strong>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <strong>135</strong>
                                        <span className="text-[#C8C9CB]">
                                            Reviews
                                        </span>
                                    </div>
                                </section>
                                <section className="bg-[#F2F6F4] -translate-y-[2px] w-[92px] h-[28px] text-xs rounded grid place-items-center">
                                    Sativa 100%
                                </section>
                            </div>
                            <div className="flex flex-col gap-y-2 items-center lg:translate-y-0 mb:-translate-y-[2.5px]">
                                <div className="flex mb:text-sm lg:text-base lg:mb-3 mb:mb-2.5">
                                    <span className=" text-[#EB2606]">
                                        $ 80.00
                                    </span>
                                    <span>/ gram</span>
                                </div>
                                <div className="flex *:text-xs *:mb:px-2 *:lg:py-[7px] mb:translate-y-0.5 lg:translate-y-0 *:mb:py-1 *:lg:px-[10px] gap-x-2 *:border *:rounded">
                                    <button>28g</button>
                                    <button>1/2lb</button>
                                    <button>1/4lb</button>
                                </div>
                                <button className="bg-[#17AF26] lg:w-[128px] mb:w-[118px] lg:mt-[11px] mb:mt-[14.5px] h-[40px] grid place-items-center rounded-[100px] lg:text-sm mb:text-xs text-white">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END RECENTY */}
        </>
    );
};

export default Recenty;

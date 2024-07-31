import React from "react";

const Contentratest = () => {
    return (
        <div className="lg:w-full mb:w-full lg:rounded-3xl lg:my-8 mb:my-2 lg:h-[460px] mb:h-[671px] bg-gradient-to-r from-[#05422C] lg:pl-[56px] lg:pr-[88px] to-[#648A7C] mb:py-6 flex lg:flex-row mb:flex-col items-center justify-between">
            {/* left */}
            <div className="lg:w-[341px] lg:h-[348px] mb:h-[239px] w-[342px] text-white flex flex-col justify-between">
                <span className="lg:text-sm mb:text-xs opacity-30 lg:tracking-[4px] mb:tracking-[2px]">
                    CONCENTRATES
                </span>
                <strong className="lg:text-[32px] lg:leading-[38px] mb:text-[24px] lg:font-semibold lg:tracking-[-1.4px] lg:-mt-1 mt-1.5 font-medium tracking-[-0.5px]">
                    Mix And Match Shatter/
                    <br className="lg:hidden" />
                    Budder 28g <br className="hidden lg:block" /> (4 X 7G)
                </strong>
                <section className="w-[163px] h-[21px] lg:translate-y-2.5 *:text-sm flex justify-between items-center lg:mt-0 mt-2.5">
                    <div className="flex items-center">
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
                    |
                    <div className="flex gap-x-2">
                        <strong>135</strong>
                        <span className="text-[#C8C9CB]">Reviews</span>
                    </div>
                </section>
                <div className="flex *:text-xs *:py-[7px] *:px-[10px] gap-x-2 my-3 *:border *:rounded">
                    <button>28g</button>
                    <button>1/2lb</button>
                    <button>1/4lb</button>
                </div>
                <div className="flex justify-between items-center">
                    <button className="bg-[#17AF26] lg:w-[172px] lg:h-[56px] lg:px-0 px-[19px] mb:h-[40px] grid place-items-center rounded-[100px] lg:text-base text-sm text-white">
                        Add to Cart
                    </button>
                    <span className="font-normal lg:text-xl mb:text-lg text-[#F2BC1B]">
                        $102.00{" "}
                        <del className="lg:text-sm mb:text-mb text-white">
                            $200.00
                        </del>
                    </span>
                </div>
            </div>
            {/* right */}
            <div className="relative lg:w-[373px] mb:w-[342px] h-[344px] flex flex-col items-center justify-between">
                <div className="w-full h-[322px] bg-[#ffffff12] grid place-items-center rounded-2xl">
                    <img src="../Images/img_product.png" alt="" />
                </div>
                {/* *****  */}
                <div className="*:relative flex *:w-1.5 *:h-1.5 *:rounded-[50%] gap-x-2 *:after:content-[''] *:after:absolute *:after:-top-1/2 *:after:-left-1/2 *:after:rounded-[50%] *:after:bg-[#ffffff20]">
                    <button className="bg-[#ffffff] after:w-3 after:h-3" />
                    <button className="bg-[#ffffff20] hover:after:w-3 hover:after:h-3 hover:bg-white" />
                    <button className="bg-[#ffffff20] hover:after:w-3 hover:after:h-3 hover:bg-white" />
                    <button className="bg-[#ffffff20] hover:after:w-3 hover:after:h-3 hover:bg-white" />
                </div>
                {/* back and next */}
                <div className="absolute top-1/2 -translate-y-full w-full flex justify-between *:w-7 *:h-7 *:rounded-[50%] *:bg-white *:grid *:place-items-center">
                    <button className="-translate-x-1/2">
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
                    <button className="translate-x-1/2">
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
    );
};

export default Contentratest;

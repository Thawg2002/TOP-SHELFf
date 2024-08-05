import { IProduct } from "@/common/types/product";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
type Props = {
    product: IProduct;
};

const DescriptionId = ({ product }: Props) => {
    const [activeTab, setActiveTab] = useState("description");
    const onhandleActiveTab = (name: string) => {
        setActiveTab(name);
    };

    return (
        <div className="flex flex-col border-t lg:py-10 lg:mt-10 mb:py-[34px] mb:mt-8">
            {/* menu description */}
            <ul className="flex items-center justify-between border-b lg:pb-6 mb:pb-5 *:lg:w-[197.33px] *:mb:w-[106px] *:lg:py-2.5 *:mb:py-[7px] *:rounded-[100px] *:border *:place-items-center *:lg:text-base *:mb:text-xs">
                <button
                    className={`btn_show_description grid ${activeTab === "description" ? "border-[#05422C] bg-[#F2F6F4] text-[#05422C]" : ""} hover:border-[#05422C] hover:bg-[#F2F6F4] `}
                    onClick={() => onhandleActiveTab("description")}
                >
                    Description
                </button>
                <button
                    className={`btn_show_review flex items-center justify-center gap-x-1 ${activeTab === "review" ? "border-[#05422C] bg-[#F2F6F4] text-[#05422C]" : ""}`}
                    onClick={() => onhandleActiveTab("review")}
                >
                    Reviews
                    <p>(350)</p>
                </button>
                <button
                    className={`btn_show_refer grid hover:border-[#05422C] hover:text-[#05422C] hover:bg-[#F2F6F4] ${activeTab === "referaFriend" ? "border-[#05422C] bg-[#F2F6F4] text-[#05422C]" : ""}`}
                    onClick={() => onhandleActiveTab("referaFriend")}
                >
                    Refer a Friend
                </button>
            </ul>
            {/* text description */}
            <div
                className={`show_description ${activeTab === "description" ? "block" : "hidden"}`}
            >
                <section className="flex flex-col text-sm text-[#46494F] leading-[21px] gap-y-4 lg:py-6 mb:pt-[19px]">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: product?.description || "",
                        }}
                    />
                </section>
            </div>
            {/* detail comment */}
            <section
                className={`show_review ${activeTab === "review" ? "block" : "hidden"}`}
            >
                <div className="flex flex-col text-sm text-[#46494F] leading-[21px] gap-y-4 lg:pt-6 mb:pt-5 mb:pb-0">
                    {/* content comment 1 */}
                    <div className="border rounded-2xl lg:p-6 mb:p-5">
                        {/* user and time comment */}
                        <div className="flex items-center *:flex *:items-center gap-x-4 border-b border-[#F4F4F4] pb-4 mb-4">
                            <img
                                width={36}
                                height={36}
                                src="../Images/vikki_user_icon.png"
                                alt=""
                            />
                            <strong className="text-base text-[#1A1E26] font-medium gap-x-4">
                                Vikki Starr{" "}
                                <span className="text-sm text-[#9D9EA2] font-light">
                                    |
                                </span>{" "}
                                <span className="text-sm text-[#9D9EA2] font-light">
                                    January 15, 2023
                                </span>
                            </strong>
                        </div>
                        {/* text comment */}
                        <section className="flex flex-col gap-y-4">
                            <nav className="flex items-center gap-x-1">
                                <img src="../Images/star.png" alt="" />
                                <img src="../Images/star.png" alt="" />
                                <img src="../Images/star.png" alt="" />
                                <img src="../Images/star.png" alt="" />
                                <img src="../Images/star.png" alt="" />
                            </nav>
                            <p className="text-[#1A1E26] text-base">
                                Absolutely love TopShelfBC; affordable on any
                                budget and such fast delivery, straight to my
                                door! I recommend them to all my friends and
                                family for their 420 needs.
                            </p>
                        </section>
                    </div>
                    {/* content comment 2 */}
                    <div className="border rounded-2xl lg:p-6 mb:p-5">
                        {/* user and time comment */}
                        <div className="flex items-center *:flex *:items-center gap-x-4 border-b border-[#F4F4F4] pb-4 mb-4">
                            <img
                                width={36}
                                height={36}
                                src="../Images/vikki_user_icon.png"
                                alt=""
                            />
                            <strong className="text-base text-[#1A1E26] font-medium gap-x-4">
                                Terry Baskey{" "}
                                <span className="text-sm text-[#9D9EA2] font-light">
                                    |
                                </span>{" "}
                                <span className="text-sm text-[#9D9EA2] font-light">
                                    January 15, 2023
                                </span>
                            </strong>
                        </div>
                        {/* text comment */}
                        <section className="flex flex-col gap-y-4">
                            <nav className="flex items-center gap-x-1">
                                <img src="../Images/star.png" alt="" />
                                <img src="../Images/star.png" alt="" />
                                <img src="../Images/star.png" alt="" />
                                <img src="../Images/star.png" alt="" />
                                <img src="../Images/star.png" alt="" />
                            </nav>
                            <p className="text-[#1A1E26] text-base">
                                Best damn place to buy your canabis at great
                                prices.
                            </p>
                        </section>
                    </div>
                    {/*btn show more */}
                    <div className="flex justify-center my-1">
                        <button className="px-5 py-2 text-[#17AF26] text-sm rounded-[100px] border hover:bg-[#F9F9F9] cursor-pointer duration-300">
                            Show More
                        </button>
                    </div>
                    {/* add comment */}
                    <div className="flex flex-col gap-y-6 border-t lg:pt-7 lg:pb-[22px]">
                        <strong className="lg:text-lg">Add A Review</strong>
                        <section className="flex item-center gap-x-4">
                            <span className="mt-0.5">Your rating</span>
                            <span>:</span>
                            <div className="flex item-center *:w-5 *:h-5 gap-x-1 *:cursor-pointer">
                                <img src="../Images/star_no_color.png" alt="" />
                                <img src="../Images/star_no_color.png" alt="" />
                                <img src="../Images/star_no_color.png" alt="" />
                                <img src="../Images/star_no_color.png" alt="" />
                                <img src="../Images/star_no_color.png" alt="" />
                            </div>
                        </section>
                        <form className="-mt-1.5">
                            <span>Your Review</span>
                            <div className="overflow-hidden lg:p-4 rounded-lg border border-gray-200 shadow-sm focus-within:border-none focus-within:ring-1 focus-within:none mt-2">
                                <textarea
                                    id="OrderNotes"
                                    className="w-full resize-none outline-none border-none align-top focus:ring-0 sm:text-sm"
                                    rows={3}
                                    placeholder="Enter your review"
                                    defaultValue={""}
                                />
                            </div>
                            <button className="px-10 py-4 bg-[#17AF26] rounded-[100px] text-base text-white mt-4">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {/* detail refer a friend */}
            <div
                className={`show_refer  ${activeTab === "referaFriend" ? "block" : "hidden"}`}
            >
                <div className="rounded-2xl lg:px-6 lg:pt-7 lg:pb-4 mb:p-5 border flex flex-col gap-y-5 mt-5 mb-[23px]">
                    <section className="border-b pb-6">
                        <strong className="lg:text-xl mb:text-lg font-medium text-[#060709]">
                            Referral Program
                        </strong>
                        <p className="text-[#717378] lg:text-base mb:text-sm mt-4">
                            Absolutely love TopShelfBC; affordable on any budget
                            and such fast delivery, straight to my door! I
                            recommend them to all my friends and family for
                            their 420 needs.
                        </p>
                    </section>
                    <section className="*:p-4 mt-1 *:bg-[#F3FBF4] flex flex-col gap-y-6 *:rounded-xl border-b pb-6">
                        <div className="flex item-center justify-between gap-x-3">
                            {/* col line */}
                            <div className="w-0.5 bg-[#EB2606]" />
                            {/* text */}
                            <span className="flex flex-col gap-y-2 text-sm font-light">
                                Your Referral URL
                                <strong className="text-base font-medium">
                                    Referral code is available only to users
                                    with at least one order.
                                </strong>
                            </span>
                            {/* coppy */}
                            <div className="w-10 h-10 rounded-[50%] bg-white grid place-items-center">
                                <img
                                    width={18}
                                    height={18}
                                    src="../Images/copy.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* *** */}
                        <div className="flex item-center justify-between gap-x-3">
                            {/* col line */}
                            <div className="w-0.5 bg-[#EB2606]" />
                            {/* text */}
                            <span className="flex flex-col gap-y-2 text-sm font-light">
                                Your Coupon Code to share
                                <strong className="text-base font-medium">
                                    Referral code is available only to users
                                    with at least one order.
                                </strong>
                            </span>
                            {/* coppy */}
                            <div className="w-10 h-10 rounded-[50%] bg-white grid place-items-center">
                                <img
                                    width={18}
                                    height={18}
                                    src="../Images/copy.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </section>
                    {/* social */}
                    <nav className="flex lg:flex-row mb:flex-col mt-1 *:lg:px-5 *:lg:py-4 *:gap-y-4 *:border *:rounded-[14px] justify-between lg:gap-x-6 *:grid *:place-items-center">
                        {/* fb */}
                        <div>
                            <button className="w-12 h-12 grid place-items-center bg-[#EDF4FF] rounded-[50%]">
                                <img src="../Images/fb_icon.png" alt="" />
                            </button>
                            <span className="text-[#46494F] text-sm">
                                Share Via Facebook
                            </span>
                        </div>
                        {/* twitter */}
                        <div>
                            <button className="w-12 h-12 grid place-items-center bg-[#EDF4FF] rounded-[50%]">
                                <img src="../Images/twitter_icon.png" alt="" />
                            </button>
                            <span className="text-[#46494F] text-sm">
                                Share Via Twitter
                            </span>
                        </div>
                        {/* hotline */}
                        <div>
                            <button className="w-12 h-12 grid place-items-center bg-[#EDF4FF] rounded-[50%]">
                                <img src="../Images/hotline_icon.png" alt="" />
                            </button>
                            <span className="text-[#46494F] text-sm">
                                Share Via Whatsapp
                            </span>
                        </div>
                    </nav>
                    <span className="text-[#C8C9CB] text-center mt-1">
                        Or share via email
                    </span>
                    {/* contact to email */}
                    <form>
                        <div className="grid mt-1 lg:grid-cols-[42%_42%_auto] items-end justify-between gap-y-4">
                            <div className="flex flex-col items-start gap-y-2">
                                <span className="text-sm">Email</span>
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="border rounded-lg w-full p-3 outline-none placeholder:text-[#C8C9CB] text-[#C8C9CB] font-normal"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <span className="text-sm">Name</span>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="border rounded-lg p-3 w-full outline-none placeholder:text-[#C8C9CB] placeholder:font-normal text-[#C8C9CB] font-normal"
                                />
                            </div>
                            <button className="bg-[#F3FBF4] rounded-[50%] w-12 h-12 hover:scale-105 duration-300 cursor-pointer text-[#17AF26] text-3xl font-light grid place-items-center">
                                <img src="../Images/add.png" alt="" />
                            </button>
                            <div className="flex flex-col items-start gap-y-2">
                                <input
                                    type="text"
                                    placeholder="johndoe@example.com"
                                    className="border w-full placeholder:text-black rounded-lg p-3 outline-none text-black font-normal"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <input
                                    type="text"
                                    defaultValue="John Doe"
                                    className="border w-full rounded-lg p-3 outline-none text-black font-normal"
                                />
                            </div>
                        </div>
                        {/*btn show more */}
                        <div className="flex justify-start my-1.5">
                            <button className="px-[42px] py-4 bg-[#17AF26] rounded-[100px] text-base text-white mt-4">
                                Send Emails
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DescriptionId;

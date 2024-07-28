import React from "react";

const ProductDetailRight = ({ product }: any) => {
    return (
        <>
            <div className="h-full w-full *:w-full lg:mt-0 mb:mt-[42px]">
                <div className="flex flex-col lg:gap-y-5">
                    {/* row 1 */}
                    <div className="lg:h-[211px] flex flex-col lg:gap-y-4">
                        <span className="text-[#9D9EA2] lg:text-sm mb:text-xs lg:tracking-[4px] mb:tracking-[2px]">
                            CONCENTRATES
                        </span>
                        <strong className="lg:text-[32px] lg:mt-[1px] mb:mt-3.5 mb:text-[20px] lg:tracking-[-1.2px] font-medium lg:leading-[38.4px]">
                            {product.name}
                            <br className="lg:block mb:hidden" />
                            (4 X 7G)
                        </strong>
                        <div className="*:bg-[#F2F6F4] *:lg:rounded-lg *:lg:px-4 *:lg:py-2.5 *:text-[#05422C] flex items-center lg:gap-x-4 *:text-xs lg:my-0 mb:mt-3 mb:mb-2 *:mb:px-2.5 *:mb:py-[5.5px] mb:gap-2 *:mb:rounded">
                            <button>Indica</button>
                            <button>Sativa 100%</button>
                        </div>
                        <div className="flex lg:items-center mb:items-end justify-between">
                            <span className="font-medium text-[#EB2606] lg:text-xl lg:tracking-[0.7px] mb:text-base flex items-center lg:gap-x-3 lg:mt-0.5 mb:gap-x-2">
                                <del className="font-light lg:text-sm mb:text-sm text-[#9D9EA2]">
                                    {product.regular_price}
                                </del>
                                {product.regular_price *
                                    (1 - product.discount / 100)}
                            </span>
                            <section className="lg:w-[163px] mb:w-[157px] mb:mt-[8px] lg:mt-0 h-[21px] *:lg:text-sm *:mb:text-xs flex justify-between items-start">
                                <div className="flex items-start lg:gap-x-0 mb:gap-x-1">
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
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="lg:h-[251px] border rounded-xl lg:px-6 lg:py-5 mb:px-5 mb:py-[20px] lg:my-0 mb:my-[18px]">
                        <div className="w-full h-full flex flex-col gap-y-5">
                            {/* item 1 */}
                            <section className="flex gap-x-4">
                                <img
                                    className="w-8 h-8"
                                    src="../Images/colorfilter.png"
                                    alt=""
                                />
                                <section className="flex flex-col lg:gap-y-[11px] lg:mt-0.5 mt-[2.5px] mb:gap-y-2.5 h-full">
                                    <span className="text-[#717378] text-xs tracking-[1px]">
                                        EFFECTS
                                    </span>
                                    <span className="text-[#060709] text-sm">
                                        Calming, Creative, Happy, Relaxing,
                                        Sleepy, Uplifting
                                    </span>
                                </section>
                            </section>
                            {/* item 1 */}
                            <section className="flex gap-x-4">
                                <img
                                    className="w-8 h-8"
                                    src="../Images/relieve.png"
                                    alt=""
                                />
                                <section className="flex flex-col lg:gap-y-[9px] lg:mt-0.5 mt-[3px] mb:gap-y-2 h-full justify-between">
                                    <span className="text-[#717378] text-xs tracking-[1px]">
                                        MAY RELIEVE
                                    </span>
                                    <span className="text-[#060709] text-[14px] lg:ml-0.5 tracking-[0.1px]">
                                        Anxiety, Arthritis, Chronic Pain,
                                        Depression, Fatigue, Inflammation,
                                        Insomnia, Irregular Bowel Movements,
                                        Migraines, Mood Swings
                                    </span>
                                </section>
                            </section>
                            {/* item 1 */}
                            <section className="flex gap-x-4 lg:translate-y-1">
                                <img
                                    className="w-8 h-8"
                                    src="../Images/asromas.png"
                                    alt=""
                                />
                                <section className="flex flex-col lg:gap-y-[11px] lg:translate-y-[1px] lg:mt-0 mt-1 mb:gap-y-2.5 h-full justify-between">
                                    <span className="text-[#717378] text-xs tracking-[0.5px]">
                                        AROMAS
                                    </span>
                                    <span className="text-[#060709] text-sm">
                                        Chemical, Citrus, Earthy, Pungent, Sour
                                    </span>
                                </section>
                            </section>
                        </div>
                    </div>
                    {/* row 3 */}
                    <div className="flex flex-col lg:gap-y-3 mb:gap-y-2 lg:mt-[2px] mt-[3px] lg:pb-0 mb:pb-[21px]">
                        <span className="text-xs tracking-[1px] text-[#717378]">
                            DESCRIPTION
                        </span>
                        <p className="text-[14px] text-[#46494F]">
                            Jungle Diamonds is a slightly indica dominant hybrid
                            strain (60% indica/40% sativa) created through
                            crossing the infamous Slurricane X Gorilla Glue #4
                            strains.
                        </p>
                    </div>
                    {/* row 4 */}
                    <div className="flex flex-col lg:gap-y-[22px] border-t lg:mt-[5px] lg:py-5 mb:py-6">
                        <div className="grid lg:grid-cols-[48.5%_48.5%] justify-between items-start">
                            <div className="*:text-xs flex flex-col gap-y-3 lg:mt-0 mb:-mt-1">
                                <span className="text-[#717378] lg:translate-y-0 mb:translate-y-1 tracking-[1px] uppercase">
                                    WEIGHT
                                </span>
                                <section className="*:lg:px-[13.5px] *:lg:py-2.5 *:mb:px-3.5 *:mb:py-2 *:rounded flex gap-x-4 *:duration-200">
                                    <button className="hover:border border-[#17AF26] border border-[#17AF26]">
                                        28g
                                    </button>
                                    <button className="hover:border-[#17AF26] border bg-[#F4F4F4] hover:bg-[#F3FBF4] border-[#F3FBF4]">
                                        1/2lb
                                    </button>
                                    <button className="hover:border-[#17AF26] border bg-[#F4F4F4] hover:bg-[#F3FBF4] border-[#F3FBF4]">
                                        1/4lb
                                    </button>
                                </section>
                            </div>
                            {/* ***** */}
                            <div className="flex flex-col lg:gap-y-4 gap-y-3 lg:mt-0 mb:mt-7">
                                <span className="text-[#717378] text-xs lg:tracking-[1px] tracking-[0.8px] uppercase">
                                    Add Integra Pack
                                </span>
                                <section className="*:text-sm *:py-1 flex lg:gap-x-12 gap-x-14 *:duration-200">
                                    <div className="flex items-center *:lg:px-3.5 *:mb:px-2.5">
                                        <input
                                            className="rounded-lg w-[22px] h-[22px]"
                                            type="checkbox"
                                        />
                                        <span>4g (+$2.00)</span>
                                    </div>
                                    <span>8g (+$3.00)</span>
                                </section>
                            </div>
                        </div>
                        <section className="bg-[#FEF8E8] lg:tracking-0 tracking-[0.0002px] px-3.5 py-2 rounded-[100px] lg:w-[342px] lg:mt-0 mb:mt-[18px] mb:w-full text-sm">
                            Purchase this product now and earn{" "}
                            <span className="text-[#EB2606]">80</span> Points!
                        </section>
                    </div>
                    {/* row 5 */}
                    <div className="lg:p-6 mb:py-5 mb:px-5 rounded-lg *:w-full border rounded-xl lg:-mt-5 -mt-1">
                        {/* price */}
                        <div className="flex flex-col gap-y-3.5 lg:pb-0 mb:pb-6 tracking-[-0.2px]">
                            <section className="flex justify-between *:font-medium *:text-sm">
                                <span className="flex gap-x-4 text-[#46494F]">
                                    Khalifa Kush (AAAA){" "}
                                    <p className="text-[#9D9EA2]">2x</p>
                                </span>
                                <strong>$120.00</strong>
                            </section>
                            <section className="flex justify-between *:font-medium *:text-sm">
                                <span className="text-[#46494F]">
                                    Add Integra Pack - 4g
                                </span>
                                <strong>$2.00</strong>
                            </section>
                        </div>
                        {/* quantity */}
                        <div className="py-5 flex lg:flex-row mb:flex-col lg:gap-y-0 gap-y-[17px] justify-between lg:items-center mb:items-start border-y lg:mt-[22px]">
                            {/* up , dow quantity */}
                            <div className="border lg:py-2.5 lg:pr-6 lg:pl-4 mb:py-1 mb:pl-2 mb:pr-[18px] *:text-xs flex items-center gap-x-3 rounded-xl">
                                <div className="flex items-center *:w-9 *:h-9 gap-x-1 *:grid *:place-items-center">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-minus"
                                        >
                                            <path d="M5 12h14" />
                                        </svg>
                                    </button>
                                    <div className="bg-[#F4F4F4]">2</div>
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-plus"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5v14" />
                                        </svg>
                                    </button>
                                </div>
                                |
                                <span className="text-[#17AF26] lg:tracking-[0.5px]">
                                    In Stock
                                </span>
                            </div>
                            {/* add cart */}
                            <button className="lg:text-base mb:text-sm font-medium flex place-items-center gap-x-4 text-white bg-[#17AF26] rounded-[100px] lg:px-[30px] mb:px-[22px] lg:h-14 mb:h-12">
                                <span>Add to Cart</span> | <span>$242.00</span>
                            </button>
                        </div>
                        {/* service , voucher */}
                        <section className="flex lg:mt-0 mt-0.5 flex-col pt-[23px] gap-y-[13px] *:flex *:items-center *:gap-x-2 *:lg:text-sm *:mb:text-xs *:text-[#46494F]">
                            <span>
                                <img src="../Images/tick-circle.png" alt="" />
                                Free Xpress Shipping on orders over{" "}
                                <p className="text-[#F2BC1B]">$149</p>
                            </span>
                            <span>
                                <img src="../Images/tick-circle.png" alt="" />
                                Order before 12:00pm for same day dispatch
                            </span>
                            <span>
                                <img src="../Images/tick-circle.png" alt="" />
                                Support &amp; ordering open 7 day a week
                            </span>
                        </section>
                    </div>
                    {/* different */}
                    <div className="grid lg:grid-cols-[49%_49%] justify-between lg:gap-y-0 mb:gap-y-4 lg:text-sm mb:text-xs *:flex border-t lg:pt-6 lg:mt-0 mb:pt-[18px] mb:mt-5 mb:grid-cols-full">
                        <span className="lg:gap-x-[84px] gap-x-[78px] font-light text-[#717378]">
                            SKU{" "}
                            <p className="font-normal text-[#060709]">
                                :&nbsp;&nbsp;&nbsp; N/A
                            </p>
                        </span>
                        <span className="font-light text-[#717378] lg:gap-x-[50px] mb:gap-x-10">
                            Categories{" "}
                            <p className="text-[#17AF26] font-normal">
                                :&nbsp;&nbsp;&nbsp;&nbsp; AAAA Weed, Indica
                            </p>
                        </span>
                    </div>
                </div>
                {/* description */}
                <div className="flex flex-col border-t lg:py-10 lg:mt-10 mb:py-[34px] mb:mt-8">
                    {/* menu description */}
                    <ul className="flex items-center justify-between border-b lg:pb-6 mb:pb-5 *:lg:w-[197.33px] *:mb:w-[106px] *:lg:py-2.5 *:mb:py-[7px] *:rounded-[100px] *:border *:place-items-center *:lg:text-base *:mb:text-xs">
                        <button className="btn_show_description grid hover:border-[#05422C] border-[#05422C] text-[#05422C] hover:bg-[#F2F6F4] bg-[#F2F6F4]">
                            Description
                        </button>
                        <button className="btn_show_review flex items-center justify-center gap-x-1 hover:border-[#05422C] hover:text-[#05422C] hover:bg-[#F2F6F4]">
                            Reviews
                            <p>(350)</p>
                        </button>
                        <button className="btn_show_refer grid hover:border-[#05422C] hover:text-[#05422C] hover:bg-[#F2F6F4]">
                            Refer a Friend
                        </button>
                    </ul>
                    {/* text description */}
                    <div className="show_description">
                        <section className="flex flex-col text-sm text-[#46494F] leading-[21px] gap-y-4 lg:py-6 mb:pt-[19px]">
                            <p>
                                Jungle Diamonds is a slightly indica dominant
                                hybrid strain (60% indica/40% sativa) created
                                through crossing the infamous Slurricane X
                                Gorilla Glue #4 strains. Named for its gorgeous
                                appearance and breeder, Jungle Diamonds is a
                                favorite of indica and hybrid lovers alike
                                thanks to its delicious taste and tingly,
                                arousing high. Jungle Diamonds buds have
                                sparkling oversized spade-shaped olive green
                                nugs with vivid amber hairs and a thick frosty
                                blanket of glittering tiny blue-tinted white
                                crystal trichomes. As you pull apart each sticky
                                little nugget, aromas of spicy mocha coffee and
                                fruity herbs are released.{" "}
                            </p>
                            <p>
                                The flavor is of sweet chocolate with hints of
                                fresh ripe berries to it, too. The Jungle
                                Diamonds high is just as delicious, with happy
                                effects that will boost the spirits and kick
                                negative thoughts and moods to the curb. You'll
                                feel a tingly sense in your body from start to
                                finish that serves to remove any aches or pains
                                while leaving you pretty aroused at times. This
                                is accompanied by a blissfully unfocused heady
                                lift that leaves your head in the clouds without
                                causing sedation. With these effects and its
                                pretty high 17-24% THC level, Jungle Diamonds is
                                ideal for experienced patients with chronic
                                pain, cramps or muscle spasms and appetite loss
                                or nausea.
                            </p>
                        </section>
                    </div>
                    {/* detail comment */}
                    <section className="show_review hidden">
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
                                        Absolutely love TopShelfBC; affordable
                                        on any budget and such fast delivery,
                                        straight to my door! I recommend them to
                                        all my friends and family for their 420
                                        needs.
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
                                        Best damn place to buy your canabis at
                                        great prices.
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
                                <strong className="lg:text-lg">
                                    Add A Review
                                </strong>
                                <section className="flex item-center gap-x-4">
                                    <span className="mt-0.5">Your rating</span>
                                    <span>:</span>
                                    <div className="flex item-center *:w-5 *:h-5 gap-x-1 *:cursor-pointer">
                                        <img
                                            src="../Images/star_no_color.png"
                                            alt=""
                                        />
                                        <img
                                            src="../Images/star_no_color.png"
                                            alt=""
                                        />
                                        <img
                                            src="../Images/star_no_color.png"
                                            alt=""
                                        />
                                        <img
                                            src="../Images/star_no_color.png"
                                            alt=""
                                        />
                                        <img
                                            src="../Images/star_no_color.png"
                                            alt=""
                                        />
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
                    <div className="show_refer hidden">
                        <div className="rounded-2xl lg:px-6 lg:pt-7 lg:pb-4 mb:p-5 border flex flex-col gap-y-5 mt-5 mb-[23px]">
                            <section className="border-b pb-6">
                                <strong className="lg:text-xl mb:text-lg font-medium text-[#060709]">
                                    Referral Program
                                </strong>
                                <p className="text-[#717378] lg:text-base mb:text-sm mt-4">
                                    Absolutely love TopShelfBC; affordable on
                                    any budget and such fast delivery, straight
                                    to my door! I recommend them to all my
                                    friends and family for their 420 needs.
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
                                            Referral code is available only to
                                            users with at least one order.
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
                                            Referral code is available only to
                                            users with at least one order.
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
                                        <img
                                            src="../Images/fb_icon.png"
                                            alt=""
                                        />
                                    </button>
                                    <span className="text-[#46494F] text-sm">
                                        Share Via Facebook
                                    </span>
                                </div>
                                {/* twitter */}
                                <div>
                                    <button className="w-12 h-12 grid place-items-center bg-[#EDF4FF] rounded-[50%]">
                                        <img
                                            src="../Images/twitter_icon.png"
                                            alt=""
                                        />
                                    </button>
                                    <span className="text-[#46494F] text-sm">
                                        Share Via Twitter
                                    </span>
                                </div>
                                {/* hotline */}
                                <div>
                                    <button className="w-12 h-12 grid place-items-center bg-[#EDF4FF] rounded-[50%]">
                                        <img
                                            src="../Images/hotline_icon.png"
                                            alt=""
                                        />
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
            </div>
        </>
    );
};

export default ProductDetailRight;

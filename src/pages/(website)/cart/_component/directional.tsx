import React from "react";

const Directional = () => {
    return (
        <div className="w-full lg:py-7 mb:py-[18px] bg-[#F4F4F4] grid place-items-center -mt-[1px]">
            <div className="flex -translate-x-[1px] items-center gap-x-4 text-sm">
                <div className="flex items-center gap-x-2">
                    <img
                        className="w-[30px] h-[30px] p-2 text-white bg-[#05422C] rounded-[50%]"
                        src="../Images/cart_icon.png"
                        alt=""
                    />
                    <span>Shopping Cart</span>
                </div>
                <div className="lg:w-[74.5px] mb:min-w-[39.5px] h-[1px] bg-[#C3D2CC]" />
                <div className="flex items-center gap-x-2">
                    <img
                        className="w-[30px] h-[30px] p-2 text-white bg-white rounded-[50%]"
                        src="../Images/checkout.png"
                        alt=""
                    />
                    <span className="hidden lg:block">Checkout</span>
                </div>
                <div className="lg:w-[74.5px] mb:min-w-[39.5px] h-[1px] bg-[#C3D2CC]" />
                <div className="flex items-center gap-x-2">
                    <img
                        className="w-[30px] h-[30px] p-2 text-white bg-white rounded-[50%]"
                        src="../Images/order.png"
                        alt=""
                    />
                    <span className="hidden lg:block">Order Complete</span>
                </div>
            </div>
        </div>
    );
};

export default Directional;

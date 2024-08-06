import useCart from "@/common/hooks/useCart";
import type { CheckboxProps } from "antd";
import { Checkbox } from "antd";
import { useState } from "react";
type Props = {
    cart: any;
};

const ListCart = ({ cart }: Props) => {
    const [listchecked, setListChecked] = useState<string[]>([]);
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const { decreaseQuantity, increaseQuantity } = useCart(user?._id);
    const onChange: CheckboxProps["onChange"] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    //Thay đổi số lượng
    const handleQuantity = async (message: string, productId: string) => {
        try {
            if (message === "decreaseQuantity") {
                decreaseQuantity.mutate({
                    userId: user._id,
                    productId,
                });
            } else if (message === "increaseQuantity") {
                increaseQuantity.mutate({
                    userId: user._id,
                    productId,
                });
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <>
            <span className="text-xl  mb-[1px] items-center justify-between pb-2 border-b">
                <p className="text-[#9D9EA2] lg:text-base  mb:text-sm flex flex-col mb-3">
                    Your Cart ({cart?.cart?.totalQuantity})
                </p>
                <div className="flex justify-between">
                    <div>
                        <Checkbox
                            onChange={onChange}
                            className="text-[#9D9EA2]"
                        >
                            Chọn tất cả
                        </Checkbox>
                    </div>
                    <i className="fa-regular fa-trash-can mx-4"></i>
                </div>
            </span>
            <div className="flex flex-col border-b lg:pb-[22px] mb:pb-3">
                {cart?.cart?.cartData?.products?.map(
                    (item: any, index: number) => {
                        return (
                            <section
                                className="flex lg:mt-[23px] mb:mt-[15px] gap-x-4"
                                key={index}
                            >
                                <Checkbox onChange={onChange}></Checkbox>
                                <img
                                    className="border rounded w-12 h-12 p-1"
                                    src={item.image}
                                    alt=""
                                />
                                {/* change quantity, name , price */}
                                <div className="relative w-full flex flex-col *:justify-between gap-y-2.5 lg:gap-y-3">
                                    <div className="lg:py-2 mb-0.5 lg:mb-0 flex lg:flex-row mb:flex-col lg:items-center gap-x-4">
                                        <span className="text-[#9D9EA2] text-sm">
                                            {item.name}
                                        </span>
                                        <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-[20.5%]">
                                            <div className="lg:mt-0 mb:mt-[12.5px] flex items-center *:grid *:place-items-center *:lg:w-9 *:lg:h-9 *:mb:w-8 *:mb:h-8">
                                                <button
                                                    onClick={() =>
                                                        handleQuantity(
                                                            "decreaseQuantity",
                                                            item.productId,
                                                        )
                                                    }
                                                >
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
                                                        className="lucide lucide-minus text-xs"
                                                    >
                                                        <path d="M5 12h14" />
                                                    </svg>
                                                </button>
                                                <div className="bg-[#F4F4F4] text-xs rounded">
                                                    {item.quantity}
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        handleQuantity(
                                                            "increaseQuantity",
                                                            item.productId,
                                                        )
                                                    }
                                                >
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
                                                        className="lucide lucide-plus text-xs"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="M12 5v14" />
                                                    </svg>
                                                </button>
                                                <span className="ml-3 text-sm">
                                                    {item.price}
                                                </span>
                                            </div>
                                            {/* price */}
                                            <span className="block absolute lg:hidden text-[#9D9EA2] text-sm top-5 right-0">
                                                {item.price}
                                            </span>
                                        </div>
                                        {/* price */}
                                        <span className="hidden lg:block text-[#4a4c54] text-sm">
                                            {item.finalPrice}
                                        </span>
                                    </div>
                                </div>
                            </section>
                        );
                    },
                )}
            </div>
        </>
    );
};

export default ListCart;

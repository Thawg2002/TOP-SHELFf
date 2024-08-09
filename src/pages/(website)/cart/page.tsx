import { box_time, transaction_minus, truck_time } from "@/assets/img";
import useCart from "@/common/hooks/useCart";
import { Checkbox } from "antd";
import { useMemo, useState } from "react";
import Directional from "./_component/directional";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { toast } from "@/components/ui/use-toast";
type Props = {};

const CartUser = (props: Props) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const [listchecked, setListChecked] = useState<string[]>([]);
    // const [totalPrice, setTotalPrice] = useState<number>(0);

    const {
        cart,
        isLoading,
        error,
        decreaseQuantity,
        increaseQuantity,
        removeItem,
    } = useCart(user?._id);
    // check từng san phẩm
    const onChangeChecked = (e: any) => {
        if (listchecked.includes(e.target.value)) {
            // nếu checkbox đã được chọn thì tạo ra mảng mới k có cái id ý nữa ,sau đó set lại danh sách
            const newList = listchecked.filter(
                (item) => item !== e.target.value,
            );
            setListChecked(newList);
        } else {
            // nếu chwua thì thêm vào danh sách check
            setListChecked([...listchecked, e.target.value]);
        }
    };
    //Check toàn bộ
    const onChangeCheckedAll = (e: any) => {
        const newListCheck: any = [];
        if (e.target.checked) {
            // console.log("data", cart?.cart?.cartData?.products);
            cart?.cart?.cartData?.products.map((item: any) =>
                newListCheck.push(item as any),
            );
            setListChecked(newListCheck);
        } else {
            setListChecked([]);
        }
    };
    //Tính tổng giá những sản phẩm được checked
    const totalPriceChecked = useMemo(() => {
        const result = listchecked?.reduce((total, item: any) => {
            return total + (item.finalPrice || 0);
        }, 0);
        return result;
    }, [listchecked]);
    // console.log("totalPriceChecked", totalPriceChecked);
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
    // Xóa sản phẩm
    const onhandleDelete = async (message: string, items: any) => {
        // console.log("message", message);
        // console.log("items", items);

        try {
            if (message === "deleteOneProduct") {
                removeItem.mutate({
                    userId: user._id,
                    productIds: items.productId,
                });
                setListChecked([]);
                toast({
                    variant: "success",
                    title: "Xóa thành công.",
                });
            } else if (message === "deleteAllProduct") {
                for (const item of items) {
                    await removeItem.mutateAsync({
                        userId: user._id,
                        productIds: item.productId,
                    });
                }
                setListChecked([]);
                toast({
                    variant: "success",
                    title: "Xóa thành công.",
                });
            }
        } catch (error) {
            console.log("error", error);
            toast({
                variant: "error",
                title: "Đã xảy ra lỗi khi xóa sản phẩm.",
            });
        }
    };
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading cart data</p>;

    return (
        <>
            <div>
                {/* header */}
                {/* <Header /> */}
                {/*router page */}
                <Directional />
                {/* main cart */}
                <main className="lg:w-[1170px] mb:w-[342px] lg:mt-8 mb:mt-6 mx-auto grid lg:grid-cols-[686px_420px] mb:grid-cols-[100%] justify-between *:w-full pb-10">
                    {/* left */}
                    <div>
                        {/* list items */}
                        {/* <ListCart
                            cart={cart}
                          
                        /> */}
                        <span className="text-xl  mb-[1px] items-center justify-between pb-2 border-b">
                            <p className="text-[#9D9EA2] lg:text-base  mb:text-sm flex flex-col mb-3">
                                Your Cart ({cart?.cart?.totalQuantity})
                            </p>
                            <div className="flex justify-between">
                                <div>
                                    <Checkbox
                                        onChange={onChangeCheckedAll}
                                        checked={
                                            listchecked?.length ===
                                            cart?.cart?.cartData?.products
                                                .length
                                        }
                                        className="text-[#9D9EA2]"
                                    >
                                        Select All
                                    </Checkbox>
                                </div>
                                <div className="w-[30px] max-w-[30px]">
                                    {listchecked?.length ===
                                        cart?.cart?.cartData?.products.length ||
                                    listchecked?.length > 1 ? (
                                        <MdDeleteSweep
                                            className="text-[25px] text-red-500 cursor-pointer"
                                            onClick={() =>
                                                onhandleDelete(
                                                    "deleteAllProduct",
                                                    listchecked,
                                                )
                                            }
                                        />
                                    ) : (
                                        <MdDeleteSweep className="text-[25px] text-red-300" />
                                    )}
                                </div>
                            </div>
                        </span>
                        {!cart?.cart?.cartData?.products ||
                        cart?.cart?.cartData?.products?.length === 0 ? (
                            <div className="text-center mt-5 text-gray-400">
                                <span>Your cart is empty.</span>
                            </div>
                        ) : (
                            <div className="flex flex-col border-b lg:pb-[22px] mb:pb-3">
                                {cart?.cart?.cartData?.products?.map(
                                    (item: any, index: number) => {
                                        return (
                                            <section
                                                className="flex lg:mt-[23px] mb:mt-[15px] gap-x-4 group relative "
                                                key={index}
                                            >
                                                <Checkbox
                                                    value={item}
                                                    onChange={onChangeChecked}
                                                    checked={listchecked.includes(
                                                        item,
                                                    )}
                                                ></Checkbox>
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
                                                                        width={
                                                                            12
                                                                        }
                                                                        height={
                                                                            12
                                                                        }
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth={
                                                                            2
                                                                        }
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="lucide lucide-minus text-xs"
                                                                    >
                                                                        <path d="M5 12h14" />
                                                                    </svg>
                                                                </button>
                                                                <div className="bg-[#F4F4F4] text-xs rounded">
                                                                    {
                                                                        item.quantity
                                                                    }
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
                                                                        width={
                                                                            12
                                                                        }
                                                                        height={
                                                                            12
                                                                        }
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth={
                                                                            2
                                                                        }
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
                                                <div className="hidden group-hover:flex items-center justify-center w-[55px] max-w-[55px]">
                                                    <FaDeleteLeft
                                                        className="w-[55px] max-w-[55px] mb-2 text-red-500 text-[20px] cursor-pointer"
                                                        onClick={() =>
                                                            onhandleDelete(
                                                                "deleteOneProduct",
                                                                item,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </section>
                                        );
                                    },
                                )}
                            </div>
                        )}
                    </div>

                    {/* right */}
                    <div className="hidden lg:block">
                        <div className="w-full lg:p-6 mb:p-5 border rounded-2xl flex flex-col gap-y-[3px]">
                            <div className="flex flex-col gap-y-4">
                                <section className="flex justify-between text-sm">
                                    <span className="text-[#9D9EA2]">
                                        Subtotal{" "}
                                    </span>
                                    <p>$ {totalPriceChecked}</p>
                                </section>
                                {/* <section className="flex justify-between text-sm">
                                    <span className="text-[#9D9EA2]">
                                        Discount{" "}
                                    </span>
                                    <p>$0.0</p>
                                </section> */}
                                <section className="flex justify-between text-sm">
                                    <span className="text-[#9D9EA2]">
                                        Shipping Costs{" "}
                                    </span>
                                    <p>$50.00</p>
                                </section>
                            </div>
                            {/* voucher */}
                            <div className="flex items-center justify-between gap-x-3 *:h-12 *:border border-b py-[19px]">
                                <input
                                    type="text "
                                    placeholder="Coupon code"
                                    className="px-3 py-2 rounded-lg"
                                />
                                <button className="text-[#17AF26] font-medium bg-[#F3FBF4] whitespace-nowrap text-sm rounded-[100px] px-5 py-2">
                                    Apply Coupon
                                </button>
                            </div>
                            {/* *** */}
                            <div className="my-3">
                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow={60}
                                    className="block rounded-full bg-[#F4F4F4]"
                                >
                                    <span
                                        className="block h-[7px] rounded-full bg-[#17AF26]"
                                        style={{ width: "58%" }}
                                    />
                                </span>
                            </div>
                            {/* *** */}
                            <span className="flex mt-0.5 gap-x-[3px] items-center font-medium text-sm text-[#717378]">
                                Get Free{" "}
                                <p className="text-[#1A1E26]">Shipping</p> for
                                orders over{" "}
                                <p className="text-[#EB2606]">$100.00</p>
                            </span>
                            <a
                                href=""
                                className="font-semibold text-sm underline cursor-pointer my-1 tracking-[-0.1px]"
                            >
                                Continue Shopping
                            </a>
                            <button className="bg-[#17AF26] px-10 h-14 rounded-[100px] text-white flex my-[13px] gap-x-4 place-items-center justify-center">
                                <span>Checkout</span>|<span>$547.00</span>
                            </button>
                            {/* payment */}
                            <div className="flex flex-col gap-y-4 border-t mt-[3px] pt-[22px]">
                                <span className="tracking-[0.8px] text-[#717378] text-xs">
                                    SECURE PAYMENTS PROVIDED BY
                                </span>
                                <div className="flex items-center gap-x-3 *:cursor-pointer">
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
                    {/* delivery */}
                    <div className="w-full flex flex-col gap-y-3.5 lg:-mt-6 mb:mt-12">
                        <div className="flex justify-between lg:gap-x-6 *:w-full">
                            <span className="text-[#17AF26]">Delivery</span>
                            <span />
                            <span className="text-[#17AF26] hidden lg:block">
                                Free Returns
                            </span>
                        </div>
                        <section className="w-full flex lg:flex-row mb:flex-col lg:justify-between lg:items-start lg:gap-x-6 mb:gap-y-[22px] *:w-full lg:mt-0 mb:mt-0.5">
                            <div className="p-4 flex flex-col gap-y-3.5 border rounded-xl">
                                <img
                                    className="w-12 h-12 p-3 rounded-[50%] bg-[#F2F6F4]"
                                    src={transaction_minus}
                                    alt=""
                                />
                                <span className="lg:text-lg mb:text-base mt-0.5 text-[#1A1E26]">
                                    Order by 10pm for free next day delivery on
                                    Orders overs $100
                                </span>
                                <p className="text-[#717378] lg:text-base mb:text-sm">
                                    We deliver Monday to Saturday - excluding
                                    Holidays
                                </p>
                            </div>
                            <div className="p-4 flex flex-col lg:gap-y-3.5 mb:gap-y-4 border rounded-xl">
                                <img
                                    className="w-12 h-12 p-3 rounded-[50%] bg-[#F2F6F4]"
                                    src={box_time}
                                    alt=""
                                />
                                <span className="lg:text-lg mb:text-base lg:mt-0.5 text-[#1A1E26] lg:tracking-[0] mb:tracking-[0.1px]">
                                    Free next day delivery to stores.
                                </span>
                                <p className="text-[#717378] lg:text-base mb:text-sm">
                                    Home delivery is $4.99 for orders under $100
                                    and is FREE for all orders over $100
                                </p>
                            </div>
                            <span className="text-[#17AF26] lg:hidden  -mb-2">
                                Free Returns
                            </span>
                            <div className="p-4 flex flex-col gap-y-3.5 border rounded-xl">
                                <img
                                    className="w-12 h-12 p-3 rounded-[50%] bg-[#F2F6F4]"
                                    src={truck_time}
                                    alt=""
                                />
                                <p className="text-[#717378] lg:text-base mt-0.5 mb:text-sm leading-[29px]">
                                    30 days to return it to us for a refund. We
                                    have made returns SO EASY - you can now
                                    return your order to a store or send it with
                                    FedEx FOR FREE
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="block lg:hidden mt-[35px]">
                        <div className="w-full lg:p-6 mb:p-5 border rounded-2xl flex flex-col gap-y-[3px]">
                            <div className="flex flex-col gap-y-4">
                                <section className="flex justify-between text-sm">
                                    <span className="text-[#9D9EA2]">
                                        Subtotal{" "}
                                    </span>
                                    <p>$497.00</p>
                                </section>
                                <section className="flex justify-between text-sm">
                                    <span className="text-[#9D9EA2]">
                                        Discount{" "}
                                    </span>
                                    <p>$0.0</p>
                                </section>
                                <section className="flex justify-between text-sm">
                                    <span className="text-[#9D9EA2]">
                                        Shipping Costs{" "}
                                    </span>
                                    <p>$50.00</p>
                                </section>
                            </div>
                            {/* voucher */}
                            <div className="flex items-center justify-between gap-x-3 *:h-12 *:border border-b py-[19px]">
                                <input
                                    type="text"
                                    placeholder="Coupon code"
                                    className="lg:px-3 mb:pl-[22px] mb:w-[150px] lg:w-auto rounded-lg text-sm lg:text-base"
                                />
                                <button className="text-[#17AF26] font-medium bg-[#F3FBF4] whitespace-nowrap text-sm rounded-[100px] px-5 py-2">
                                    Apply Coupon
                                </button>
                            </div>
                            {/* *** */}
                            <div className="my-3">
                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow={60}
                                    className="block rounded-full bg-[#F4F4F4]"
                                >
                                    <span
                                        className="block h-[7px] rounded-full bg-[#17AF26]"
                                        style={{ width: "58%" }}
                                    />
                                </span>
                            </div>
                            {/* *** */}
                            <span className="flex mt-0.5 gap-x-[3px] items-center font-medium text-sm text-[#717378]">
                                Get Free{" "}
                                <p className="text-[#1A1E26]">Shipping</p> for
                                orders over{" "}
                                <p className="text-[#EB2606]">$100.00</p>
                            </span>
                            <a
                                href=""
                                className="font-semibold text-sm underline cursor-pointer my-1 tracking-[-0.1px]"
                            >
                                Continue Shopping
                            </a>
                            <button className="bg-[#C8C9CB] px-10 h-14 rounded-[100px] text-white flex my-[13px] gap-x-4 place-items-center justify-center">
                                <span>Checkout</span>|<span>$547.00</span>
                            </button>
                            {/* check out */}
                            <div className="flex flex-col gap-y-4 border-t mt-[3px] pt-[22px]">
                                <span className="tracking-[0.8px] text-[#717378] text-xs">
                                    SECURE PAYMENTS PROVIDED BY
                                </span>
                                <div className="flex items-center gap-x-3 *:cursor-pointer">
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
                </main>
            </div>
        </>
    );
};

export default CartUser;

import type { InputNumberProps, RadioChangeEvent } from "antd";
import { Col, InputNumber, Radio, Row, Slider } from "antd";
import { useState } from "react";
type Props = {
    category: [];
    onchangeCategories: Function;
    onScrollToProductList: () => void; 
};

const SideBarWeb = ({ category, onchangeCategories,onScrollToProductList  }: Props) => {
    const [valueCategory, setvalueCategory] = useState();
    const [inputValue, setInputValue] = useState(0);
    const [verifyValue, setVerifyValue] = useState(false);
    const onChangeCategory = (e: RadioChangeEvent) => {
        // console.log("radio checked", e.target.value);
        setvalueCategory(e.target.value);
    };

    const onChange: InputNumberProps["onChange"] = (newValue) => {
        setInputValue(newValue as number);
    };
    const onhandleApply = () => {
        setVerifyValue(true);
        onchangeCategories(valueCategory, inputValue, verifyValue);
        // tạo cuộn xuống productlist
        onScrollToProductList();
    };
    const onhandClearFilter = () => {
        setVerifyValue(false);
        setInputValue(0);
        setvalueCategory(undefined);
    };
    return (
        <>
            <div className="lg:block hidden py-3 mt-0.5">
                <span className="lg:text-xl tracking-[-0.4px]">Filters</span>
                {/* category */}
                <section className="flex flex-col pt-[47px] pb-6">
                    <span className="text-[#717378] text-xs tracking-[1px]">
                        PRODUCT CATEGORY
                    </span>
                    <ul className="*:gap-y-3 *:gap-x-3.5 *:tracking-[1px] pt-2.5 pb-1.5 *:flex *:items-center *:my-[9px] border-b">
                        {category?.map((item: any) => {
                            return (
                                <li className="" key={item._id}>
                                    <Radio.Group
                                        onChange={onChangeCategory}
                                        value={valueCategory}
                                    >
                                        <Radio value={item._id}>
                                            {item.name}
                                        </Radio>
                                    </Radio.Group>

                                    <span className="text-[#9D9EA2] font-light ml-[7px]">
                                        12
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </section>
                {/* price */}
                <section className="flex flex-col pr-7 pb-6 border-b">
                    <span className="text-[#717378] text-xs tracking-[1px]">
                        FILTER BY PRICE
                    </span>
                    <div className="flex justify-between *:px-2.5 my-5 *:py-1 *:bg-[#F4F4F4] *:rounded-[100px] *:text-xs">
                        {/* // <input type="range" className="h-[2px] bg-black" /> */}
                    </div>
                    <Row>
                        <Col span={12}>
                            <Slider
                                min={0}
                                max={200000}
                                onChange={onChange}
                                value={
                                    typeof inputValue === "number"
                                        ? inputValue
                                        : 0
                                }
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={1}
                                max={20}
                                style={{ margin: "0 16px" }}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                    <button
                        className="w-[103px] mt-6 h-[40px] rounded-[1000px] bg-[#17AF26] text-white"
                        onClick={onhandleApply}
                    >
                        Apply
                    </button>
                </section>
                {/* order */}
                {/* <section className="flex flex-col py-6">
                    <span className="text-[#717378] text-xs tracking-[1px]">
                        ORDER BY
                    </span>
                    <ul className="*:gap-3 py-2 *:flex *:items-center *:my-[9px] border-b">
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="radio"
                            />{" "}
                            Sale
                        </li>
                    </ul>
                </section> */}
                {/* review */}
                {/* <section className="flex flex-col">
                    <span className="text-[#717378] text-xs tracking-[1px]">
                        FILTER BY REVIEWS
                    </span>
                    <ul className="*:gap-3 pb-2 *:flex *:items-center *:my-[18px] border-b">
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="checkbox"
                            />
                            <div className="flex items-center gap-1">
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
                            </div>
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="checkbox"
                            />
                            <div className="flex items-center gap-1">
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
                            </div>
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="checkbox"
                            />
                            <div className="flex items-center gap-1">
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
                            </div>
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="checkbox"
                            />
                            <div className="flex items-center gap-1">
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
                            </div>
                        </li>
                        <li>
                            {" "}
                            <input
                                className="w-[20px] h-[20px]"
                                type="checkbox"
                            />
                            <div className="flex items-center gap-1">
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
                            </div>
                        </li>
                    </ul>
                </section> */}
                {/* clear filters */}
                <button
                    className="bg-[#F3FBF4] rounded-[100px] text-[14px] leading-[21px] text-[#17AF26] mt-5 h-10 px-8"
                    onClick={onhandClearFilter}
                >
                    Clear Filters
                </button>
            </div>
        </>
    );
};
export default SideBarWeb;

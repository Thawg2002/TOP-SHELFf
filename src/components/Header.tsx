import { logo } from "@/assets/img";
import { getAllCategories } from "@/services/categories";
import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const Header = () => {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : {};
    // console.log("user", user);
    const { data, isLoading, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
    });

    // Menu properties
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    User information
                </a>
            ),
        },
        ...(user?.role == "admin"
            ? [
                  {
                      key: "2",
                      label: (
                          <Link to="/admin" rel="noopener noreferrer">
                              Admin Page
                          </Link>
                      ),
                  },
              ]
            : []),
        {
            key: "4",
            danger: true,
            label: "Logout",
        },
    ];  
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;
    // console.log("data", data);

    return (
        // <!-- header -->
        <header>
            {/* top header */}
            <div className="w-full bg-[#05422c] lg:h-[37px] mb:h-[34px] *:text-white flex justify-center items-center *:lg:text-sm *:mb:text-xs gap-x-4">
                <span className="opacity-75 lg:w-auto mb:w-[266px] mb:truncate">
                    LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
                </span>
                <span>23 : 15 : 00</span>
            </div>
            {/* logo, search and cart */}
            <div className="w-full flex justify-center items-center border-b">
                <div className="container w-[1440px] lg:h-[76px] mb:h-[56px] flex justify-between *:flex *:items-center items-center">
                    {/* icon menu */}
                    <div className="lg:hidden mb:block translate-x-[24px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-menu"
                        >
                            <line x1={4} x2={20} y1={12} y2={12} />
                            <line x1={4} x2={20} y1={6} y2={6} />
                            <line x1={4} x2={20} y1={18} y2={18} />
                        </svg>
                    </div>
                    <Link to={"/"}>
                        <img
                            className="lg:translate-x-[64px] mb:translate-x-[-12.5px] lg:w-[167px] lg:h-[40px] mb:w-[119px] mb:h-[28px]"
                            src={logo}
                            alt=""
                        />
                    </Link>

                    {/* form desktop */}
                    <div className="mb:hidden lg:block *:h-[48px]">
                        <form className="w-[456px] flex *:h-[48px] justify-between">
                            <input
                                type="text"
                                className="border rounded-full w-[400px] px-6"
                                placeholder="Search"
                            />
                            <button className="rounded-[50%] bg-[#17af26] w-[48px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6 text-white mx-auto"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="lg:gap-x-6 mb:gap-x-4 lg:-translate-x-[60px] mb:-translate-x-[22px]">
                        {user?._id ? (
                            <>
                                <Dropdown menu={{ items }}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <span className="cursor-pointer">
                                                <FaUser />
                                            </span>
                                        </Space>
                                    </a>
                                </Dropdown>
                            </>
                        ) : (
                            <Link to={"/signin"}>
                                <span className="text-sm">Your Account</span>{" "}
                            </Link>
                        )}
                        |
                        <Link to={"/cart"}>
                            <button className="h-[24px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6 w-[24px]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                    />
                                </svg>
                                <span className="absolute bg-red-500 top-2 rounded-[50%] w-[16px] h-[16px] text-xs text-white">
                                    1
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* menu */}
            <div className="w-full mb:hidden lg:block">
                <div className="w-full flex justify-center items-center *:flex *:justify-center">
                    <div className="gap-x-[49.5px] h-[56px] items-center">
                        <Link to={"/category"}>Shop All</Link>

                        {/* {data?.categories?.map(
                            (item: ICategory, index: any) => (
                                <a href="" key={index}>
                                    {item.name}
                                </a>
                            ),
                        )} */}
                        <a href="">Blog</a>
                    </div>
                </div>
            </div>
            {/* form mobile */}
            <div className="w-full *:h-[58px] lg:hidden mb:block w-full mb-0.5">
                <form className="flex *:h-[36px] justify-center items-center gap-x-2">
                    <input
                        type="text"
                        className="border rounded-full w-[298px] px-5"
                        placeholder="Search"
                    />
                    <button className="rounded-[50%] bg-[#17af26] w-[36px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-white mx-auto"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;

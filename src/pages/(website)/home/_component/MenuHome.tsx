import React from "react";
import { Link } from "react-router-dom";

const MenuHome = () => {
    return (
        <div className="w-full mb:hidden lg:block">
            <div className="w-full flex justify-center items-center *:flex *:justify-center">
                <div className="gap-x-[49.5px] h-[56px] items-center">
                    <Link to={"/products"}>Shop All</Link>
                    <a href="#best-product-dispensary">
                        Best Product Dispensary
                    </a>
                    <a href="#comment-user">Comment User</a>
                    <a href="#how-to-order">How To Order</a>
                    <a href="#services">Services</a>
                    <a href="#what-make">What Make</a>
                    <a href="#weed-education">Weed Education</a>
                </div>
            </div>{" "}
        </div>
    );
};

export default MenuHome;

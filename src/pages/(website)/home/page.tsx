import Footer from "@/components/Footer";
import Banner from "./_component/Banner";
import BestProductDispensary from "./_component/BestProductDispensary";
import ChooseYourWeed from "./_component/ChooseYourWeed";
import CommentUser from "./_component/CommentUser";
import Services from "./_component/Services";
import HowToOrder from "./_component/HowToOrder";
import WhatMake from "./_component/WhatMake";
import Recenty from "./_component/Recenty";
import WeedEducation from "./_component/WeedEducation";
import Blog from "./_component/Blog";
import MenuHome from "./_component/MenuHome";

const HomePage = () => {
    return (
        <>
            <div>
                <MenuHome />
                <Banner />
                <Services />
                <BestProductDispensary />
                {/* ******* */}
                <CommentUser />
                <ChooseYourWeed />
                <HowToOrder />
                {/* ***** */}
                <WhatMake />
                {/* ****** */}
                {/* <Recenty /> */}
                {/* ****** */}
                {/* ########### */}
                <Blog />
                {/* END ########### */}
                {/* ********* */}
                <WeedEducation />
            </div>
        </>
    );
};

export default HomePage;

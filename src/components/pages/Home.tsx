import React, { FC } from "react";
import Hero from "../molecules/Hero";
import Prices from "../organisms/sections/Prices";
import Workeds from "../organisms/sections/Workeds";
import NavHeader from "../organisms/navs/NavHeader";
import "./../../assets/css/home.css";
import CallToAction from "../organisms/sections/CallToAction";
import Footer from "../organisms/sections/Footer";
import { Helmet } from "react-helmet";
type Props = {
    title?: string;
}

const Home: FC<Props> = ({title}) => {

    return (
        <div className="eading-normal tracking-normal text-white gradient">
            <Helmet>
                <title>{title} - Landing - page</title>
                <meta name="description" content="Landing page create with reactjs Typescript" />
            </Helmet>
            <NavHeader />
            <Hero />
            <Workeds />
            <Prices />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default Home;

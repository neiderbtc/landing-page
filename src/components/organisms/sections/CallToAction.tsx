import React from "react";
import { ReactComponent as Wave } from '../../../assets/img/call-to-action.svg'
import ButtonAction from "../../atoms/ButtonAction";
import SeparatorInSection from "../../atoms/SeparatorInSection";
import TitleSection from "../../atoms/TitleSection";
const CallToAction = () => {
    return (
        <>
            <Wave />
            <section className="container mx-auto text-center py-6 mb-12">
                <TitleSection title="Call to Action" light />
                <SeparatorInSection />
                <h3 className="my-4 text-3xl leading-tight">
                    Main Hero Message to sell yourself!
                </h3>
                <ButtonAction text="Subscribe" light />
            </section>
        </>
    );
};

export default CallToAction;

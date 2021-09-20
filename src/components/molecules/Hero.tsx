import React, {FC} from 'react';
import imageHero from '../../assets/img/hero.png';
import {ReactComponent as HeroFooter}  from '../../assets/img/hero-footer.svg';
import ButtonAction from '../atoms/ButtonAction';

const Hero: FC = () => {

    const contentHero: {question: string; title: string, description: string} = {
        question: 'What business are you?',
        title: 'Main Hero Message to sell yourself!',
        description: ' Sub-hero message, not too long and not too short. Make it just right!'
    }

    return (
        <>
        <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">{contentHero.question} </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              {contentHero.title}
            </h1>
            <p className="leading-normal text-2xl mb-8">
            {contentHero.description}             
            </p>
            <ButtonAction text="Subscribe" light />
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src={imageHero} alt="banner hero" />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
        <HeroFooter/>
    </div>
    </>
    );
};

export default Hero;
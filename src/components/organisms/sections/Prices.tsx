import React, { FC } from 'react';
import { contentPrices } from '../../../content/contentPrices';
import SeparatorInSection from '../../atoms/SeparatorInSection';
import TitleCategory from '../../atoms/TitleSection';
import CardPrice from '../../molecules/cards/CardPrice';

const Prices: FC = () => {

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <TitleCategory title="Pricing" />
        <SeparatorInSection gradient />
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          {
            contentPrices.map((item, index) => (
              <CardPrice
                key={index}
                title={item.title}
                items={item.characteristic}
                price={item.price}
                big={item.big}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Prices;
import React from 'react';
import TitleCategory from '../../atoms/TitleSection';
import { contentWorkeds } from '../../../content/contentWorkeds';
import CardWorked from '../../molecules/cards/CardWorked';
import SeparatorInSection from '../../atoms/SeparatorInSection';

const Workeds = () => {
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <TitleCategory title="Workeds" />
        <SeparatorInSection gradient/>
        {
          contentWorkeds.map((item, index) => (<CardWorked
            key={index}
            title={item.title}
            category={item.category}
            description={item.description}
            action={item.action}
          />))
        }
      </div>
    </section>
  );
};

export default Workeds;
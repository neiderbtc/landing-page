import React, { FC } from 'react';
import ButtonAction from '../../atoms/ButtonAction';
import ItemPrice from '../../atoms/ItemPrice';

type Props = {
  items: { text: string }[];
  title: string;
  price: {
    description: string;
    amount: string
  };
  big?: boolean;
}

const CardPrice: FC<Props> = ({ items, title, price, big }) => {
  return (
    <div className={`flex flex-col w-5/6  mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white ${big ? 'lg:w-1/3 sm:-mt-6 shadow-lg z-10' : 'lg:w-1/4 mt-4'}`} >
      <div className={`flex-1 bg-white ${big ? 'text-gray-800' : 'text-gray-600'} rounded-t rounded-b-none overflow-hidden shadow`}>
        <div className="p-8 text-3xl font-bold text-center border-b-4">
          {title}
        </div>
        {
          big ? (<div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>) : ''
        }
        <ul className={`w-full text-center  ${big ? 'font-bold' : 'text-sm'}`}>
          {
            items.map((item, index) => <ItemPrice key={index} text={item.text} />)
          }
        </ul>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div className={`w-full pt-6 text-3xl ${big ? 'text-gray-800' : 'text-gray-600'} font-bold text-center`}>
          {price.amount} USD
          <span className="text-base">/{price.description}</span>
        </div>
        <div className="flex items-center justify-center">
          <ButtonAction text="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
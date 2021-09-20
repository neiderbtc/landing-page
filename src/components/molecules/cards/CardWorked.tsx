import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import ButtonAction from '../../atoms/ButtonAction';

type Props = {
    category: string;
    title: string;
    description: string;
    action: {
        to: string;
        text: string;
    }

}

const CardWorked: FC<Props> = ({category, title, description, action}) => {
    return (
<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link
                to="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  {category}
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  {title}
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                    {description}
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
               <ButtonAction text={action.text} />
              </div>
            </div>
          </div>
    );
};

export default CardWorked;
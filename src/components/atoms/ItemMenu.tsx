import React, { FC } from 'react';
import { Link } from 'react-router-dom';
type Props = {
    to: string;
    text: string;
    active?: boolean;
}

const ItemMenu: FC<Props> = ({ to, text, active }) => {
    return (
        <li className="mr-3">
            <Link
                to={to}
                className={`${active && 'font-bold'}  inline-block text-black no-underline  hover:text-gray-800 hover:text-underline py-2 px-4`}
            >{text}
            </Link>
        </li>
    );
};

export default ItemMenu;
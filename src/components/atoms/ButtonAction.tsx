import React, { FC } from 'react';

type Props = {
    text: string;
    light?: boolean;
}

const ButtonAction: FC<Props> = ({ text, light }) => {
    return (
        <button className={`${light ? 'text-black bg-white' : 'gradient text-white' }  mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}>
            {text}
        </button>
    );
};

export default ButtonAction;
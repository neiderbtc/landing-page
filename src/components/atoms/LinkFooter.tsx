import React, { FC } from 'react'
import { Link } from "react-router-dom";

type Props = {
    text: string;
    to: string;
}
const LinkFooter: FC<Props> = ({ text }) => {
    return (
        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
            <Link
                to="#"
                className="no-underline hover:underline text-gray-800 hover:text-pink-500">
                {text}
            </Link>
        </li>
    )
}


export default LinkFooter;
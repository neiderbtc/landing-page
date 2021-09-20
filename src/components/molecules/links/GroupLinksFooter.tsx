import React, { FC } from 'react';
import LinkFooter from '../../atoms/LinkFooter';

type Props = {
    title: string;
    links: { to: string; text: string }[]
}

const GroupLinksFooter: FC<Props> = ({ title, links }) => {
    return (
        <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">{title}</p>
            <ul className="list-reset mb-6">
                {
                    links.map((item, index) => (
                        <LinkFooter
                            key={index}
                            text={item.text}
                            to={item.to}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
export default GroupLinksFooter;
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { contentFooter } from '../../../content/contentFooter';
import GroupLinksFooter from '../../molecules/links/GroupLinksFooter';

const Footer: FC = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <Link to="·" className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                            LANDING
                        </Link>
                    </div>
                    {
                        contentFooter.map((item, index) => (
                            <GroupLinksFooter
                                key={index}
                                title={item.title}
                                links={item.links}
                            />
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
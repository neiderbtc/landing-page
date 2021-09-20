import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { contentItemsMenu } from '../../../content/contentItemsMenu';
import ButtonAction from '../../atoms/ButtonAction';
import ItemMenu from '../../atoms/ItemMenu';

const NavHeader: FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <nav id="header" className="fixed w-full z-30 top-0 text-white bg-white shadow-lg">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <Link className="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="#">
              LANDING
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button onClick={() => setIsOpen(!isOpen)}
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? 'show' : 'hidden' } w-full flex-grow lg:flex lg:items-center lg:w-auto  mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}>
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {
                contentItemsMenu.map((item, index) => <ItemMenu
                  key={index}
                  to={item.to}
                  text={item.text}
                  active={item.active} />
                )
              }
            </ul>
            <ButtonAction text="action" />
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
  );
};

export default NavHeader;
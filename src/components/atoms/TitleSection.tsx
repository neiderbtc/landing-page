import React, { FC } from 'react';

type Props = {
  title: string,
  light?: boolean
}

const TitleSection: FC<Props> = ({ title, light }) => {
  return (
    <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center ${light ? 'text-white' : 'text-gray-800'}`}>
      {title}
    </h1>
  );
};

export default TitleSection;
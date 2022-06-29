import React from 'react';

import { AtomButton } from '../atoms/AtomButton';
import { AtomTitle } from '../atoms/AtomTitle';

type MoleculePostCardProps = {
  postTitle: string;
  navigateToPost: () => void;
};

export const MoleculePostCard: React.FC<MoleculePostCardProps> = ({
  postTitle,
  navigateToPost,
}) => {
  return (
    <div
      className="w-full relative sm:w-[49%] md:w-[32%] hover:scale-105 hover:border-imob-orange-300 lg:w-[270px] border group hover:bg-gray-100 flex items-center flex-col justify-center shadow rounded bg-white px-2  h-28 hover:shadow-lg transition-all hover:justify-start  ease"
      onClick={navigateToPost}
    >
      <AtomTitle className="text-imob-blue-900">{postTitle}</AtomTitle>
      <AtomButton className="bg-imob-orange-500 text-imob-orange-100 bottom-2 group-hover:block hover:bg-imob-orange-600 absolute hidden w-20 h-8 transition-all rounded">
        Ler mais
      </AtomButton>
    </div>
  );
};

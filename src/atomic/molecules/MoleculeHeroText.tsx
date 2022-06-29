import React from 'react';

import { AtomText } from '../atoms/AtomText';

export const MoleculeHeroText: React.FC = () => {
  return (
    <aside>
      <AtomText className="text-imob-blue-500 text-3xl font-extrabold">
        Bem vindo ao nosso Blog
      </AtomText>
      <AtomText className="text-imob-orange-500 text-2xl font-black">ImobBlog</AtomText>
      <AtomText className="text-imob-orange-400 text-lg font-medium">
        Sua melhor fonte de noticias
      </AtomText>
    </aside>
  );
};

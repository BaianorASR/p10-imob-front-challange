import { GithubLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from 'phosphor-react';
import React from 'react';

import { AtomText } from '../atoms/AtomText';

export const MoleculeFooterSocialMedias: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-2 mb-4">
      <AtomText className="font-normal">Siga-nos nas redes sociais</AtomText>
      <div className="flex gap-1">
        <LinkedinLogo size={28} weight="thin" />
        <GithubLogo size={28} weight="thin" />
        <YoutubeLogo size={28} weight="thin" />
        <InstagramLogo size={28} weight="thin" />
      </div>
    </div>
  );
};

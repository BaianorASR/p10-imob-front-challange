import { GithubLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from 'phosphor-react';
import React from 'react';

import { AtomSocial } from '../atoms/AtomSocial';
import { AtomText } from '../atoms/AtomText';

export const MoleculeFooterSocialMedias: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-2 mb-4">
      <AtomText className="font-normal">Siga-nos nas redes sociais</AtomText>
      <div className="flex gap-1">
        <AtomSocial
          IconComponent={LinkedinLogo}
          linkTo="https://www.linkedin.com/in/baianorasr/"
        />
        <AtomSocial IconComponent={GithubLogo} linkTo="https://github.com/BaianorASR" />
        <AtomSocial
          IconComponent={YoutubeLogo}
          linkTo="https://www.youtube.com/channel/UC4vGHhgDZax_W8A7GrSpuBw"
        />
        <AtomSocial
          IconComponent={InstagramLogo}
          linkTo="https://www.instagram.com/baianorasr/"
        />
      </div>
    </div>
  );
};

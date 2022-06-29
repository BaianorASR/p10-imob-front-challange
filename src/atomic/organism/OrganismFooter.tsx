import Image from 'next/image';
import React from 'react';

import { Container } from '../../layout/container';
import { AtomText } from '../atoms/AtomText';
import { MoleculeFooterInfos } from '../molecules/MoleculeFooterInfos';
import { MoleculeFooterSocialMedias } from '../molecules/MoleculeFooterSocialMedias';

export const OrganismFooter: React.FC = () => {
  return (
    <footer className="bg-imob-blue-200 flex flex-col justify-between mx-auto text-xs font-light shadow-inner">
      <Container className="px-2 pt-2">
        <div className="sm:flex-row sm:justify-between sm:w-full flex flex-col items-center">
          <Image
            src="/images/logo-imob.png"
            width={200}
            height={35}
            className=""
            layout="fixed"
            alt="Logomarca da empresa Imob"
          />
          <div className="md:flex-row md:ml-10 md:justify-around flex flex-col w-full">
            <MoleculeFooterSocialMedias />
            <MoleculeFooterInfos />
          </div>
        </div>
        <AtomText className="mt-4 text-center">
          © 2022 - Feito orgulhosamente por Baianor
        </AtomText>
      </Container>
    </footer>
  );
};

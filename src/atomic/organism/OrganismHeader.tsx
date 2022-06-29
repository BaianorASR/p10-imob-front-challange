import Image from 'next/image';
import React, { FC } from 'react';

import { Container } from '../../layout/container';
import { MoleculeDropdown } from '../molecules/MoleculeDropdown';

export const OrganismHeader: FC = () => {
  return (
    <header className="h-14 fixed top-0 z-10 w-full bg-white border-b">
      <Container className="flex items-center justify-between h-full px-2">
        <Image
          src="/images/logoimob.png"
          alt="logoimob"
          width={200}
          height={35}
          layout="fixed"
        />
        <div className="flex items-center gap-4">
          {/* <p className=" flex">75 9922828-8282</p> */}
          <MoleculeDropdown />
        </div>
      </Container>
    </header>
  );
};

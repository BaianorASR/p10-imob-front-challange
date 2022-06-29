import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { Container } from '../../layout/container';
import { MoleculeDropdown } from '../molecules/MoleculeDropdown';
import { MoleculePhone } from '../molecules/MoleculePhone';

export const OrganismHeader: FC = () => {
  const router = useRouter();

  const handleHeaderLogoNavigation = () => {
    if (router.pathname !== '/') router.push('/');
  };

  return (
    <header className="h-14 fixed top-0 z-10 w-full bg-white border-b">
      <Container className="flex items-center justify-between h-full px-2">
        <Image
          src="/images/logoimob.png"
          alt="logoimob"
          width={200}
          height={35}
          layout="fixed"
          onClick={handleHeaderLogoNavigation}
          className="cursor-pointer"
        />
        <div className="flex items-center gap-4">
          <MoleculePhone />
          <MoleculeDropdown />
        </div>
      </Container>
    </header>
  );
};

import Image from 'next/image';
import React, { FC } from 'react';

import { MoleculeDropdown } from '../molecules/MoleculeDropdown';

export const OrganismHeader: FC = () => {
  return (
    <header className="h-14 fixed top-0 w-full bg-white border-b">
      <div className="container flex items-center justify-between h-full px-2 mx-auto">
        <div className="flex w-[200px]">
          <Image
            src="/images/logoimob.png"
            alt="logoimob"
            width={200}
            height={35}
            layout="fixed"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* <p className=" flex">75 9922828-8282</p> */}
          <MoleculeDropdown />
        </div>
      </div>
    </header>
  );
};

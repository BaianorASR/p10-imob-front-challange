import Image from 'next/image';
import React from 'react';

import { MoleculeDropdown } from '../molecules/MoleculeDropdown';

export function OrganismHeader() {
  return (
    <header className="h-14 border">
      <div className="flex mx-auto items-center border h-full justify-between max-w-6xl px-2">
        <div className="flex w-[200px]">
          <Image
            src="/images/logoimob.png"
            alt="logoimob"
            width={200}
            height={35}
            layout="fixed"
          />
        </div>
        <div className="flex gap-4 items-center">
          <p className=" flex">75 9922828-8282</p>
          <MoleculeDropdown />
        </div>
      </div>
    </header>
  );
}

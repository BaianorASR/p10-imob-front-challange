import { Phone } from 'phosphor-react';
import React from 'react';

import { AtomText } from '../atoms/AtomText';

export const MoleculePhone: React.FC = () => {
  return (
    <a
      className="text-imob-blue-900 sm:text-sm flex items-center gap-1 text-xs cursor-pointer"
      href={`https://api.whatsapp.com/send?phone=5511998888888&text=Hi.`}
      target="_blank"
      rel="noreferrer"
    >
      <Phone size={24} weight="thin" className="text-imob-orange-900" />
      <AtomText className="sm:flex hidden">(75) 9228-0529</AtomText>
    </a>
  );
};

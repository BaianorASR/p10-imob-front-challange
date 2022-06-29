import React from 'react';

import { AtomText } from '../atoms/AtomText';

export const MoleculeFooterInfos: React.FC = () => {
  return (
    <div className="flex justify-between md:w-[60%] sm:px-4">
      <div className=" flex flex-col gap-1">
        <AtomText>Termos e condições</AtomText>
        <AtomText>Contato</AtomText>
        <AtomText>Trabalhe Conosco</AtomText>
        <AtomText>Informações de seguros</AtomText>
        <AtomText>Privacidade</AtomText>
      </div>
      <div className=" flex flex-col gap-1">
        <AtomText>Sobre</AtomText>
        <AtomText>Atendimento</AtomText>
        <AtomText>Vire membro</AtomText>
        <AtomText>Santaluz, Bahia</AtomText>
        <AtomText>4002 8022</AtomText>
      </div>
    </div>
  );
};

import Image from 'next/image';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';

export const OrganismFooter: React.FC = () => {
  return (
    <footer className="bg-imob-blue-500 bg-opacity-30 flex flex-col justify-between mx-auto text-xs font-light border">
      <div className="container px-2 pt-2">
        <div className="flex flex-col items-center">
          <div className="">
            <Image
              src="/images/logo-imob.png"
              width={200}
              height={35}
              className=""
              layout="fixed"
              alt="Logomarca da empresa Imob"
            />
          </div>

          <div className="flex flex-col items-center mt-2 mb-4">
            <p>Siga-nos nas redes sociais</p>
            <div className="flex gap-1">
              <LinkedinLogo size={28} weight="thin" />
              <GithubLogo size={28} weight="thin" />
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className=" flex flex-col gap-1">
              <p>Termos e condições</p>
              <p>Contato</p>
              <p>Trabalhe Conosco</p>
              <p>Informações de seguros</p>
              <p>Privacidade</p>
            </div>
            <div className=" flex flex-col gap-1">
              <p>Termos e condições</p>
              <p>Contato</p>
              <p>Trabalhe Conosco</p>
              <p>Informações de seguros</p>
              <p>Privacidade</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center">© 2022 - Feito orgulhosamente por Baianor</p>
      </div>
    </footer>
  );
};

// <footer className="bg-imob-blue-500 bg-opacity-30 flex flex-col justify-between mx-auto text-xs font-light border">
// <div className="container">
//   <div className="flex justify-between">
//     <div className="">
//       <Image
//         src="/images/logo-imob.png"
//         width={200}
//         height={35}
//         className=""
//         layout="fixed"
//         alt="Logomarca da empresa Imob"
//       />
//     </div>

//     <div className="flex flex-col items-center">
//       <p>Siga-nos nas redes sociais</p>
//       <div className="flex gap-1">
//         <LinkedinLogo size={28} weight="thin" />
//         <GithubLogo size={28} weight="thin" />
//       </div>
//     </div>

//     <div className=" flex flex-col gap-1">
//       <p>Termos e condições</p>
//       <p>Contato</p>
//       <p>Trabalhe Conosco</p>
//       <p>Informações de seguros</p>
//       <p>Privacidade</p>
//     </div>
//   </div>

//   <p className="text-center">© 2022 - Feito orgulhosamente por Baianor</p>
// </div>
// </footer>

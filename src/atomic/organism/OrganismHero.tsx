import React from 'react';

export const OrganismHero: React.FC = () => {
  return (
    <div className="bg-white shadow">
      <div className="mt-14 container px-2 py-4 mx-auto">
        <p className="">
          <span className="text-imob-blue-500 text-3xl font-extrabold">
            Bem vindo ao nosso Blog
          </span>
          <br />
          <span className="text-imob-orange-500 text-2xl font-black">ImobBlog</span>
          <br />
          <span className="text-imob-orange-400 text-lg font-medium">
            Sua melhor fonte de noticias
          </span>
        </p>
      </div>
    </div>
  );
};

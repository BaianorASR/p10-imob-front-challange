import React from 'react';

type AtomButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export const AtomTitle: React.FC<AtomButtonProps> = ({ children, className }) => {
  return <h1 className={`${className} text-md font-bold`}>{children}</h1>;
};

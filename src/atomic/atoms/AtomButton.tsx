import React from 'react';

type AtomButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export const AtomButton: React.FC<AtomButtonProps> = ({ children, className }) => {
  return <button className={`${className}`}>{children}</button>;
};

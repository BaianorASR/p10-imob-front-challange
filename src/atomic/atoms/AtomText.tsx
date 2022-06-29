import React from 'react';

type AtomTextProps = {
  children: React.ReactNode;
  className?: string;
};

export const AtomText: React.FC<AtomTextProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

import { CircleNotch } from 'phosphor-react';
import React from 'react';

export const MoleculeLoadingPostDetails: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircleNotch size={100} className="animate-spin text-imob-orange-500" />
    </div>
  );
};

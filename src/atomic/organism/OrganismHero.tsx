import React from 'react';

import { Container } from '../../layout/container';
import { MoleculeHeroText } from '../molecules/MoleculeHeroText';

export const OrganismHero: React.FC = () => {
  return (
    <div className="bg-white shadow">
      <Container className="mt-14 px-2 py-4">
        <MoleculeHeroText />
      </Container>
    </div>
  );
};

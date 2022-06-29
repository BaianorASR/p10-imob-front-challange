import React from 'react';

import { IPost } from '../../interfaces/IPost';
import { AtomText } from '../atoms/AtomText';
import { AtomTitle } from '../atoms/AtomTitle';
import { MoleculeShimmerPostImage } from '../molecules/MoleculeShimmerPostImage';

type OrganismPostDetailsProps = {
  post: IPost;
};

export const OrganismPostDetails: React.FC<OrganismPostDetailsProps> = ({
  post: { body, title },
}) => {
  return (
    <div className="mt-14 sm:px-0 flex flex-col items-center gap-8 px-2">
      <AtomTitle className="text-imob-blue-500 md:text-5xl mt-10 text-3xl font-black">
        {title}
      </AtomTitle>
      <MoleculeShimmerPostImage postTitle={title} />
      <AtomText className="text-xl font-light">{body}</AtomText>
    </div>
  );
};

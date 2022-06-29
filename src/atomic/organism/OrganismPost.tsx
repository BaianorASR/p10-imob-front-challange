import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { IPost } from '../../interfaces/IPost';
import { MoleculePostCard } from '../molecules/MoleculePostCard';

type OrganismPostProps = {
  post: IPost;
};

export const OrganismPost: FC<OrganismPostProps> = ({ post }) => {
  const { push } = useRouter();

  return (
    <MoleculePostCard
      postTitle={post.title}
      navigateToPost={() => push(`/post/${post.id}`)}
    />
  );
};

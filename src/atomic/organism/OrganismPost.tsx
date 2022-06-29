import Link from 'next/link';
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
    <Link href={`/post/${post.id}`}>
      <MoleculePostCard
        postTitle={post.title}
        navigateToPost={() => push(`/post/${post.id}`)}
      />
    </Link>
  );
};

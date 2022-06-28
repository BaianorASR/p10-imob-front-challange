import Link from 'next/link';
import React, { FC } from 'react';

import { IPost } from '../../interfaces/IPost';

type OrganismPostProps = {
  post: IPost;
};

export const OrganismPost: FC<OrganismPostProps> = ({ post }) => {
  return (
    <Link href="/post/1">
      <div className="w-[270px] border flex items-center justify-center shadow rounded bg-white px-2  h-28 hover:shadow-lg">
        <h1 className="font-bold">{post.title}</h1>
      </div>
    </Link>
  );
};

import React, { FC } from 'react';

import type { IPost } from '../../interfaces/IPost';
import { OrganismPost } from '../organism/OrganismPost';

type TemplatePostsProps = {
  arrayOfPosts: IPost[];
};

export const TemplatePosts: FC<TemplatePostsProps> = ({ arrayOfPosts }) => {
  return (
    <section className=" sm:p-0 container flex flex-col items-center gap-4 p-3 mx-auto my-6">
      <h1 className="text-xl font-bold text-center">Últimos Posts</h1>
      <div className=" flex flex-wrap justify-center gap-3">
        {arrayOfPosts.map(post => (
          <OrganismPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

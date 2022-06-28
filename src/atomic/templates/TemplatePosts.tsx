import React, { FC } from 'react';

import type { IPost } from '../../interfaces/IPost';
import { OrganismPost } from '../organism/OrganismPost';

type TemplatePostsProps = {
  arrayOfPosts: IPost[];
};

export const TemplatePosts: FC<TemplatePostsProps> = ({ arrayOfPosts }) => {
  return (
    <section className="flex bg-gray-200">
      <div className="flex mx-auto border border-red-600 max-w-[1920px] px-2 flex-wrap gap-3 justify-start">
        {arrayOfPosts.map(post => (
          <OrganismPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

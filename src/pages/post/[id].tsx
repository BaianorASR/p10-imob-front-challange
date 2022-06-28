import type { NextPage } from 'next';
import React from 'react';

import { useRequest } from '../../hooks/useSWR';
import type { IPost } from '../../interfaces/IPost';

type PostDetailsProps = {
  id: number;
};

const PostDetails: NextPage<PostDetailsProps> = ({ id }) => {
  const { data } = useRequest<IPost[]>({
    url: `https://jsonplaceholder.typicode.com/posts`,
    params: { id },
  });

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-imob-blue text-lg font-bold">{data[0].title}</h1>
      <p className="text-sm">{data[0].body}</p>
    </div>
  );
};

export default PostDetails;

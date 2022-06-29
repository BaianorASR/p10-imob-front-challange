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
    <div className="container flex flex-col h-screen">
      <div className="gap-14 flex flex-col p-2">
        <h1 className="text-imob-blue-500 mt-10 text-3xl font-black">{data[0].title}</h1>
        <p className="text-xl font-light">{data[0].body}</p>
      </div>
    </div>
  );
};

export default PostDetails;

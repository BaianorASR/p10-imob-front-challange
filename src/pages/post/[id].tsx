import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { useRequest } from '../../hooks/useSWR';
import type { IPost } from '../../interfaces/IPost';

type PostDetailsProps = {
  id: number;
};

const PostDetails: NextPage<PostDetailsProps> = ({ id }) => {
  const { query } = useRouter();

  const { data } = useRequest<IPost>({
    url: `https://jsonplaceholder.typicode.com/posts/${query.id}`,
  });

  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className="container flex flex-col h-screen">
      <div className="gap-14 flex flex-col p-2">
        <h1 className="text-imob-blue-500 mt-10 text-3xl font-black">{data.title}</h1>
        <p className="text-xl font-light">{data.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;

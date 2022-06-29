import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { MoleculeLoadingPostDetails } from '../../atomic/molecules/MoleculeLoadingPostDetails';
import { OrganismPostDetails } from '../../atomic/organism/OrganismPostDetails';
import { useRequest } from '../../hooks/useSWR';
import type { IPost } from '../../interfaces/IPost';
import { Container } from '../../layout/container';

const PostDetails: NextPage = () => {
  const { query } = useRouter();
  const { data } = useRequest<IPost>({
    url: `https://jsonplaceholder.typicode.com/posts/${query.id}`,
  });

  if (!data) return <MoleculeLoadingPostDetails />;

  return (
    <Container className="h-screen">
      <OrganismPostDetails post={data} />
    </Container>
  );
};

export default PostDetails;

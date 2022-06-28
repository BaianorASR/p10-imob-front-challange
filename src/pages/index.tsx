import type { GetStaticProps, NextPage } from 'next';

import postAPI from '../services/postAPI';

const Home: NextPage = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await postAPI.get('');

  return {
    props: {
      posts: data,
    },
  };
};

export default Home;

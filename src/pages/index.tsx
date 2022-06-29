import type { GetStaticProps, NextPage } from 'next';

import { OrganismHero } from '../atomic/organism/OrganismHero';
import { TemplatePosts } from '../atomic/templates/TemplatePosts';
import type { IPost } from '../interfaces/IPost';
import postAPI from '../services/postAPI';

type HomeProps = {
  arrayOfPosts: IPost[];
};

const Home: NextPage<HomeProps> = ({ arrayOfPosts }) => {
  return (
    <div>
      <OrganismHero />
      <TemplatePosts arrayOfPosts={arrayOfPosts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await postAPI.get('');

  return {
    props: {
      arrayOfPosts: data,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

export default Home;

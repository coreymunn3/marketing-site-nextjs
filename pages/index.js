import Head from 'next/head';
import { homePageSection1 } from '../data';

import { Navbar, InfoSection } from '../components';

const HomePage = (props) => {
  const { homePageSection1 } = props;
  return (
    <div>
      <Navbar />
      <InfoSection lightBg={false} imgStart={false} {...homePageSection1} />
    </div>
  );
};

export default HomePage;

export function getStaticProps() {
  return {
    props: {
      homePageSection1: homePageSection1,
    },
  };
}

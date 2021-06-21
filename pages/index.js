import Head from 'next/head';
import { homePageSection1 } from '../data';

import { Navbar, InfoSection } from '../components';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <InfoSection lightBg={false} imgStart={false} {...homePageSection1} />
    </div>
  );
};

export default HomePage;

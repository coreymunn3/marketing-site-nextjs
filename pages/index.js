import Head from 'next/head';
import {
  homePageSection1,
  homePageSection2,
  homePageSection3,
  footerData,
} from '../data';

import { Navbar, InfoSection, Footer } from '../components';

const HomePage = (props) => {
  const { homePageSection1, homePageSection2, homePageSection3, footerData } =
    props;
  return (
    <div>
      <Navbar />
      <InfoSection {...homePageSection1} />
      <InfoSection {...homePageSection2} />
      <InfoSection {...homePageSection3} />
      <Footer data={footerData} />
    </div>
  );
};

export default HomePage;

export function getStaticProps() {
  return {
    props: {
      homePageSection1,
      homePageSection2,
      homePageSection3,
      footerData,
    },
  };
}

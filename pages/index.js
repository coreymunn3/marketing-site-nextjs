import Head from 'next/head';
import {
  homePageSection1,
  homePageSection2,
  homePageSection3,
  footerData,
  pricingData,
} from '../data';

import { Navbar, InfoSection, Footer, Pricing } from '../components';

const HomePage = (props) => {
  const {
    homePageSection1,
    homePageSection2,
    homePageSection3,
    footerData,
    pricingData,
  } = props;
  return (
    <div>
      <Navbar />
      <InfoSection {...homePageSection1} />
      <InfoSection {...homePageSection2} />
      <InfoSection {...homePageSection3} />
      <Pricing data={pricingData} />
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
      pricingData,
    },
  };
}

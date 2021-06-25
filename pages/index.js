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
    <>
      <Navbar />
      <InfoSection {...homePageSection1} name='section-home' />
      <InfoSection {...homePageSection2} />
      <InfoSection {...homePageSection3} name='section-services' />
      <Pricing data={pricingData} name='section-pricing' />
      <Footer data={footerData} />
    </>
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

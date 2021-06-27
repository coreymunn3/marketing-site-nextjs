import Head from 'next/head';
import { Fragment, useState } from 'react';
import {
  homePageSection1,
  homePageSection2,
  homePageSection3,
  footerData,
  pricingData,
} from '../data';

import { Navbar, InfoSection, Footer, Pricing, Modal } from '../components';

const HomePage = (props) => {
  const {
    homePageSection1,
    homePageSection2,
    homePageSection3,
    footerData,
    pricingData,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <Navbar handleOpenModal={handleOpenModal} />
      <InfoSection {...homePageSection1} name='section-home' />
      <InfoSection {...homePageSection2} />
      <InfoSection {...homePageSection3} name='section-services' />
      <Pricing data={pricingData} name='section-pricing' />
      <Footer data={footerData} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal} />
    </Fragment>
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

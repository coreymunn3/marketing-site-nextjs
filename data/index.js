import Theme from '../styles/defaultTheme';

export const homePageSection1 = {
  lightBg: false,
  imgStart: true,
  topLine: 'Marketing Agency',
  headline: 'Lead Generation Specialist for Online Businesses',
  description:
    'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
  buttonLabel: 'Get Started!',
  src: '/images/business-goals.svg',
  alt: 'alt text',
  svgBg: Theme.colors.offWhite,
  svgColor: Theme.colors.background,
};

export const homePageSection2 = {
  lightBg: true,
  imgStart: false,
  topLine: 'Marketing Agency',
  headline: 'Lead Generation Specialist for Online Businesses',
  description:
    'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
  buttonLabel: 'Get Started!',
  src: '/images/business-goals.svg',
  alt: 'alt text',
  svgBg: Theme.colors.background,
  svgColor: Theme.colors.offWhite,
};

export const homePageSection3 = {
  lightBg: false,
  imgStart: true,
  topLine: 'Marketing Agency',
  headline: 'Lead Generation Specialist for Online Businesses',
  description:
    'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
  buttonLabel: 'Get Started!',
  src: '/images/business-goals.svg',
  alt: 'alt text',
  svgBg: Theme.colors.primaryLight,
  svgColor: Theme.colors.background,
};

export const footerData = [
  {
    title: 'About Us',
    links: [
      'How It Works',
      'Testimonials',
      'Careers',
      'Investors',
      'Terms of Service',
    ],
  },
  {
    title: 'Contact Us',
    links: [
      'How It Works',
      'Testimonials',
      'Careers',
      'Investors',
      'Terms of Service',
    ],
  },
  {
    title: 'Community',
    links: [
      'How It Works',
      'Testimonials',
      'Careers',
      'Investors',
      'Terms of Service',
    ],
  },
];

export const pricingData = [
  {
    plan: 'Starter',
    planLevel: 1,
    cost: '9.99',
    planTerm: 'Per Month',
    features: ['3 Accounts', 'Up To 1k Spend', 'Targeted Analytics'],
  },
  {
    plan: 'Business',
    planLevel: 2,
    cost: '49.99',
    planTerm: 'Per Month',
    features: ['25 Accounts', 'Up To 100k Spend', 'Lead Gen Analytics'],
  },
  {
    plan: 'Enterprise',
    planLevel: 3,
    cost: '1,000+',
    planTerm: 'Per Month',
    features: ['Unlimited Accounts', 'Unlimited Spend', '24/7 Support'],
  },
];

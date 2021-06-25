import Theme from '../styles/defaultTheme';

export const homePageSection1 = {
  lightBg: false,
  imgStart: true,
  topLine: 'Who We Are',
  headline: 'Industry Leading Digital Marketing',
  description:
    'Through branding, digital marketing and public relations we help organizations of all sizes compete and win with expert strategy, powerful creative and award-winning websites, campaigns and digital experiences.',
  buttonLabel: 'Get Started!',
  src: '/images/digital-marketing.svg',
  alt: 'digital marketing',
  svgBg: Theme.colors.offWhite,
  svgColor: Theme.colors.background,
};

export const homePageSection2 = {
  lightBg: true,
  imgStart: false,
  topLine: 'Our Advantage',
  headline: 'Lead Generation Specialists Working for You',
  description:
    'We go the extra mile to help our clients generated leads and convert new clients & grow revenue from existing clients.',

  buttonLabel: 'Get Started!',
  src: '/images/business-goals.svg',
  alt: 'lead generation',
  svgBg: Theme.colors.background,
  svgColor: Theme.colors.offWhite,
};

export const homePageSection3 = {
  lightBg: false,
  imgStart: true,
  topLine: 'What We Do',
  headline: 'Best In Class Services',
  description:
    'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
  buttonLabel: 'Get Started!',
  src: '/images/services.svg',
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
    buttonText: 'Choose Plan',
  },
  {
    plan: 'Business',
    planLevel: 2,
    cost: '49.99',
    planTerm: 'Per Month',
    features: ['25 Accounts', 'Up To 100k Spend', 'Lead Gen Analytics'],
    buttonText: 'Choose Plan',
  },
  {
    plan: 'Enterprise',
    planLevel: 3,
    cost: '1,000+',
    planTerm: 'Per Month',
    features: ['Unlimited Accounts', 'Unlimited Spend', '24/7 Support'],
    buttonText: 'Contact Us',
  },
];

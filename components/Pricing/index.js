import {
  PricingSection,
  PricingHeading,
  PricingCardContainer,
  PricingCard,
  CardBody,
  CardIcon,
  CardCost,
  CardPlan,
  CardLength,
  CardFeatures,
  CardFeature,
} from './Pricing.elements';
import { Button } from '../../styles/globals';
import { FaUser, FaUsers, FaUserTie } from 'react-icons/fa';
import Divider from '../DividerSVG';
import theme from '../../styles/defaultTheme';

const index = ({ data, name }) => {
  return (
    <PricingSection name={name}>
      <PricingHeading>Our Pricing</PricingHeading>
      <PricingCardContainer>
        {data.map((pricingCard) => (
          <PricingCard key={pricingCard.plan}>
            <CardBody>
              <CardIcon>
                {pricingCard.planLevel === 1 && <FaUser fontSize='3rem' />}
                {pricingCard.planLevel === 2 && <FaUsers fontSize='3rem' />}
                {pricingCard.planLevel === 3 && <FaUserTie fontSize='3rem' />}
              </CardIcon>
              <CardPlan>{pricingCard.plan}</CardPlan>
              <CardCost>${pricingCard.cost}</CardCost>
              <CardLength>{pricingCard.planTerm}</CardLength>
              <CardFeatures>
                {pricingCard.features.map((feature) => (
                  <CardFeature key={feature}>{feature}</CardFeature>
                ))}
              </CardFeatures>
              <Button primary>{pricingCard.buttonText}</Button>
            </CardBody>
          </PricingCard>
        ))}
      </PricingCardContainer>
      <Divider
        svgColor={theme.colors.primaryLight}
        svgBg={theme.colors.background}
      />
    </PricingSection>
  );
};

export default index;

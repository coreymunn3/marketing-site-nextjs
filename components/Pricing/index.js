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

const index = ({ data }) => {
  return (
    <PricingSection>
      <PricingHeading>Our Pricing</PricingHeading>
      <PricingCardContainer>
        {data.map((pricingCard) => (
          <PricingCard>
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
                  <CardFeature>{feature}</CardFeature>
                ))}
              </CardFeatures>
              <Button primary>Choose Plan</Button>
            </CardBody>
          </PricingCard>
        ))}
      </PricingCardContainer>
    </PricingSection>
  );
};

export default index;

import styled from 'styled-components';

export const PricingSection = styled.div`
  padding-bottom: 250px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primaryLight};
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

export const PricingHeading = styled.h2`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const PricingCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const PricingCard = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 4px;
  padding: 2rem;
  width: 250px;
  height: 500px;
  margin: 0 10px;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    witdh: 90%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
`;

export const CardIcon = styled.div`
  margin: 24px 0;
`;

export const CardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const CardCost = styled.h4`
  font-size: 40px;
`;

export const CardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const CardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const CardFeature = styled.li`
  margin-bottom: 10px;
`;

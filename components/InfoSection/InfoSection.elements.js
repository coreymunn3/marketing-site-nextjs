import styled from 'styled-components';

export const InfoSec = styled.section`
  color: #fff;
  padding-top: 50px;
  padding-bottom: 250px;
  background: ${(props) =>
    props.lightBg
      ? props.theme.colors.offWhite
      : props.theme.colors.background};

  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 100px 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15 -15 -15;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${(props) => (props.imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0, 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 15%;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const TopLine = styled.div`
  color: ${(props) =>
    props.lightTopLine
      ? props.theme.colors.offGray
      : props.theme.colors.primary};
  font-size: 1.2rem;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.1;
  color: ${(props) =>
    props.lightText
      ? props.theme.colors.offWhite
      : props.theme.colors.background};
`;

export const Subtitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  line-height: 24px;
  font-weight: lighter;
  color: ${(props) =>
    props.lightTextDesc
      ? props.theme.colors.offGray
      : props.theme.colors.background};
`;

export const ImgWrapper = styled.div`
  max-width: 550px;
  margin-right: 30px;
  display: flex;
  justify-content: ${(props) => (props.start ? 'flex-start' : 'flex-end')};
`;

export const StyledImg = styled.img`
  border: 0;
  height: 100%;
  max-width: 100%;
  vertical-align: 'middle';
  display: inline-block;
  max-height: 500px;
`;

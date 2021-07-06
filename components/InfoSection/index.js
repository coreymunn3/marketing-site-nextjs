import { Fragment } from 'react';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  StyledImg,
} from './InfoSection.elements';
import { Container, Button } from '../../styles/globals';
import Divider from '../DividerSVG';
import NextLink from 'next/link';

const InfoSection = (props) => {
  const {
    name,
    lightBg,
    imgStart,
    topLine,
    headline,
    description,
    buttonLabel,
    src,
    alt,
    svgBg,
    svgColor,
    isFirst,
  } = props;

  const lightTopLine = lightBg ? false : true;
  const lightText = lightBg ? false : true;
  const lightTextDesc = lightBg ? false : true;
  const start = imgStart ? 1 : 0;

  return (
    <Fragment>
      <InfoSec lightBg={lightBg} name={name}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <NextLink href='/' passHref>
                  <Button big primary>
                    {buttonLabel}
                  </Button>
                </NextLink>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <StyledImg src={src} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
        <Divider svgBg={svgBg} svgColor={svgColor} />
      </InfoSec>
    </Fragment>
  );
};

export default InfoSection;

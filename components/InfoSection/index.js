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
import NextLink from 'next/link';

const InfoSection = (props) => {
  const {
    lightBg,
    imgStart,
    topLine,
    headline,
    description,
    buttonLabel,
    src,
    alt,
  } = props;

  const lightTopLine = lightBg ? false : true;
  const lightText = lightBg ? false : true;
  const lightTextDesc = lightBg ? false : true;
  const start = imgStart ? 1 : 0;

  return (
    <Fragment>
      <InfoSec lightBg={lightBg}>
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
      </InfoSec>
    </Fragment>
  );
};

export default InfoSection;

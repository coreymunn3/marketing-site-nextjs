import styled from 'styled-components';

export const CurveContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const CurveSVG = styled.svg`
  border: 'none';
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.svgBg};
`;

export const PathSVG = styled.path`
  background-color: ${(props) => props.fill};
`;

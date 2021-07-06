import styled from 'styled-components';

export const CurveContainer = styled.div`
  width: 100%;
  position: relative;
  display: block;
  margin-top: -1px;
`;

export const CurveSVG = styled.svg`
  border: 'none';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* background-color: ${(props) => props.svgBg}; */
`;

export const PathSVG = styled.path`
  background-color: ${(props) => props.fill};
`;

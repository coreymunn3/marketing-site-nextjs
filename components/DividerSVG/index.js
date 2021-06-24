import { CurveContainer, CurveSVG, PathSVG } from './Divider.elements';

const index = ({ svgBg, svgColor }) => {
  return (
    <CurveContainer>
      <CurveSVG
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        svgBg={svgBg}
      >
        <PathSVG
          fill={svgColor}
          fillOpacity='1'
          d='M0,96L34.3,122.7C68.6,149,137,203,206,197.3C274.3,192,343,128,411,112C480,96,549,128,617,160C685.7,192,754,224,823,224C891.4,224,960,192,1029,170.7C1097.1,149,1166,139,1234,128C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'
        ></PathSVG>
      </CurveSVG>
    </CurveContainer>
  );
};

export default index;

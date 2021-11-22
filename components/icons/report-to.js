import styled from 'styled-components';

const IconText = styled.p`
  position: absolute;
  bottom: 4px;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 12px;
`;
const IconStyle = styled.div`
  position: relative;
`;
export default function ReportsTo() {
  return (
    <IconStyle>
      <IconText>Reports To</IconText>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 101 54'>
        <rect width='101' height='21' y='33' fill='#F4A261' rx='8' />
        <path
          fill='#F4A261'
          d='m31 0 5.4622 16.4367L47.9657 3.48792 31 0Zm22.5 36c0-12.7592-5.7316-21.9531-11.3007-28.04633l-2.2144 2.02394C45.2311 15.7175 50.5 24.2223 50.5 36h3Z'
        />
      </svg>
    </IconStyle>
  );
}

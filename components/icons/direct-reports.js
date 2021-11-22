import styled from 'styled-components';

const IconText = styled.p`
  position: absolute;
  color: white;
  top: 2px;
  width: 100%;
  text-align: center;
  font-size: 12px;
`;
const IconStyle = styled.div`
  position: relative;
`;
export default function DirectReportsIcon() {
  return (
    <IconStyle>
      <IconText>Direct Reports</IconText>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 101 43'>
        <rect width='101' height='21' fill='#F4A261' rx='8' />

        <path fill='#F4A261' d='m51 43 8.6603-15H42.3397L51 43Zm-1.5-24v10.5h3V19h-3Z' />
      </svg>
    </IconStyle>
  );
}

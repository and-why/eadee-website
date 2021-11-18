import { Button } from '../styled-components/Button';

export const CallToActionBlock = ({ content }) => {
  return (
    <CallToActionOuterContainer bgColor={content.background_colour}>
      <CallToActionInnerContainer>
        <h2>{content.heading}</h2>
        <ButtonContainer>
          <Button buttonColor={content.button_colour} buttonTextColour={content.button_text_colour}>
            {content.button_text}
          </Button>
          <p>{content.button_aside}</p>
        </ButtonContainer>
      </CallToActionInnerContainer>
    </CallToActionOuterContainer>
  );
};

CallToActionOuterContainer = styled.div`
  display: flex;
`;
CallToActionInnerContainer = styled.div`
  display: flex;
`;
ButtonContainer = styled.div`
  display: flex;
`;

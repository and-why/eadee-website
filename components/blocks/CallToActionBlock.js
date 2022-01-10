import Link from 'next/link';
import { Button } from '../styled-components/Button';
import styled, { css } from 'styled-components';
import { Container } from '../styled-components/Container';

export const CallToActionBlock = ({ content }) => {
  return (
    <Container>
      <CallToActionOuterContainer bgColor={content.background_colour}>
        <CallToActionInnerContainer>
          <h2>{content.heading}</h2>
          {content.button_text && content.button_url && (
            <ButtonContainer>
              <Link href={content.button_url} passHref>
                <Button
                  buttonColor={content.button_colour}
                  buttonTextColour={content.button_text_colour}
                >
                  {content.button_text}
                </Button>
              </Link>
              <p>{content.button_aside}</p>
            </ButtonContainer>
          )}
        </CallToActionInnerContainer>
      </CallToActionOuterContainer>
    </Container>
  );
};

const CallToActionOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: var(--s-vmin) auto;
  border-radius: var(--border-radius-large);
  background-color: var(--primary);
  ${(props) =>
    props.bgColor &&
    css`
      background-color: var(--color-${props.bgColor});
    `}
`;
const CallToActionInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--xl);
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  p {
    margin: 0;
    margin-left: var(--s);
    font-size: var(--n);
    color: var(--color-gray);
    opacity: 0.7;
  }
`;

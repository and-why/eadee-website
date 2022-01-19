import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';
import ImageBoxShadow from '../ImageBoxShadow';
import { Button } from '../styled-components/Button';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';

export default function TextAndMedia({ content }) {
  console.log('content', content);
  return (
    <Section>
      <Container>
        <TextAndMediaContainer textDirection={content.text_direction}>
          <TextDiv>
            {content.heading && <h2>{content.heading}</h2>}
            <LeadingContent>
              <ReactMarkdown>{content.content}</ReactMarkdown>
            </LeadingContent>
            {content.button_text && (
              <Link href={content.button_url} passHref>
                <Button primary>{content.button_text}</Button>
              </Link>
            )}
          </TextDiv>
          {content.media && (
            <ImageDiv>
              <ImageBoxShadow image={content.media}></ImageBoxShadow>
            </ImageDiv>
          )}
        </TextAndMediaContainer>
      </Container>
    </Section>
  );
}

const TextAndMediaContainer = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  @media (min-width: 700px) {
    flex-direction: row;
    ${(props) =>
      props.textDirection === 'right' &&
      css`
        flex-direction: row-reverse;
      `};
  }
`;

const TextDiv = styled.div`
  width: 100%;
  margin: 32px;
`;
const ImageDiv = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
const LeadingContent = styled.div`
  font-size: 22px;
  margin-bottom: 32px;
  line-height: 1.3;
`;

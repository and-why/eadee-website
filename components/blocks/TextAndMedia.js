import Link from 'next/link';
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
        <TextAndMediaContainer>
          <TextDiv textDirection={content.text_direction}>
            <h2>{content.heading}</h2>
            <LeadingContent>{content.content}</LeadingContent>
            {content.button_text && (
              <Link href={content.button_url} passHref>
                <Button primary>{content.button_text}</Button>
              </Link>
            )}
          </TextDiv>
          <ImageDiv>
            <ImageBoxShadow image={content.media}></ImageBoxShadow>
          </ImageDiv>
        </TextAndMediaContainer>
      </Container>
    </Section>
  );
}

const TextAndMediaContainer = styled.div`
  margin: 64px 0;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-content: center;
  grid-auto-flow: dense;
`;

const TextDiv = styled.div`
  grid-column: 1;
  margin: 32px;
  ${(props) =>
    props.textDirection === 'right' &&
    css`
      grid-column: 3;
    `};
`;
const ImageDiv = styled.div`
  grid-column: 2;
`;
const LeadingContent = styled.div`
  font-size: 22px;
  margin-bottom: 32px;
`;

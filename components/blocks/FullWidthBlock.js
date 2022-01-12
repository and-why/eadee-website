import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import Image from 'next/image';

export const FullWidthBlock = ({ content }) => {
  return (
    <Section>
      <Container>
        <FullWidthBlockContainer>
          <TextBlock>
            <h2>{content.title}</h2>
            <ReactMarkdown className='markdown'>{content.content}</ReactMarkdown>
          </TextBlock>
        </FullWidthBlockContainer>
      </Container>
      {content.image && (
        <ImageBlock>
          <Image
            src={content.image.url}
            alt={content.image.alternativeText}
            width='1290px'
            height='800px'
            objectFit='contain'
            quality={100}
          />
        </ImageBlock>
      )}
    </Section>
  );
};

const FullWidthBlockContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  img {
    width: 100%;
  }
  h2 {
    margin: 0 0 var(--l) 0;
  }
`;

const TextBlock = styled.div`
  padding: var(--xl) 0;
`;
const ImageBlock = styled.div`
  padding: var(--l) 0;
  transition: all 0.25s ease;
  img {
    transition: all 0.25s ease;
    border-radius: var(--l);
    box-shadow: 0 4px var(--n) 0 rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

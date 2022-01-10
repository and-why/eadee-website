import styled from 'styled-components';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import ReactMarkdown from 'react-markdown';
import { ColouredBlockOuterContainer } from './ColouredBlock';

export const FeatureBlockTitleAndText = ({ content }) => {
  return (
    <Section>
      <ColouredBlockOuterContainer
        textColor={content.text_color}
        bgColor={content.background_colour}
        roughEdge={content.rough_edge}
      >
        <Container>
          <FeatureBlockTitleAndTextInnerContainer>
            <h2 className='title'>{content.title}</h2>
            {content.feature_block_title_text.map((block) => {
              return (
                <>
                  <Title>{block.title}</Title>
                  <TextBlock>
                    <ReactMarkdown>{block.content}</ReactMarkdown>
                  </TextBlock>
                </>
              );
            })}
          </FeatureBlockTitleAndTextInnerContainer>
        </Container>
      </ColouredBlockOuterContainer>
    </Section>
  );
};

const FeatureBlockTitleAndTextInnerContainer = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: var(--l);
  h2 {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: var(--l);
  margin: 0px;
`;

const TextBlock = styled.div`
  font-size: var(--n);
`;

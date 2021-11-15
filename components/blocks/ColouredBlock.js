import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import { Button } from '../styled-components/Button';
import ReactMarkdown from 'react-markdown';
import { FeatureBlockImageText } from './FeatureBlockImageText';

export const ColouredBlock = ({ content }) => {
  return (
    <Section>
      <ColouredBlockOuterContainer
        textColor={content.text_color}
        bgColor={content.background_colour}
        roughEdge={content.rough_edge}
      >
        <Container>
          {content.title && <h2 className='title'>{content.title}</h2>}
          <FeaturedBlocksContainer layout={content.layout}>
            {content.feature_block_image_text.map((block) => {
              return (
                <FeatureBlockImageText key={block.id} content={block} layout={content.layout} />
              );
            })}
          </FeaturedBlocksContainer>
        </Container>
      </ColouredBlockOuterContainer>
    </Section>
  );
};

export const ColouredBlockOuterContainer = styled.div`
  width: 100%;
  padding: var(--xxl) 0;
  background: var(--color-gray-light);
  display: flex;
  position: relative;

  ${(props) =>
    props.roughEdge === 'bottom' &&
    css`
      &:after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
        right: 0;
        height: 18px;
        mask-image: url('/images/section-bottom.svg');
        mask-repeat: repeat no-repeat;
        transform: translateY(17px);
        ${(props) =>
          props.bgColor &&
          css`
            background-color: var(--color-${props.bgColor});
          `};
      }
    `};
  ${(props) =>
    props.roughEdge === 'top' &&
    css`
      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        right: 0;
        height: 18px;
        mask-image: url('/images/section-bottom.svg');
        mask-repeat: repeat no-repeat;
        transform: rotate(180deg) translateY(17px);
        ${(props) =>
          props.bgColor &&
          css`
            background-color: var(--color-${props.bgColor});
          `};
      }
    `};
  ${(props) =>
    props.roughEdge === 'both' &&
    css`
      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        right: 0;
        height: 18px;
        mask-image: url('/images/section-bottom.svg');
        mask-repeat: repeat no-repeat;
        transform: rotate(180deg) translateY(17px);
        ${(props) =>
          props.bgColor &&
          css`
            background-color: var(--color-${props.bgColor});
          `};
      }
      &:after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
        right: 0;
        height: 18px;
        mask-image: url('/images/section-bottom.svg');
        mask-repeat: repeat no-repeat;
        transform: translateY(17px);
        ${(props) =>
          props.bgColor &&
          css`
            background-color: var(--color-${props.bgColor});
          `};
      }
    `};
  h2.title {
    width: 100%;
    text-align: center;
    max-width: 600px;
    margin: 0 auto var(--xl);
  }
  ${(props) =>
    props.bgColor &&
    css`
      background: var(--color-${props.bgColor});
    `};
  ${(props) =>
    props.textColor &&
    css`
      color: var(--color-${props.textColor});
    `};
`;

const FeaturedBlocksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: var(--l);
  row-gap: var(--n);
  justify-content: start;

  @media (min-width: 850px) {
    ${(props) =>
      props.layout == 'columns' &&
      css`
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      `};
  }
`;

import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import { Button } from '../styled-components/Button';

export const ColouredBlock = ({ content }) => {
  return (
    <Section>
      <ColouredBlockOuterContainer
        textColor={content.text_color}
        bgColor={content.background_colour}
        roughEdge={content.rough_edge}
      >
        <Container>
          <h2 className='title'>{content.title}</h2>
          <FeaturedBlocksContainer layout={content.layout}>
            {content.feature_block_image_text.map((block) => {
              return (
                <FeaturedBlockContainer
                  layout={content.layout}
                  image_text_direction={block.image_text_direction}
                >
                  <ImageContainer>
                    <Image
                      src={`${
                        process.env.NODE_ENV === 'production'
                          ? block.image.url
                          : `http://localhost:1337${block.image.url}`
                      }`}
                      alt={block.image.alternativeText}
                      height='400px'
                      width='600px'
                      objectFit='contain'
                      objectPosition='left'
                      quality={100}
                    />
                  </ImageContainer>
                  <TextBlock layout={content.layout}>
                    <h3>{block.title}</h3>
                    <p>{block.subtitle}</p>

                    {block.button_text && block.button_url && (
                      <ButtonFooter>
                        <Link href={block.button_url} passHref>
                          <Button>{block.button_text}</Button>
                        </Link>
                      </ButtonFooter>
                    )}
                  </TextBlock>
                </FeaturedBlockContainer>
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
  background: var(--primary);
  display: flex;
  position: relative;
  h2 {
    margin: 0 0 1em 0;
  }
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
            background-color: var(--${props.bgColor});
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
            background-color: var(--${props.bgColor});
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
            background-color: var(--${props.bgColor});
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
            background-color: var(--${props.bgColor});
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
      background: var(--${props.bgColor});
    `};
  ${(props) =>
    props.textColor &&
    css`
      color: var(--${props.textColor});
    `};
`;

const FeaturedBlocksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: var(--l); */
  column-gap: var(--l);
  h3 {
    font-weight: 900;
  }
  @media (min-width: 700px) {
    ${(props) =>
      props.layout == 'columns' &&
      css`
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      `};
  }
`;
const FeaturedBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 700px) {
    flex-direction: row;
    ${(props) =>
      props.layout === 'columns' &&
      css`
        flex-direction: column;
      `};
    ${(props) =>
      props.image_text_direction === 'reverse' &&
      css`
        flex-direction: row-reverse;
      `};
    ${(props) =>
      props.image_text_direction === 'reverse' &&
      props.layout === 'columns' &&
      css`
        flex-direction: column-reverse;
      `};
    ${(props) =>
      props.layout === 'rows' &&
      css`
        max-width: 1000px;
        margin: auto;
      `};
  }
`;

const TextBlock = styled.div`
  padding: var(--n);
  /* align-self: center; */
  @media (min-width: 700px) {
    padding: var(--xl);
    width: 100%;
    ${(props) =>
      props.layout === 'columns' &&
      css`
        padding: var(--n);
      `};
  }
`;
const ButtonFooter = styled.div`
  margin-top: var(--m);
`;
const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  padding: var(--n);
  span {
    overflow: visible !important;
  }
  img {
    border-radius: var(--m);
    box-shadow: 0 4px var(--n) 0 rgba(0, 0, 0, 0.15);
  }
  @media (min-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;

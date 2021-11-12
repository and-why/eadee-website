import Image from 'next/image';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Button } from '../styled-components/Button';
import ReactMarkdown from 'react-markdown';

export function FeatureBlockImageText({ content, layout }) {
  return (
    <FeaturedBlockContainer layout={layout} image_text_direction={content.image_text_direction}>
      {content.image && (
        <ImageContainer>
          <Image
            src={`${
              process.env.NODE_ENV === 'production'
                ? content.image.url
                : `http://localhost:1337${content.image.url}`
            }`}
            alt={content.image.alternativeText}
            height='600px'
            width='900px'
            objectFit='cover'
            objectPosition='center'
            quality={100}
          />
        </ImageContainer>
      )}
      <TextBlock layout={layout}>
        {(content.title || content.subtitle) && (
          <>
            <TitleBlock>
              <h3>{content.title}</h3>
              {content.subtitle && <h4>{content.subtitle}</h4>}
            </TitleBlock>
            <ReactMarkdown>{content.content}</ReactMarkdown>
          </>
        )}

        {content.button_text && content.button_url && (
          <ButtonFooter>
            <Link href={content.button_url} passHref>
              <Button>{content.button_text}</Button>
            </Link>
          </ButtonFooter>
        )}
      </TextBlock>
    </FeaturedBlockContainer>
  );
}

const FeaturedBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  @media (min-width: 800px) {
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
        max-width: 1080px;
        margin: auto;
      `};
  }
`;
export const TitleBlock = styled.div`
  margin-bottom: var(--s);
  h3 {
    font-weight: 900;
    margin: 0px;
  }
  h4 {
    font-family: var(--font-cursive);
    color: var(--darkgray);
    margin: 0px;
    font-size: var(--n);
  }
`;

const TextBlock = styled.div`
  padding: var(--n);
  width: 100%;
  /* align-self: center; */
  @media (min-width: 700px) {
    padding: var(--l) var(--n);
    width: 80%;
    ${(props) =>
      props.layout === 'columns' &&
      css`
        width: 100%;
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
    transition: all 0.25s ease;
    &:hover {
      transition: all 0.25s ease;
      transform: translateY(-4px);
    }
  }
  img {
    border-radius: var(--m);
    box-shadow: 0 4px var(--n) 0 rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease;
    &:hover {
      transition: all 0.25s ease;
      box-shadow: 0 4px var(--xl) 0 rgba(0, 0, 0, 0.15);
    }
  }
  @media (min-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;

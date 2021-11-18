import Image from 'next/image';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Button } from '../styled-components/Button';
import ReactMarkdown from 'react-markdown';
import ImageBoxShadow from '../ImageBoxShadow';

export function FeatureBlockImageText({ content, layout }) {
  return (
    <FeaturedBlockContainer
      id={content.anchor_id ? content.anchor_id : undefined}
      layout={layout}
      image_text_direction={content.image_text_direction}
    >
      {content.image &&
        (content.wistia_video_script ? (
          <div
            className='video'
            dangerouslySetInnerHTML={{ __html: content.wistia_video_script }}
          />
        ) : (
          <ImageBoxShadow image={content.image} />
        ))}
      <TextBlock layout={layout}>
        {(content.title || content.subtitle) && (
          <>
            <TitleBlock>
              {content.subtitle && <h4>{content.subtitle}</h4>}
              <h3>{content.title}</h3>
            </TitleBlock>
            <ReactMarkdown>{content.content}</ReactMarkdown>
          </>
        )}

        {content.button_text && content.button_url && (
          <ButtonFooter>
            <Link href={content.button_url} passHref>
              <Button primary>{content.button_text}</Button>
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
  align-items: center;
  .video {
    width: 100%;
    border-radius: var(--m);
    transition: all 0.25s ease;
    box-shadow: var(--box-shadow);
    &:hover {
      box-shadow: var(--box-shadow-hover);
      transition: all 0.25s ease;
    }
  }
  @media (min-width: 850px) {
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
    margin-bottom: var(--m);
  }
  h4 {
    font-family: var(--font-cursive);
    color: var(--color-dark-gray);
    margin: 0px;
    font-size: var(--n);
  }
`;

const TextBlock = styled.div`
  padding: var(--n);
  width: 100%;
  /* align-self: center; */
  @media (min-width: 850px) {
    padding: var(--l) var(--n);
    width: 90%;
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

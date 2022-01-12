import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Button } from '../styled-components/Button';
import { Container } from '../styled-components/Container';

export default function BannerImageText({ content }) {
  return (
    <BannerImageTextOuterContainer
      textPosition={content.text_placement}
      bgColor={content.background_colour}
      image={content.media}
    >
      {content.media && (
        <Image
          src={content.media.url}
          alt={content.media.alternativeText}
          layout='fill'
          placeholder='blur'
          blurDataURL={content.media.formats.thumbnail.url}
          objectFit='cover'
        />
      )}
      {(content.heading || content.subheading || content.button_url || content.button_text) && (
        <TextOuterContainer alignText={content.text_placement}>
          <Container>
            <TextInnerContainer justifyContent={content.text_placement}>
              {content.heading && <h1>{content.heading}</h1>}
              {content.subheading && <p>{content.subheading}</p>}
              {content.button_url && content.button_text && (
                <Link href={content.button_url} passHref>
                  <Button primary>{content.button_text}</Button>
                </Link>
              )}
            </TextInnerContainer>
          </Container>
        </TextOuterContainer>
      )}
    </BannerImageTextOuterContainer>
  );
}

const BannerImageTextOuterContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  z-index: 1;
  img {
    width: 100%;
    min-height: 500px;
  }
  ${(props) =>
    props.bgColor &&
    css`
      background-color: var(--color-${props.bgColor});
    `}
  ${(props) =>
    props.textPosition &&
    css`
      justify-content: ${props.textPosition};
    `}
`;
const TextOuterContainer = styled.div`
  line-height: 1.5;
  font-size: var(--m);
  margin: var(--l) 0;
  z-index: 2;
  h1 {
    margin: 0 0 8px;
  }
  ${(props) =>
    props.alignText === 'start' &&
    css`
      text-align: left;
    `}
  ${(props) =>
    props.alignText === 'center' &&
    css`
      text-align: center;
    `}
      ${(props) =>
    props.alignText === 'end' &&
    css`
      text-align: right;
    `}
    @media(min-width: 850px) {
    margin: var(--xxl);
  }
`;

const TextInnerContainer = styled.div`
  padding: var(--m);
  border-radius: var(--border-radius-large);
  background: var(--color-white);
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: var(--l);
  }
  ${(props) =>
    props.image &&
    css`
      box-shadow: var(--box-shadow);
    `}
  ${(props) =>
    props.justifyContent === 'start' &&
    css`
      justify-content: left;
    `}
  ${(props) =>
    props.justifyContent === 'center' &&
    css`
      justify-content: center;
    `}
      ${(props) =>
    props.justifyContent === 'end' &&
    css`
      justify-content: right;
    `}
`;

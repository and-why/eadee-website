import styled, { css } from 'styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';

export const LargeTextAndImageBlock = ({ content }) => {
  return (
    <Section>
      <Container>
        <FullPageCenteredBlockContainer>
          <LargeTextBlock textPosition={content.text_placement}>
            <ReactMarkdown>{content.text}</ReactMarkdown>
          </LargeTextBlock>
          {content.image &&
            (content.image.ext === '.webm' ? (
              <video
                aria-label='Video'
                crossOrigin='anonymous'
                autoPlay='true'
                loop
                playsInLine
                controlsList='nodownload'
                defaultplaybackrate='1'
                preload='auto'
              >
                <source
                  type='video/webm'
                  src={`${
                    process.env.NODE_ENV === 'production'
                      ? content.image.url
                      : `http://localhost:1337${content.image.url}`
                  }`}
                />
                <p>
                  Your browser cannot play this video. Upgrade to the latest Chrome, or Firefox.
                </p>
              </video>
            ) : (
              <Image
                src={`${
                  process.env.NODE_ENV === 'production'
                    ? content.image.url
                    : `http://localhost:1337${content.image.url}`
                }`}
                alt={content.image.alternativeText}
                height={content.image.height}
                width={content.image.width}
                objectFit='contain'
                quality={100}
              />
            ))}
        </FullPageCenteredBlockContainer>
      </Container>
    </Section>
  );
};

export const FullPageCenteredBlockContainer = styled.div`
  padding-top: 83px;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: var(--l);
  video {
    width: 100%;
    border-radius: var(--m);
    transform: translateY(0px);
    transition: all 0.25s ease;
    box-shadow: 0 4px var(--n) 0 rgba(0, 0, 0, 0.15);
    &:hover {
      box-shadow: 0 4px var(--xl) 0 rgba(0, 0, 0, 0.15);
      transform: translateY(-4px);
      transition: all 0.25s ease;
    }
  }
`;

export const LargeTextBlock = styled.div`
  p {
    font-weight: 900;
    line-height: 1.2;
    /* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
    font-size: calc(32px + (48 - 24) * ((100vw - 200px) / (1440 - 200)));
  }
  ${(props) =>
    props.textPosition === 'right' &&
    css`
      order: 1;
    `}
`;

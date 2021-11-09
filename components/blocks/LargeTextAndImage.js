import styled, { css } from 'styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import server from 'config/server';

export const LargeTextAndImageBlock = ({ content }) => {
  //   {
  //     "__component": "blocks.large-text-and-image",
  //     "id": 1,
  //     "text": "Great teams grow when everyone knows [who is who](/employee-directory), [where they fit in](/org-chart), and how they can [interact with each other](/employee-guides).",
  //     "text_placement": "left",
  //     "image": {
  //         "id": 1,
  //         "name": "two-image-screenshots.png",
  //         "alternativeText": "",
  //         "caption": "",
  //         "width": 582,
  //         "height": 682,
  //         "formats": {
  //             "thumbnail": {
  //                 "name": "thumbnail_two-image-screenshots.png",
  //                 "hash": "thumbnail_two_image_screenshots_bb8b465e3e",
  //                 "ext": ".png",
  //                 "mime": "image/png",
  //                 "width": 133,
  //                 "height": 156,
  //                 "size": 17.45,
  //                 "path": null,
  //                 "url": "/uploads/thumbnail_two_image_screenshots_bb8b465e3e.png"
  //             },
  //             "small": {
  //                 "name": "small_two-image-screenshots.png",
  //                 "hash": "small_two_image_screenshots_bb8b465e3e",
  //                 "ext": ".png",
  //                 "mime": "image/png",
  //                 "width": 427,
  //                 "height": 500,
  //                 "size": 121.31,
  //                 "path": null,
  //                 "url": "/uploads/small_two_image_screenshots_bb8b465e3e.png"
  //             }
  //         },
  //         "hash": "two_image_screenshots_bb8b465e3e",
  //         "ext": ".png",
  //         "mime": "image/png",
  //         "size": 114.71,
  //         "url": "/uploads/two_image_screenshots_bb8b465e3e.png",
  //         "previewUrl": null,
  //         "provider": "local",
  //         "provider_metadata": null,
  //         "created_at": "2021-11-03T03:06:37.892Z",
  //         "updated_at": "2021-11-03T03:06:37.896Z"
  //     }
  // }
  return (
    <Section>
      <Container>
        <FullPageCenteredBlockContainer>
          <LargeTextBlock textPosition={content.text_placement}>
            <ReactMarkdown>{content.text}</ReactMarkdown>
          </LargeTextBlock>
          {content.image && (
            <Image
              src={`${process.NODE_ENV ? server : ''}${content.image.url}`}
              alt={content.image.alternativeText}
              height={content.image.height}
              width={content.image.width}
              objectFit='contain'
              quality={100}
            />
          )}
        </FullPageCenteredBlockContainer>
      </Container>
    </Section>
  );
};

export const FullPageCenteredBlockContainer = styled.div`
  padding-top: 83px;
  display: grid;

  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: var(--l);
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

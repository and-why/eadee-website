// {
//   "__component": "blocks.coloured-block",
//   "id": 1,
//   "background_colour": "dark",
//   "title": "Give your organisation greater transparency",
//   "direction": "column",
//   "text_color": "white",
//   "feature_block_image_text": [
//       {
//           "id": 1,
//           "title": "Learn more about your colleagues",
//           "subtitle": "Detailed Employee Profiles give your staff the ability to share information with each other for greater transparency and therefore trust",
//           "button_text": null,
//           "direction": "row",
//           "image": {
//               "id": 2,
//               "name": "employee-directory.png",
//               "alternativeText": "",
//               "caption": "",
//               "width": 353,
//               "height": 253,
//               "formats": {
//                   "thumbnail": {
//                       "name": "thumbnail_employee-directory.png",
//                       "hash": "thumbnail_employee_directory_3ec37f4b29",
//                       "ext": ".png",
//                       "mime": "image/png",
//                       "width": 218,
//                       "height": 156,
//                       "size": 31.7,
//                       "path": null,
//                       "url": "/uploads/thumbnail_employee_directory_3ec37f4b29.png"
//                   }
//               },
//               "hash": "employee_directory_3ec37f4b29",
//               "ext": ".png",
//               "mime": "image/png",
//               "size": 36.24,
//               "url": "/uploads/employee_directory_3ec37f4b29.png",
//               "previewUrl": null,
//               "provider": "local",
//               "provider_metadata": null,
//               "created_at": "2021-11-03T03:09:17.570Z",
//               "updated_at": "2021-11-03T03:09:17.576Z"
//           }
//       },
//       {
//           "id": 2,
//           "title": "Learn more about yourself",
//           "subtitle": "Detailed Employee Profiles give your staff the ability to share information with each other for greater transparency and therefore trust",
//           "button_text": null,
//           "direction": "row",
//           "image": {
//               "id": 2,
//               "name": "employee-directory.png",
//               "alternativeText": "",
//               "caption": "",
//               "width": 353,
//               "height": 253,
//               "formats": {
//                   "thumbnail": {
//                       "name": "thumbnail_employee-directory.png",
//                       "hash": "thumbnail_employee_directory_3ec37f4b29",
//                       "ext": ".png",
//                       "mime": "image/png",
//                       "width": 218,
//                       "height": 156,
//                       "size": 31.7,
//                       "path": null,
//                       "url": "/uploads/thumbnail_employee_directory_3ec37f4b29.png"
//                   }
//               },
//               "hash": "employee_directory_3ec37f4b29",
//               "ext": ".png",
//               "mime": "image/png",
//               "size": 36.24,
//               "url": "/uploads/employee_directory_3ec37f4b29.png",
//               "previewUrl": null,
//               "provider": "local",
//               "provider_metadata": null,
//               "created_at": "2021-11-03T03:09:17.570Z",
//               "updated_at": "2021-11-03T03:09:17.576Z"
//           }
//       }
//   ]
// }
import Image from 'next/image';
import Link from 'next/link';
import { server } from 'config';
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
          <h2>{content.title}</h2>
          <FeaturedBlocksContainer direction={content.direction}>
            {content.feature_block_image_text.map((block) => {
              return (
                <FeaturedBlockContainer direction={block.direction}>
                  <ImageContainer>
                    <Image
                      src={`${process.NODE_ENV ? server : ''}${block.image.url}`}
                      alt={block.image.alternativeText}
                      height='400px'
                      width='600px'
                      objectFit='contain'
                      objectPosition='left'
                    />
                  </ImageContainer>
                  <TextBlock>
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
  h2 {
    width: 100%;
    text-align: center;
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
  grid-gap: var(--l);
  h3 {
    font-weight: 900;
  }
  @media (min-width: 700px) {
    ${(props) =>
      props.direction == 'row' &&
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
    ${(props) =>
      props.direction &&
      css`
        flex-direction: ${props.direction};
      `};
    ${(props) =>
      props.direction === 'row' &&
      css`
        max-width: 900px;
        margin: auto;
      `};
  }
`;

const TextBlock = styled.div`
  padding: var(--n) 0;
  /* width: 100%; */
  @media (min-width: 700px) {
    width: 100%;
  }
`;
const ButtonFooter = styled.div`
  margin-top: var(--m);
`;
const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;

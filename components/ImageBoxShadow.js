import Image from 'next/image';
import styled from 'styled-components';

export default function ImageBoxShadow({ image }) {
  return (
    <ImageContainer>
      <Image
        src={`${
          process.env.NODE_ENV === 'production' ? image.url : `http://localhost:1337${image.url}`
        }`}
        alt={image.alternativeText}
        height={image.height}
        width={image.width}
        objectFit='cover'
        objectPosition='center'
        quality={100}
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  span {
    overflow: visible !important;
    transition: all 0.25s ease;
    &:hover {
      transition: all 0.25s ease;
    }
  }
  img {
    border-radius: var(--m);
    box-shadow: var(--box-shadow);
    transition: all 0.25s ease;
    overflow: hidden;
    &:hover {
      transition: all 0.25s ease;
      box-shadow: var(--box-shadow-hover);
    }
  }
  @media (min-width: 850px) {
    width: 100%;
    align-items: center;
  }
`;

import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../styled-components/Button';
import { Section } from '../styled-components/Section';
import ReactMarkdown from 'react-markdown';

export const FullPageCenteredBlock = ({ content }) => {
  return (
    <Section>
      <FullPageCenteredContainer>
        <div className='block'>
          {content.title && <h1>{content.title}</h1>}
          {content.subtitle && <ReactMarkdown>{content.subtitle}</ReactMarkdown>}

          <div className='button_footer'>
            {content.button_text && (
              <Link href={content.button_url} passHref>
                <Button primary>{content.button_text}</Button>
              </Link>
            )}
            {content.button_aside_text && <span>{content.button_aside_text}</span>}
          </div>
          {content.scroll_link && (
            <a className='scroll' href='#main'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='39'
                height='16'
                viewBox='0 0 39 16'
                fill='none'
              >
                <path
                  d='M2 2L19.5 14L37 2'
                  stroke='var(--mediumgray)'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          )}
        </div>
      </FullPageCenteredContainer>
    </Section>
  );
};

const FullPageCenteredContainer = styled.div`
  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-7px);
    }
    40% {
      transform: translateY(0px);
    }
    60% {
      transform: translateY(-4px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    /* max-width: 450px;
    min-width: 350px; */
    text-align: center;
    p {
      position: relative;
      line-height: 1.5;
      font-size: var(--m);
      em {
        position: relative;
        width: 0px;
        strong {
          position: absolute;
          bottom: 24px;
          font-family: var(--font-cursive);
          color: var(--primary);
          font-size: 16px;
          transform: rotate(-5deg) translateX(-50%);
          &:after {
            transform: rotate(5deg);
            content: '^';
            position: absolute;
            bottom: -32px;
            left: 30%;
          }
        }
      }
    }
  }
  .button_footer {
    display: flex;
    align-items: center;
    margin-top: var(--xl);
    span {
      font-weight: 300;
      font-size: var(--s);
      margin-left: var(--s);
      color: var(--mediumgray);
    }
  }
  em {
  }
  a svg {
    transform-origin: center bottom;
    transform: translateY(0px);
    animation: 2s bounce ease infinite;
  }
  a.scroll {
    font-size: var(--s);
    color: var(--mediumgray);
    margin-top: var(--s-vmin);
    border-bottom: none;
    position: absolute;
    bottom: 0;
    &:hover {
      border-bottom: none;
    }
  }
`;

import styled from 'styled-components';
import { Button } from '../styled-components/Button';

export const FullPageCenteredBlock = ({ content }) => {
  //   {
  //     "__component": "blocks.full-page-block",
  //     "id": 1,
  //     "title": "Eadee:",
  //     "subtitle": "A simple Employee Directory (E.D.) you employees will use.",
  //     "button_text": "Get started for free",
  //     "button_aside_text": "No credit card needed"
  // }
  return (
    <FullPageCenteredContainer>
      <div className='block'>
        {content.title && <h1>{content.title}</h1>}
        {content.subtitle && <h2>{content.subtitle}</h2>}
        <div className='button_footer'>
          {content.button_text && <Button primary>{content.button_text}</Button>}
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
  );
};

const FullPageCenteredContainer = styled.div`
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
    width: 50%;
    max-width: 450px;
    min-width: 350px;
    text-align: center;
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

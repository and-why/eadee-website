import { CallToActionBlock } from '@/components/blocks/CallToActionBlock';
import React from 'react';
import { render } from '../../../utils/test-utils';

describe('CallToActionBlock', () => {
  it('should render full call to action block', () => {
    let expectedProps = {
      content: {
        __component: 'blocks.call-to-action-block',
        id: 1,
        heading: 'Let Eadee connect your people together',
        button_text: 'button',
        button_url: 'https://app.eadee.co/signin/create-account',
        button_aside: 'no card needed',
        background_colour: 'primary',
        button_colour: 'white',
        button_text_colour: 'dark',
      },
    };

    const { getByRole, getByText } = render(<CallToActionBlock {...expectedProps} />);

    // const button = getByText(expectedProps.body[5].label);
    const heading = getByRole('heading', {
      name: /Let Eadee connect your people together/i,
    });
    const button = getByRole('button', {
      name: /button/i,
    });
    expect(heading).toBeVisible();
    expect(button).toBeVisible();
  });
  it('should render no button if button info is missing', () => {
    let expectedProps = {
      content: {
        __component: 'blocks.call-to-action-block',
        id: 1,
        heading: 'Let Eadee connect your people together',
        button_text: null,
        button_url: null,
        button_aside: 'no card needed',
        background_colour: 'primary',
        button_colour: 'white',
        button_text_colour: 'dark',
      },
    };

    const { getByRole, container } = render(<CallToActionBlock {...expectedProps} />);

    // const button = getByText(expectedProps.body[5].label);
    const heading = getByRole('heading', {
      name: /let eadee connect your people together/i,
    });
    expect(heading).toBeVisible();
    expect(container.querySelector('button')).toBeFalsy();
  });
});

import BannerImageText from '@/components/blocks/BannerImageText';
import React from 'react';
import { render } from '../../../utils/test-utils';

describe('FullPageCenteredBlock', () => {
  it('should render full page centered block', () => {
    let expectedProps = {
      content: {
        __component: 'blocks.banner-image-and-text',
        id: 2,
        button_text: 'button',
        text_placement: 'center',
        heading: 'Product Features',
        subheading: 'Only the features you need',
        button_url: '/product',
        background_colour: 'white',
        media: null,
      },
    };

    const { getByRole, getByText } = render(<BannerImageText {...expectedProps} />);

    // const button = getByText(expectedProps.body[5].label);
    const heading = getByRole('heading', {
      name: /product features/i,
    });
    const subheading = getByText(/Only the features you need/i);
    const button = getByRole('button', {
      name: /button/i,
    });
    expect(heading).toBeVisible();
    expect(subheading).toBeVisible();
    expect(button).toBeVisible();
  });
  it('should render no button if button info is missing', () => {
    let expectedProps = {
      content: {
        __component: 'blocks.banner-image-and-text',
        id: 2,
        button_text: null,
        text_placement: 'center',
        heading: 'Product Features',
        subheading: 'Only the features you need',
        button_url: null,
        background_colour: 'white',
        media: null,
      },
    };

    const { getByRole, getByText, container } = render(<BannerImageText {...expectedProps} />);

    // const button = getByText(expectedProps.body[5].label);
    const heading = getByRole('heading', {
      name: /product features/i,
    });

    const subheading = getByText(/Only the features you need/i);
    expect(heading).toBeVisible();
    expect(subheading).toBeVisible();
    expect(container.querySelector('button')).toBeFalsy();
  });
});

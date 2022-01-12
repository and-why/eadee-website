import React from 'react';
import { render } from '../../../utils/test-utils';
import { FullPageCenteredBlock } from '@/components/blocks/FullPageCenteredBlock';

describe('FullPageCenteredBlock', () => {
  test('should render full page centered block', () => {
    let expectedProps = {
      content: {
        __component: 'blocks.full-page-block',
        id: 3,
        title: 'Eadee:',
        button_text: 'Get started for free',
        button_aside_text: 'No credit card needed',
        anotation: null,
        scroll_link: true,
        subtitle: 'A simple Employee Directory',
        button_url: 'https://app.eadee.co/signin/create-account',
      },
    };

    const { getByRole, getByText } = render(<FullPageCenteredBlock {...expectedProps} />);

    // const button = getByText(expectedProps.body[5].label);
    const heading = getByRole('heading', {
      name: /eadee:/i,
    });
    const byline = getByText(/a simple employee directory/i);
    const button = getByRole('button', {
      name: /get started for free/i,
    });
    expect(heading).toBeVisible();
    expect(byline).toBeVisible();
    expect(button).toBeVisible();
  });
});

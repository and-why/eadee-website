import ImageBoxShadow from '@/components/ImageBoxShadow';
import React from 'react';
import { render } from '../../utils/test-utils';

describe('ImageBoxShadow', () => {
  let expectedProps;
  beforeEach(() => {
    expectedProps = {
      image: {
        name: 'shadow image',
        alternativeText: 'shadow image alt',
        width: 600,
        height: 400,
        url: 'https://eadee-strapi-images.s3.ap-southeast-2.amazonaws.com/search_2_ae42031c8a.png',
      },
    };
  });
  it('should render an image with box shadow', () => {
    const { getByRole, getByAltText } = render(<ImageBoxShadow {...expectedProps} />);

    const image = getByRole('img', {
      name: /shadow image alt/i,
    });
    const imageAlt = getByAltText(/shadow image alt/i);

    expect(image).toBeVisible();
    expect(imageAlt).toBeVisible();
  });

  it('image with box shadow matches snapshot', () => {
    const { asFragment } = render(<ImageBoxShadow {...expectedProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

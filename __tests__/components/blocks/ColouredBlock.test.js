import { ColouredBlock } from '@/components/blocks/ColouredBlock';
import React from 'react';
import { render } from '../../../utils/test-utils';

describe('ColouredBlock', () => {
  it('should render the full coloured block', () => {
    let expectedProps = {
      content: {
        __component: 'blocks.coloured-block',
        id: 6,
        background_colour: 'dark',
        title: 'coloured block',
        direction: null,
        text_color: 'white',
        rough_edge: 'both',
        layout: 'columns',
        anchor_id: null,
        feature_block_image_text: [
          {
            id: 16,
            title: 'feature heading',
            subtitle: 'feature subheading',
            button_text: 'button text',
            direction: null,
            button_url: 'https://app.eadee.co/signin/create-account',
            image_text_direction: 'normal',
            content: 'feature text content',
            wistia_video_script: null,
            anchor_id: null,
            image: {
              alternativeText: 'featured image',
              url: 'https://eadee-strapi-images.s3.ap-southeast-2.amazonaws.com/org_chart_2_585e637658.png',
              height: 200,
              width: 200,
              formats: {
                thumbnail: {
                  url: 'https://eadee-strapi-images.s3.ap-southeast-2.amazonaws.com/org_chart_2_585e637658.png',
                },
              },
            },
          },
        ],
      },
    };

    const { getByRole, getByText } = render(<ColouredBlock {...expectedProps} />);

    const heading = getByRole('heading', {
      name: /coloured block/i,
    });
    const featureHeading = getByRole('heading', {
      name: /feature heading/i,
    });
    const featureCopy = getByText(/feature text content/i);
    const featureSubHeading = getByRole('heading', {
      name: /feature subheading/i,
    });
    const featureImage = getByRole('img', {
      name: /featured image/i,
    });
    const featureButton = getByRole('button', {
      name: /button text/i,
    });

    expect(heading).toBeVisible();
    expect(featureHeading).toBeVisible();
    expect(featureCopy).toBeVisible();
    expect(featureSubHeading).toBeVisible();
    expect(featureImage).toBeVisible();
    expect(featureButton).toBeVisible();
  });

  it('should not render an image in the featured block', () => {
    let expectedProps = {
      content: {
        __component: 'blocks.coloured-block',
        id: 6,
        background_colour: 'dark',
        title: 'coloured block',
        direction: null,
        text_color: 'white',
        rough_edge: 'both',
        layout: 'columns',
        anchor_id: null,
        feature_block_image_text: [
          {
            id: 16,
            title: 'feature heading',
            subtitle: 'feature subheading',
            button_text: 'button text',
            direction: null,
            button_url: 'https://app.eadee.co/signin/create-account',
            image_text_direction: 'normal',
            content: 'feature text content',
            wistia_video_script: null,
            anchor_id: null,
            image: null,
          },
        ],
      },
    };

    const { getByRole, getByText, container } = render(<ColouredBlock {...expectedProps} />);

    const heading = getByRole('heading', {
      name: /coloured block/i,
    });
    const featureHeading = getByRole('heading', {
      name: /feature heading/i,
    });
    const featureCopy = getByText(/feature text content/i);
    const featureSubHeading = getByRole('heading', {
      name: /feature subheading/i,
    });
    const featureButton = getByRole('button', {
      name: /button text/i,
    });
    expect(heading).toBeVisible();
    expect(featureHeading).toBeVisible();
    expect(featureCopy).toBeVisible();
    expect(featureSubHeading).toBeVisible();
    expect(featureButton).toBeVisible();
    expect(container.querySelector('img')).toBeFalsy();
  });
});

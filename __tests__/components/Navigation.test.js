import React from 'react';
import { render } from '../../utils/test-utils';
import Navigation from '@/components/Navigation';

describe('Navigation', () => {
  it('should render navigation', () => {
    let expectedProps = {
      id: 1,
      published_at: '2021-11-10T04:40:05.156Z',
      created_at: '2021-11-10T04:37:06.287Z',
      updated_at: '2021-11-30T19:37:37.854Z',
      body: [
        {
          __component: 'menu.link',
          id: 2,
          label: 'Why Eadee',
          style: 'none',
          page: {
            id: 3,
            page_title: 'Why Eadee',
            slug: 'why-eadee',
            published_at: '2021-11-11T06:01:42.395Z',
            created_at: '2021-11-11T05:44:34.513Z',
            updated_at: '2021-11-30T19:49:19.803Z',
            is_homepage: false,
            heading: 'Why Eadee?',
            meta_description: null,
          },
          url: '',
        },
        {
          __component: 'menu.link',
          id: 3,
          label: 'Features',
          style: 'none',
          page: {
            id: 4,
            page_title: 'Features',
            slug: 'features',
            published_at: '2021-11-16T23:25:56.235Z',
            created_at: '2021-11-16T23:25:52.448Z',
            updated_at: '2022-01-06T03:43:07.791Z',
            is_homepage: null,
            heading: '',
            meta_description: null,
          },
          url: '',
        },
        {
          __component: 'menu.link',
          id: 17,
          label: 'Pricing',
          style: 'none',
          page: null,
          url: '/pricing',
        },
        {
          __component: 'menu.link',
          id: 4,
          label: 'Contact',
          style: 'none',
          page: null,
          url: '/contact',
        },
        {
          __component: 'menu.link',
          id: 16,
          label: 'Sign in',
          style: 'none',
          page: null,
          url: 'https://app.eadee.co/signin',
        },
        {
          __component: 'menu.link',
          id: 15,
          label: 'Get Started for Free',
          style: 'primary',
          page: null,
          url: 'https://app.eadee.co/signin/create-account',
        },
      ],
      logo: null,
      page: undefined,
      menuToggle: false,
      setMenuToggle: null,
    };
    const { getByRole } = render(<Navigation {...expectedProps} />);

    // const button = getByText(expectedProps.body[5].label);
    const logoText = getByRole('heading', {
      name: /Eadee/i,
    });
    expect(logoText).toBeVisible();
  });
});

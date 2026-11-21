import React from 'react';
import { GALLERY_IMAGES } from '../data/siteData';

export default function Gallery() {
  const doubledImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return React.createElement(
    'section',
    { className: 'gallery', 'aria-hidden': 'true' },
    React.createElement(
      'div',
      { className: 'gallery__track' },
      doubledImages.map((src, index) =>
        React.createElement(
          'figure',
          { className: 'gallery__item', key: `${src}-${index}` },
          React.createElement('img', { src, alt: '', loading: 'lazy' })
        )
      )
    )
  );
}

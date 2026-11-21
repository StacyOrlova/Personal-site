import React from 'react';
import { REVIEWS_DATA } from '../data/siteData';

export default function Testimonial() {
  return React.createElement(
    'section',
    { className: 'section testimonial', id: 'testimonial' },
    React.createElement(
      'p',
      { className: 'section__label', 'data-reveal': '' },
      'Что говорят зрители и коллеги'
    ),
    React.createElement(
      'h2',
      { className: 'section__title', 'data-reveal': '' },
      'Отзывы',
      React.createElement('br', null),
      'и впечатления'
    ),
    React.createElement(
      'div',
      { className: 'reviews-grid' },
      REVIEWS_DATA.map((review) =>
        React.createElement(
          'figure',
          { className: 'quote', 'data-reveal': '', key: review.name },
          React.createElement(
            'div',
            { className: 'quote__header' },
            React.createElement(
              'div',
              { className: 'quote__avatar-wrapper' },
              React.createElement('img', {
                src: review.avatar,
                alt: review.name,
                loading: 'lazy',
              })
            ),
            React.createElement(
              'div',
              null,
              React.createElement('div', { className: 'quote__name' }, review.name),
              React.createElement('div', { className: 'quote__role' }, review.role)
            )
          ),
          React.createElement('blockquote', { className: 'quote__text' }, review.text)
        )
      )
    )
  );
}
import React from 'react';
import { SOCIAL_LINKS } from '../data/siteData';

export default function Social() {
  return React.createElement(
    'section',
    { className: 'section social', id: 'social' },
    React.createElement(
      'h2',
      { className: 'social__title', 'data-reveal': '' },
      'Хочешь увидеть',
      React.createElement('br', null),
      React.createElement('span', { className: 'grad' }, 'больше?')
    ),
    React.createElement(
      'p',
      { className: 'social__sub', 'data-reveal': '' },
      'Подписывайся — показываю закулисье, репетиции и новые номера.'
    ),
    React.createElement(
      'div',
      { className: 'social__list', 'data-reveal': '' },
      SOCIAL_LINKS.map((link) =>
        React.createElement(
          'a',
          {
            className: 'social-link',
            href: link.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            key: link.url,
          },
          React.createElement('span', { className: 'social-link__name' }, link.name),
          React.createElement('span', { className: 'social-link__handle' }, link.handle),
          React.createElement('span', { className: 'social-link__arrow', 'aria-hidden': 'true' }, '→')
        )
      )
    )
  );
}

import React from 'react';
import Accordion from './Accordion';
import { BALLROOM_DATA } from '../data/siteData';

export default function Ballroom() {
  return React.createElement(
    'section',
    { className: 'section ballroom', id: 'ballroom' },
    React.createElement(
      'p',
      { className: 'section__label', 'data-reveal': '' },
      'Бальные танцы · 2015–2024'
    ),
    React.createElement(
      'h2',
      { className: 'section__title', 'data-reveal': '' },
      'Паркет, кубки',
      React.createElement('br', null),
      'и медали'
    ),
    React.createElement(Accordion, {
      id: 'ballroom-acc',
      items: BALLROOM_DATA,
      renderContent: (yearGroup) =>
        React.createElement(
          'ul',
          { className: 'accordion__list' },
          yearGroup.items.map((award, idx) => React.createElement('li', { key: idx }, award))
        ),
    })
  );
}

import React from 'react';
import { FESTIVALS_DATA } from '../data/siteData';

export default function Festivals() {
  return React.createElement(
    'section',
    { className: 'section festivals', id: 'festivals' },
    React.createElement(
      'p',
      { className: 'section__label', 'data-reveal': '' },
      'K-pop фестивали'
    ),
    React.createElement(
      'h2',
      { className: 'section__title', 'data-reveal': '' },
      'Награды',
      React.createElement('br', null),
      'K-pop сцены'
    ),
    React.createElement(
      'ul',
      { className: 'festivals__list' },
      FESTIVALS_DATA.map((fest, index) =>
        React.createElement(
          'li',
          { className: 'festival', 'data-reveal': '', key: `${fest.name}-${index}` },
          React.createElement('span', { className: 'festival__name' }, fest.name),
          React.createElement('span', { className: 'festival__meta' }, fest.meta)
        )
      )
    )
  );
}

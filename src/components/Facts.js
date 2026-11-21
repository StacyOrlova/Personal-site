import React from 'react';
import { FACTS_DATA } from '../data/siteData';

export default function Facts() {
  return React.createElement(
    'section',
    { className: 'section facts', id: 'facts' },
    React.createElement('h2', { className: 'section__title', 'data-reveal': '' }, 'Кто такая Stacy?'),
    React.createElement(
      'p',
      { className: 'section__subtitle', 'data-reveal': '' },
      'Немного цифр и фактов'
    ),
    React.createElement(
      'div',
      { className: 'facts__grid' },
      FACTS_DATA.map((fact) =>
        React.createElement(
          'article',
          { className: 'fact-card', 'data-reveal': '', key: fact.title },
          React.createElement(
            'div',
            { className: 'fact-card__icon', 'aria-hidden': 'true' },
            fact.icon
          ),
          React.createElement('h3', { className: 'fact-card__title' }, fact.title),
          React.createElement('p', { className: 'fact-card__text' }, fact.text)
        )
      )
    )
  );
}

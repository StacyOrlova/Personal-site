import React from 'react';
import { TEAMS_DATA } from '../data/siteData';

export default function Teams() {
  return React.createElement(
    'section',
    { className: 'section teams', id: 'teams' },
    React.createElement(
      'p',
      { className: 'section__label', 'data-reveal': '' },
      'K-pop · команды и дуэты'
    ),
    React.createElement(
      'h2',
      { className: 'section__title', 'data-reveal': '' },
      'Мои сцены',
      React.createElement('br', null),
      'и команды'
    ),
    React.createElement(
      'div',
      { className: 'teams__grid' },
      TEAMS_DATA.map((team) =>
        React.createElement(
          'a',
          { className: 'team-card', href: '#social', 'data-reveal': '', key: team.name },
          React.createElement(
            'div',
            { className: 'team-card__media' },
            React.createElement('img', { src: team.image, alt: team.alt, loading: 'lazy' })
          ),
          React.createElement(
            'div',
            { className: 'team-card__body' },
            React.createElement('h3', { className: 'team-card__name' }, team.name),
            React.createElement('p', { className: 'team-card__meta' }, team.meta)
          ),
          React.createElement('span', { className: 'team-card__go', 'aria-hidden': 'true' }, '↗')
        )
      )
    )
  );
}

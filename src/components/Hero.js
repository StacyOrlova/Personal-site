import React from 'react';
import { HERO_STATS } from '../data/siteData';

export default function Hero() {
  return React.createElement(
    'section',
    { className: 'hero', id: 'hero' },
    React.createElement(
      'div',
      { className: 'hero__inner' },
      React.createElement(
        'div',
        { className: 'hero__content' },
        React.createElement(
          'p',
          { className: 'badge', 'data-hero': '' },
          React.createElement('span', { className: 'badge__dot', 'aria-hidden': 'true' }),
          '42 медали · 10 лет на сцене'
        ),
        React.createElement(
          'h1',
          { className: 'hero__title' },
          React.createElement(
            'span',
            { className: 'hero__line' },
            React.createElement('span', { className: 'hero__line-text' }, 'Жизнь')
          ),
          React.createElement(
            'span',
            { className: 'hero__line' },
            React.createElement(
              'span',
              { className: 'hero__line-text' },
              'в ',
              React.createElement('em', { className: 'hero__accent' }, 'движении')
            )
          )
        ),
        React.createElement(
          'p',
          { className: 'hero__sub', 'data-hero': '' },
          'Бальные турниры и K-pop сцена: медали, команды и фестивали. Подписывайся — будет ярко ✨'
        ),
        React.createElement(
          'div',
          { className: 'hero__actions', 'data-hero': '' },
          React.createElement(
            'a',
            { className: 'btn', href: '#social' },
            'Смотреть выступления ',
            React.createElement('span', { className: 'btn__arrow', 'aria-hidden': 'true' }, '→')
          ),
          React.createElement('a', { className: 'btn btn--ghost', href: '#ballroom' }, '🏆 Награды')
        )
      ),
      React.createElement(
        'div',
        { className: 'hero__visual', 'data-hero': '' },
        React.createElement('div', { className: 'hero__glow', 'aria-hidden': 'true' }),
        React.createElement('img', {
          className: 'hero__photo',
          src: `${process.env.PUBLIC_URL}/images/shapka%20logo.png`,
          alt: 'Stacy — портрет',
          draggable: 'false',
        }),
        React.createElement('span', { className: 'hero__chip hero__chip--1' }, '🏆 42 медали'),
        React.createElement('span', { className: 'hero__chip hero__chip--2' }, '🔥 K-pop · 5 команд'),
        React.createElement('span', { className: 'hero__chip hero__chip--3' }, '🎓 ЮФУ · «Высота»')
      )
    ),
    React.createElement(
      'div',
      { className: 'hero__stats', 'data-hero': '' },
      HERO_STATS.map((stat) =>
        React.createElement(
          'div',
          { className: 'stat', key: stat.label },
          React.createElement(
            'span',
            { className: 'stat__num' },
            React.createElement('span', { 'data-count': stat.count }, stat.count)
          ),
          React.createElement('span', { className: 'stat__label' }, stat.label)
        )
      )
    )
  );
}

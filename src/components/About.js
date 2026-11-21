import React from 'react';
import { ABOUT_CHIPS } from '../data/siteData';

export default function About() {
  return React.createElement(
    'section',
    { className: 'section about', id: 'about' },
    React.createElement(
      'div',
      { className: 'about__grid' },
      React.createElement(
        'h2',
        { className: 'section__title', 'data-reveal': '' },
        'Танец —',
        React.createElement('br', null),
        'мой язык'
      ),
      React.createElement(
        'div',
        { 'data-reveal': '' },
        React.createElement(
          'p',
          { className: 'about__text' },
          'Меня зовут Анастасия — для своих просто Stacy ☁️. Я родилась 17 февраля 2006 года в Таганроге и всю жизнь связана с танцем: десять лет бальных турниров и 42 медали, а сегодня — k-pop: каверы, дуэты и команды. Учусь в ЮФУ (ИКТИБ) и танцую в ансамбле «Высота».'
        ),
        React.createElement(
          'div',
          { className: 'about__chips' },
          ABOUT_CHIPS.map((chip) =>
            React.createElement('span', { className: 'chip', key: chip }, chip)
          )
        )
      )
    )
  );
}

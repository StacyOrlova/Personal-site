import React from 'react';
import Accordion from './Accordion';
import { FAQ_DATA } from '../data/siteData';

export default function Faq() {
  return React.createElement(
    'section',
    { className: 'section faq', id: 'faq' },
    React.createElement(
      'h2',
      { className: 'section__title', 'data-reveal': '' },
      'Частые',
      React.createElement('br', null),
      'вопросы'
    ),
    React.createElement(Accordion, {
      id: 'faq-acc',
      items: FAQ_DATA,
      renderContent: (faqItem) =>
        React.createElement('p', { className: 'accordion__answer' }, faqItem.answer),
    })
  );
}

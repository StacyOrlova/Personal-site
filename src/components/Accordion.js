import React, { useState } from 'react';

export default function Accordion({ id, items, renderContent }) {
  const initialOpen = items.find((item) => item.defaultOpen)?.id || null;
  const [openId, setOpenId] = useState(initialOpen);

  const handleToggle = (itemId) => {
    setOpenId((prev) => (prev === itemId ? null : itemId));
  };

  return React.createElement(
    'div',
    { className: 'accordion', id },
    items.map((item) => {
      const isOpen = openId === item.id;
      return React.createElement(
        'div',
        { className: `accordion__item${isOpen ? ' is-open' : ''}`, key: item.id },
        React.createElement(
          'h3',
          { className: 'accordion__heading' },
          React.createElement(
            'button',
            {
              className: 'accordion__head',
              type: 'button',
              'aria-expanded': isOpen,
              'aria-controls': item.id,
              onClick: () => handleToggle(item.id),
            },
            React.createElement(
              'span',
              { className: 'accordion__title' },
              item.title || item.question
            ),
            React.createElement('span', { className: 'accordion__icon', 'aria-hidden': 'true' })
          )
        ),
        React.createElement(
          'div',
          { className: 'accordion__body', id: item.id },
          React.createElement('div', { className: 'accordion__inner' }, renderContent(item))
        )
      );
    })
  );
}

import React from 'react';
import { TICKER_TEXT } from '../data/siteData';

export default function Ticker() {
  return React.createElement(
    'div',
    { className: 'ticker', 'aria-hidden': 'true' },
    React.createElement(
      'div',
      { className: 'ticker__track' },
      React.createElement('span', null, TICKER_TEXT),
      React.createElement('span', null, TICKER_TEXT)
    )
  );
}

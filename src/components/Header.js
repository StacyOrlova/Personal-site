import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return React.createElement(
    'header',
    { className: `header${scrolled ? ' scrolled' : ''}`, id: 'header' },
    React.createElement(
      'a',
      { className: 'header__logo', href: '#hero' },
      'Stacy',
      React.createElement('span', null, '.')
    ),
    React.createElement(
      'nav',
      { className: 'header__nav', 'aria-label': 'Основная навигация' },
      NAV_LINKS.map((link) =>
        React.createElement('a', { key: link.href, href: link.href }, link.label)
      )
    ),
    React.createElement('a', { className: 'btn btn--sm', href: '#social' }, 'Подписаться')
  );
}

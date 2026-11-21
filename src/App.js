import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Gallery from './components/Gallery';
import Teams from './components/Teams';
import Facts from './components/Facts';
import About from './components/About';
import Ballroom from './components/Ballroom';
import Festivals from './components/Festivals';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import Social from './components/Social';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#header', {
        opacity: 1,
        duration: 0.9,
        delay: 0.1,
        ease: 'power2.out',
      });

      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
      intro
        .to('.hero__line-text', { y: 0, duration: 1.1, stagger: 0.14 }, 0.1)
        .fromTo(
          '[data-hero]',
          { opacity: 0, y: 38 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          0.5
        );

      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = parseInt(el.getAttribute('data-count'), 10) || 0;
        const obj = { v: 0 };
        el.textContent = '0';

        gsap.to(obj, {
          v: target,
          duration: 1.8,
          delay: 1.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 95%', once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return React.createElement(
    'div',
    { ref: rootRef },
    React.createElement(
      'a',
      { className: 'skip-link', href: '#main' },
      'Перейти к содержимому'
    ),
    React.createElement(Header, null),
    React.createElement(
      'main',
      { id: 'main' },
      React.createElement(Hero, null),
      React.createElement(Ticker, null),
      React.createElement(Gallery, null),
      React.createElement(Teams, null),
      React.createElement(Facts, null),
      React.createElement(About, null),
      React.createElement(Ballroom, null),
      React.createElement(Festivals, null),
      React.createElement(Testimonial, null),
      React.createElement(Faq, null),
      React.createElement(Social, null)
    ),
    React.createElement(Footer, null)
  );
}

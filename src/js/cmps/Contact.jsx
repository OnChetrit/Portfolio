import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const socials = [
    { title: 'Instagram', path: 'https://www.instagram.com/onchetrit/' },
    { title: 'LinkedIn', path: 'https://www.linkedin.com/in/on-chetrit/' },
    { title: 'Github', path: 'https://github.com/OnChetrit' },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container flex column">
        <div className="massage flex column auto-center">
          <h4>Thank you for scrolling</h4>
          <h3>Let' get in touch</h3>
          <button>Send me an E-mail</button>
        </div>
        <div className="social">
          <p>Check out my networks</p>
          <p>to follow my new adventures</p>
          <div className="links flex auto-center">
            {socials.map(({ path, title }) => {
              return (
                <Link to={{ pathname: path }} className="ul" target="_blank">
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

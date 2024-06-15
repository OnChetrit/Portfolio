import { Social } from './Social';

export const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='container flex column'>
        <div className='massage flex column auto-center'>
          <h4>Thank you for scrolling</h4>
          <h3>Let's talk</h3>
          <form action='mailto:onchetrit@gmail.com'>
            <button>Send me an E-mail</button>
          </form>
        </div>
        <div className='social flex column'>
          <p>Check out my networks</p>
          <p>to follow my new adventures</p>
          <a href='tel:+972-54-223-4070'>054-2234070</a>
          <div className='links flex auto-center'>
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { send } from 'emailjs-com';

export const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const SERVICE_ID = 'service_7k0bseb';
    const TEMPLATE_ID = 'template_6y0hmdu';
    const USER_ID = 'user_Gnqw3qvXdEpc2FxvRpQ3p';

    await send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    setToSend({
      from_name: '',
      reply_to: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="flex auto-center section-header">- Contact -</div>
      <div className="container flex auto-center main-container">
        <div className="info">
          <h4>Get in touch</h4>
        </div>
        <form onSubmit={onSubmit} className="flex column">
          <input
            type="text"
            name="from_name"
            placeholder="from name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={toSend.subject}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

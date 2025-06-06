import './css/Contact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_xxz18zl',      // à remplacer
      'template_wfwdstl',     // à remplacer
      formRef.current,
      'aKpzXBUce9V1dPhcx'        // à remplacer
    )
    .then(() => {
      setFormStatus('Message envoyé !');
      setTimeout(() => setFormStatus(''), 2500);
      e.target.reset();
    })
    .catch(() => {
      setFormStatus("Erreur lors de l'envoi");
      setTimeout(() => setFormStatus(''), 2500);
    });
  };

  return (
    <section className="contact-section">
      <h3>Contact</h3>
      <form className="contact-form" ref={formRef} onSubmit={handleFormSubmit} autoComplete="off">
        <input type="email" name="user_email" placeholder="Votre email" required />
        <input type="text" name="subject" placeholder="Objet" required />
        <textarea name="message" placeholder="Votre message" required rows={4}></textarea>
        <button type="submit">Envoyer</button>
        {formStatus && <span className="form-status">{formStatus}</span>}
      </form>
      <div className="contact-links">
        <div className="contact-row">
          <span className="icon-svg">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#5e60ce" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.75-1.25a1.25 1.25 0 0 0-1.25 1.25v.31l8.5 5.67 8.5-5.67v-.31a1.25 1.25 0 0 0-1.25-1.25H4.75Zm15.5 3.19-7.72 5.15a.75.75 0 0 1-.82 0L4.28 8.69V17.25c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V8.69Z"/></svg>
          </span>
          <a href="mailto:gannounidoua@gmail.com" className="icon-link" title="Email">gannounidoua@gmail.com</a>
        </div>
        <div className="contact-row">
          <span className="icon-svg">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#5e60ce" d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 7.5H7v7h2.5v-7Zm-1.25-2a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM17 14.25c0-1.52-1.23-2.75-2.75-2.75a2.75 2.75 0 0 0-2.75 2.75v3.25H14.5v-3.25c0-.41.34-.75.75-.75s.75.34.75.75v3.25H17v-3.25Z"/></svg>
          </span>
          <a href="https://www.linkedin.com/in/doua-gannouni" className="icon-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">Doua Gannouni | LinkedIn</a>
        </div>
        <div className="contact-row">
          <span className="icon-svg">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#5e60ce" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
          </span>
          <a href="https://github.com/DouaGannouni" className="icon-link" target="_blank" rel="noopener noreferrer" title="GitHub">DouaGannouni (Gannouni Doua)</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

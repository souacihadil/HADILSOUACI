import "./Contact.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";


export default function Contact({id="contact"}) {
  return (
    <section id={id} className="contact-section">
  <div className="contact-wrapper">

    {/* LEFT SIDE */}
    <div className="contact-left">
      <span className="contact-label">GET IN TOUCH</span>
      <h1 className="contact-title">CONTACT ME</h1>
      <div className="line"></div>

      <p className="contact-text">
        Interested in working together or have a question?
        Feel free to send me a message.
      </p>

      <div className="contact-links">
          <a href="mailto:devlopperweb10@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/souacihadil"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/souaci-hadil-3726412b4/"><FaLinkedinIn /></a>
     </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="contact-right">
      <form className="contact-form">
        <div className="input-group">
          <input type="text" required />
          <label>Your Name</label>
        </div>

        <div className="input-group">
          <input type="email" required />
          <label>Your Email</label>
        </div>

        <div className="input-group">
          <textarea required></textarea>
          <label>Your Message</label>
        </div>

        <button
  type="button"
  onClick={() => {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    window.location.href = `mailto:devlopperweb10@gmail.com?subject=Message from ${name}&body=${message} (${email})`;
  }}
  className="send-btn"
>
  SEND MESSAGE
</button>

      </form>
    </div>

  </div>
</section>

  );
}


import { useState, useEffect } from "react";
import { init, send } from "emailjs-com";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("send", contactForm);
    const serviceId = "service_i272mah";
    const templateId = "template_jay1hfx";
    try {
      const response = await send(serviceId, templateId, contactForm);
      if (response) {
        console.log("SUCCESS", response.status, response.text);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    init("user_5slaIL2BmAySQaiSvoKfW");
  }, []);

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6">
        <input
          id="from"
          name="fromName"
          placeholder="Your Name"
          type="text"
          className="input"
          onChange={handleChange}
          required
        />
        <input
          id="sender-email"
          name="senderEmail"
          placeholder="Email"
          type="email"
          className="input"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <input
          id="subject"
          name="subject"
          placeholder="Subject"
          type="text"
          className="input col-span-2"
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          type="text"
          className="input resize-none col-span-2"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

import { useState, useEffect } from "react";
import { init, send } from "emailjs-com";
import { SkButton } from "@/components/ui/sk-button";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({});

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = async (event: any) => {
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
        <div className="form-input">
          <input
            id="from"
            name="fromName"
            placeholder="Your Name"
            type="text"
            className="input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div className="form-input col-span-2">
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            type="text"
            className="input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="input resize-none"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <SkButton>Send Message</SkButton>
      </div>
    </form>
  );
};

export default ContactForm;

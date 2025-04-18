import React from "react";
import "./Contactform.css"; // Importing the external CSS file
import Form from "../Form/Form";

const ContactForm = () => {
  const formFields = [
    { type: "text", name: "name", placeholder: "Your Name" },
    { type: "email", name: "email", placeholder: "Your Email" },
    {
      type: "textarea",
      name: "message",
      placeholder: "Your Message",
      rows: 5,
    },
  ];
 
  const contactDetails = [
    {
      title: "Address",
      content: [
        "31, Tavawala Building, 147, Lohar Chawl, Kalbadevi, Mumbai, Maharashtra 400002",
      ],
      email: [],
    },
    {
      title: "Contact Info",
      content: [
        { text: "+91 22 22068032", link: "tel:+912222068032" },
        { text: "+91 22 22083857", link: "tel:+912222083857" },
      ],
      email: [
        { text: "Sales@saiego.com", link: "mailto:Sales@saiego.com" },
        { text: "Info@saiego.com", link: "mailto:Info@saiego.com" },
      ],
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-leftSide">
        <div className="contact-details">
          {contactDetails.map((detail, index) => (
            <div key={index} className="contact-details-section">
              <h3 className="contact-details-title">{detail.title}</h3>
              {detail.content.map((item, i) => (
                <p key={i}>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <a href={item.link} className="contact-link">
                      {item.text}
                    </a>
                  )}
                </p>
              ))}
              {detail.email.map((item, i) => (
                <p key={i}>
                  <a href={item.link} className="contact-link">
                    {item.text}
                  </a>
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.381499845386!2d72.8304167!3d18.9464203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce21a5c99ac7%3A0xe11eab703d625032!2sGIRISH%20EGO%20CONTROLS!5e1!3m2!1sen!2sin!4v1738935194692!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="contact-rightSide">
        {/* <h2 className="contact-title">Contact Us</h2> */}
        {/* <form className="contact-form">
          {formFields.map((field, index) => (
            <div key={index}>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  className="contact-textarea"
                  required
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="contact-input"
                  required
                />
              )}
            </div>
          ))}
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form> */}
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
          alt="Contact Us image "
        />
        <Form
          formheading="Send us your Query "
          formbutton="Send"
          formFields={formFields}
          popupMessage="Sorry for the inconvenience. Kindly call us for a better experience."
          onSubmit={(data) => data}
        />
      </div>
    </div>
  );
};

export default ContactForm;

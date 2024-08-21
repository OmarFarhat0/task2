import GoogleMap from "../googleMap/GoogleMap";
import ContactCard from "../contactCard/ContactCard";
import Form from "../form/Form";

import "./contactUs.css";

export default function ContactUs({ nameSection, title, srcImage }) {
  return (
    <>
      <div className="introduce">
        <h2>| {nameSection}</h2>
        <h3>{title}</h3>
      </div>
      <div className="googleMap">
        <GoogleMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.63611631437294!2d55.27990293313153!3d25.197223729146433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2z2K_YqNmKINmF2YjZhA!5e0!3m2!1sar!2snl!4v1724239731562!5m2!1sar!2snl"
          height="500px"
        />
      </div>

      <div className="form">
        <Form
          data={[
            {
              label: "Full Name",
              type: "username",
              placeholder: "Your name...",
            },
            {
              label: "Email Address",
              type: "email",
              placeholder: "Your E-mail...",
            },
            { label: "Subject", type: "text", placeholder: "Subject..." },
            {
              label: "Message",
              type: "textarea",
              placeholder: "Your Message...",
            },
          ]}
          contentSubmit="Send Message"
        />
      </div>

      <div className="items">
        <div className="contactCard">
          <ContactCard
            srcImg="../../../public/images/contactUs/email-icon.png"
            text1="info@villa.co"
            text2="Business Email"
          />
        </div>
        <div className="contactCard">
          <ContactCard
            srcImg="../../../public/images/contactUs/email-icon.png"
            text1="info@villa.co"
            text2="Business Email"
          />
        </div>
      </div>

      <div className="blockOne">
        <img src={srcImage} />
      </div>

      <div className="blockTwo"></div>
    </>
  );
}

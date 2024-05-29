import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";




const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86e15948-1db4-49bc-9327-86caf0362e00");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="msg_icon" />{" "}
        </h3>
        <p>
          Thank you for reaching out to us! Your message is important to us, and
          we appreciate you taking the time to get in touch. Our team will
          review your inquiry and respond as soon as possible. In the meantime,
          feel free to explore our website for more information about our
          products and services. If you have any urgent concerns, please don not
          hesitate to contact us directly at [insert contact information].
          Thanks again for choosing to connect with us!
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="mail_icon" />
           rajkiranDeveloper{" "}
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="phone_icon" />
            +1 123-456-7890
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="location_icon" />
            77 Massachusetts Ave,Cambridge <br /> MA 02139,United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="white_arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

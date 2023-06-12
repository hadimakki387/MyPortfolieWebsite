import React, { useState } from "react";
import Cursor from "../components/Cursor";
import NavBar from "../components/Home/NavBar";
import { Fade } from "react-reveal";
import NextButton from "../components/NextButton";
import SocialMediaLinks from "../components/Home/SocialMediaLinks";
import SideBar from "../components/SideBar";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailSubject = "New Message";
    const recipient = "hmakki387@gmail.com";
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  function Button() {
    return (
      <button className="btn btn-default" type="submit" aria-label="Send Message">
        Send Message
      </button>
    );
  }
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <div className="snipcss-RDU5U">
    <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <Cursor />
      <Fade top distance="10%" delay={200}>
        <NavBar toggleSideBar={toggleSideBar}/>
      </Fade>

      <grammarly-extension
        data-grammarly-shadow-root="true"
        class="dnXmp style-cgcGl"
        id="style-cgcGl"
      ></grammarly-extension>
      <grammarly-extension
        data-grammarly-shadow-root="true"
        class="dnXmp style-tQsbA"
        id="style-tQsbA"
      ></grammarly-extension>
      <div className="ContactDiv">
        <Fade top distance="10%" delay={400}>
          <h1 className="AboutTitle">Contact.</h1>
        </Fade>
        <Fade top distance="10%" delay={600}>
          <article>
            <p>
              shoot me an email directly on
              <b className="MyEmail"> hmakki387@gmail.com</b>
            </p>
          </article>
        </Fade>
      </div>

      <br />

      <form onSubmit={handleSubmit}>
        <Fade top distance="10%" delay={800}>
          <div className="fields">
            <div className="field half">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control NameArea TransparentInput"
                placeholder="Name"
                aria-required="true"
                required=""
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="field half">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control TransparentInput"
                placeholder="Email"
                aria-required="true"
                required=""
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                rows="5"
                className="form-control TextArea"
                placeholder="Message"
                aria-required="true"
                required=""
                spellcheck="false"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
          </div>
        </Fade>
        <Fade bottom distance="10%" delay={1000}>
          <Button />
        </Fade>
      </form>
      <Fade bottom distance="10%" delay={1200}>
        <div>
          <NextButton Content="Go Back Home" URI="/" />
          <div className="WindowsSocialMediaDiv">
            <SocialMediaLinks />
          </div>
          
        </div>
      </Fade>
    </div>
  );
}

export default ContactMe;

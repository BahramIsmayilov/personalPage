import React, { useState } from "react";
import Title from "../components/Title";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  return (
    <article className="article">
      <Title title="drop a line" />
      <div className="contact-email">
        {name.length && email.length && textarea.length ? null : (
          <p>please fill out all fields</p>
        )}
        <form action="https://formspree.io/xgewoqkp" method="POST">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="text">your message</label>
          <textarea
            name="message"
            id="text"
            rows="4"
            value={textarea}
            onChange={e => setTextarea(e.target.value)}
          ></textarea>
          {name.length && email.length && textarea.length ? (
            <input type="submit" value="submit here" className="btn"></input>
          ) : (
            <button className="btn" disabled>
              please fill out all fields
            </button>
          )}
        </form>
      </div>
    </article>
  );
};

export default ContactInfo;

import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import img from "../img/contact.jpeg";
import ContactInfo from "../components/ContactInfo";

const Contant = () => {
  return (
    <section className="section">
      <Hero img={img} title="contact me" description="let`s contact" />
      <ContactInfo />
      <Footer />
    </section>
  );
};

export default Contant;

import React from "react";
import { info } from "../data";

function Contact() {
  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h2 style={{ color: "#3d5afe" }}>Contact</h2>
      <p>Interested in connecting with me? Reach out through email!</p>
      <a
        href={`mailto:${info.email}`}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "#3d5afe",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          marginTop: 12,
        }}
      >
        Email Me
      </a>
    </section>
  );
}

export default Contact;
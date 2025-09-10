import React from "react";
import { info } from "../data";

function Home() {
  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: 120, borderRadius: "50%", marginBottom: 20 }}
      />
      <h1 style={{ fontSize: "2.5em", color: "#3d5afe" }}>{info.name}</h1>
      <p style={{ fontSize: "1.2em", maxWidth: 600, margin: "16px auto" }}>{info.about}</p>
    </section>
  );
}

export default Home;
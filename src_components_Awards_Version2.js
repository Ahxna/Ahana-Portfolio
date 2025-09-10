import React from "react";
import { awards } from "../data";

function Awards() {
  return (
    <section style={{ padding: "40px" }}>
      <h2 style={{ color: "#3d5afe" }}>Awards & Recognition</h2>
      {awards.map((award, idx) => (
        <div key={idx} style={{ marginBottom: 24, borderBottom: "1px solid #eee", paddingBottom: 16 }}>
          <h3>{award.title} <span style={{ color: "#555", fontSize: "0.9em" }}>({award.year})</span></h3>
          <p>{award.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Awards;
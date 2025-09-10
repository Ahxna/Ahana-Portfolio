import React from "react";
import { extracurriculars } from "../data";

function Extracurriculars() {
  return (
    <section style={{ padding: "40px" }}>
      <h2 style={{ color: "#3d5afe" }}>Extracurriculars & Interests</h2>
      {extracurriculars.map((activity, idx) => (
        <div key={idx} style={{ marginBottom: 24, borderBottom: "1px solid #eee", paddingBottom: 16 }}>
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <span style={{ fontSize: "0.9em", color: "#555" }}>{activity.date}</span>
        </div>
      ))}
    </section>
  );
}

export default Extracurriculars;
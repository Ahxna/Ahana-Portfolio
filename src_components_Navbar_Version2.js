import React from "react";

const navItems = [
  { name: "Home", value: "home" },
  { name: "Extracurriculars", value: "extracurriculars" },
  { name: "Projects", value: "projects" },
  { name: "Awards", value: "awards" },
  { name: "Contact", value: "contact" },
];

function Navbar({ setPage }) {
  return (
    <nav style={{ display: "flex", gap: 20, padding: 16, background: "#3d5afe", color: "white" }}>
      {navItems.map((item) => (
        <button
          key={item.value}
          onClick={() => setPage(item.value)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
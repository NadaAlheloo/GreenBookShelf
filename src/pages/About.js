import React from "react";

export default function About() {
  return (
    <section className="page">
      <h1 className="pageTitle">About</h1>
      <p className="pageLead">
        Green Bookshelf is a small component-based React SPA built for a Web Applications (MERN) group project.
        It demonstrates routing, shared layout (header), and client-side filtering/sorting using simple
        JavaScript array methods.
      </p>
      <div className="aboutBox">
        <h2 className="aboutTitle">What you can demo</h2>
        <ul className="list">
          <li>Persistent header + navigation across all pages</li>
          <li>Home page: search + sort (combined state logic)</li>
          <li>Responsive layout (mobile + desktop)</li>
          <li>Mock data stored in parent component state</li>
        </ul>
      </div>
    </section>
  );
}

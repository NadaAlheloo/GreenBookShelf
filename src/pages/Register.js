import React from "react";

export default function Register() {
  return (
    <section className="page">
      <h1 className="pageTitle">Register</h1>
      <p className="pageLead">This is a placeholder form (no backend yet).</p>

      <form className="form">
        <label className="label" htmlFor="regName">Full name</label>
        <input id="regName" className="input" type="text" placeholder="Your name" />

        <label className="label" htmlFor="regEmail">Email</label>
        <input id="regEmail" className="input" type="email" placeholder="you@example.com" />

        <label className="label" htmlFor="regPass">Password</label>
        <input id="regPass" className="input" type="password" placeholder="Create a password" />

        <button className="btn" type="button">Register (stub)</button>
      </form>
    </section>
  );
}

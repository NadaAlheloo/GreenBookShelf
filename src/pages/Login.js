import React from "react";

export default function Login() {
  return (
    <section className="page">
      <h1 className="pageTitle">Login</h1>
      <p className="pageLead">This is a placeholder form (no backend yet).</p>

      <form className="form">
        <label className="label" htmlFor="loginEmail">Email</label>
        <input id="loginEmail" className="input" type="email" placeholder="you@example.com" />

        <label className="label" htmlFor="loginPass">Password</label>
        <input id="loginPass" className="input" type="password" placeholder="••••••••" />

        <button className="btn" type="button">Login (stub)</button>
      </form>
    </section>
  );
}

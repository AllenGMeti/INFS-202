import { useState } from "react";
import { submitContactForm } from "../services/api";

export default function AddItem() {
  const [form, setForm] = useState({ fname: "", lname: "", email: "", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    await submitContactForm(form);
    setForm({ fname: "", lname: "", email: "", message: "" });
  }

  return (
    <footer>
      <div className="box-model">
      <div className="two">
        <p>Get in contact</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" value={form.fname} onChange={e => setForm({ ...form, fname: e.target.value })} /><br />

          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" value={form.lname} onChange={e => setForm({ ...form, lname: e.target.value })} /><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /><br />

          <label htmlFor="message">Message:</label><br />
          <input type="text" id="message" name="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /><br /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    </footer>
  );
}

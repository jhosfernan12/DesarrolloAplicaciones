import React, { useState } from "react";

const FormCombine = () => {
  const [form, setForm] = useState({ name: "", role: "Soldier" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`¡Reclutado! ${form.name} como ${form.role}`);
    setForm({ name: "", role: "Soldier" });
  };

  return (
    <form className="form-combine" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <select name="role" value={form.role} onChange={handleChange}>
        <option>Soldier</option>
        <option>Overwatch</option>
        <option>Advisor</option>
      </select>
      <button className="button" type="submit">Únete al Combine</button>
    </form>
  );
};

export default FormCombine;

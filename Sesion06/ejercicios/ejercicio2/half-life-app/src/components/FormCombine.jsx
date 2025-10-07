import React, { useState } from "react";

export default function FormCombine() {
  const [form, setForm] = useState({ name: "", faction: "Overwatch", rank: "Soldier" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert(`Ficha recibida.\nNombre: ${form.name}\nFacción: ${form.faction}\nRango: ${form.rank}\nBienvenido al Combine.`);
    setForm({ name: "", faction: "Overwatch", rank: "Soldier" });
  };

  return (
    <form className="form-combine" onSubmit={submit}>
      <label>Identificación</label>
      <input name="name" value={form.name} onChange={change} placeholder="Nombre / ID" required />

      <label>Facción</label>
      <select name="faction" value={form.faction} onChange={change}>
        <option>Overwatch</option>
        <option>Civil Administration</option>
        <option>Unit</option>
      </select>

      <label>Rango deseado</label>
      <select name="rank" value={form.rank} onChange={change}>
        <option>Soldier</option>
        <option>Strider Pilot</option>
        <option>Advisor</option>
      </select>

      <button className="button" type="submit">Enviar ficha</button>
    </form>
  );
}

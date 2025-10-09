import React, { useState } from "react";

export default function FormCombine() {
  const [formData, setFormData] = useState({
    name: "",
    rank: "",
    loyalty: "high",
    skills: "",
    clearance: "level1"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Solicitud enviada para procesamiento:\nNombre: ${formData.name}\nRango solicitado: ${formData.rank}\nNivel de autorización: ${formData.clearance}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="form-combine" onSubmit={handleSubmit}>
      <label>
        Identificación del sujeto:
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ingrese designación completa"
          required 
        />
      </label>

      <label>
        Rol solicitado:
        <select name="rank" value={formData.rank} onChange={handleChange} required>
          <option value="">Seleccionar asignación</option>
          <option value="civil">Unidad Civil Metropolitana</option>
          <option value="soldier">Soldado de Asalto</option>
          <option value="elite">Élite</option>
          <option value="officer">Oficial de Campo</option>
        </select>
      </label>

      <label>
        Nivel de autorización:
        <select name="clearance" value={formData.clearance} onChange={handleChange}>
          <option value="level1">Nivel 1 - Básico</option>
          <option value="level2">Nivel 2 - Restringido</option>
          <option value="level3">Nivel 3 - Confidencial</option>
        </select>
      </label>

      <label>
        Evaluación de lealtad:
        <select name="loyalty" value={formData.loyalty} onChange={handleChange}>
          <option value="high">Alta - Verificada</option>
          <option value="medium">Media - En observación</option>
          <option value="low">Baja - Requiere reeducación</option>
        </select>
      </label>

      <label>
        Capacidades especiales:
        <textarea 
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Describa aptitudes relevantes para la causa..."
          rows="3"
        />
      </label>

      <button type="submit" className="action-button">
        Enviar para procesamiento
      </button>
    </form>
  );
}
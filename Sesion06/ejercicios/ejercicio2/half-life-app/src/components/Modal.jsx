import React, { useEffect } from "react";

export default function Modal({ children, onClose, title }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal-window" onMouseDown={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </header>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

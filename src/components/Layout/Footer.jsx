import { useEffect, useState } from "react";

const Footer = () => {
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    fetch("/data/TarjetaPersonal.json")
      .then((response) => response.json())
      .then((data) => setPersonal(data));
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#f5e6dc",
        padding: "40px",
        marginTop: "50px",
      }}
    >
      <h2>___artesanaaa___</h2>

      <p>
        Tienda online de tejidos artesanales hechos
        a crochet.
      </p>

      <h2 style={{ marginTop: "30px" }}>
        Nuestro equipo
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {personal.map((persona) => (
          <div
            key={persona.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              width: "220px",
              backgroundColor: "white",
            }}
          >
            <img
              src={persona.imagen}
              alt={persona.nombre}
              width="200"
              style={{
                borderRadius: "10px",
              }}
            />

            <h3>{persona.nombre}  {persona.apellido}</h3>

            <p>{persona.rol}</p>
            <p>{persona.contacto}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
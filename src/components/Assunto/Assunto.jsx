import React, { useEffect, useState } from "react";

export default function Assunto() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        if (!response.ok) {
          throw new Error(`Erro na solicitacao : ${response.status}`);
        }
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error.message);
      }
    };
    fetchCategoria();
  }, []);

  return (
    <ul className="lista-assuntos">
        {categorias.map((categoria) => (
      <li key={categoria.id} className="flex-assuntos">
        <input type="checkbox" />
        <p>{categoria.title}</p>
      </li>

        ))}
    </ul>
  );
}

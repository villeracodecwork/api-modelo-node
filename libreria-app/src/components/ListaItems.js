import React from "react";

const ListaItems = ({libros}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Edición</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro) => (
          <tr key={libro.id_libro}>
            <td>{libro.id_libro}</td>
            <td>{libro.titulo_libro}</td>
            <td>{libro.autor}</td>
            <td>{libro.edicion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaItems;

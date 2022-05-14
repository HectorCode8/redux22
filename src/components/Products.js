import React, { Fragment } from "react";

const Products = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre del Producto</th>
            <th scope="col">Precio del Producto</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Fragment>
  );
};

export default Products;

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';
const Producto = ({productos}) => (
/*<div className="single-producto">
    <h2>{id}</h2>
    <h2>{nombre_producto}</h2>
    <p>{referencia}</p>
    <p>{precio}</p>
    <p>{peso}</p>
    <p>{categoria}</p>
    <p>{stock}</p>
    <p>{fecha_creacion}</p>
    <p>{fecha_venta}</p>
</div>*/
<TableContainer component={Paper}>
<Table aria-label="sticky table">
  <TableHead>
    <TableRow>
      <TableCell>ID Producto</TableCell>
      <TableCell align="left">Nombre producto</TableCell>
      <TableCell align="left">Referencia</TableCell>
      <TableCell align="left">Precio</TableCell>
      <TableCell align="left">Peso</TableCell>
      <TableCell align="left">Categoria</TableCell>
      <TableCell align="left">Stock</TableCell>
      <TableCell align="left">Fecha creacion</TableCell>
      <TableCell align="left">Fecha ultima venta</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {productos.map((row) => (
      <TableRow key={row.name}>
        <TableCell align="left">{row.id}</TableCell>
        <TableCell align="left">{row.nombre_producto}</TableCell>
        <TableCell align="left">{row.referencia}</TableCell>
        <TableCell align="left">{row.precio}</TableCell>
        <TableCell align="left">{row.peso}</TableCell>
        <TableCell align="left">{row.categoria}</TableCell>
        <TableCell align="left">{row.stock}</TableCell>
        <TableCell align="left">{row.fecha_creacion}</TableCell>
        <TableCell align="left">{row.fecha_venta}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
)

Producto.propTypes = {
    nombre_producto: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    peso: PropTypes.number.isRequired,
    categoria: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    fecha_creacion: PropTypes.string.isRequired,
    fecha_venta: PropTypes.string,


}

export default Producto
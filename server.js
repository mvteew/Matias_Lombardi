import express from "express";
import { manager } from "./usermanager.js";

const app = express()
// Ruta para obtener todos los productos
app.get('/products', (req, res) => {
  const limit = req.query.limit || products.length;
  res.json(products.slice(0, limit));
});

// Ruta para obtener un producto por su ID
app.get('/products/:id', (req, res) => {
  const id = +(req.params.id);
  const product = products.find((p) => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'El producto no existe' });
  }
});

// Iniciar el servidor en el puerto 8080
app.listen(8080, () => {
  console.log('Servidor iniciado en el puerto 8080');
});

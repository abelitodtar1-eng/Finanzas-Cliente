const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard_inventario_oscuro.html'));
});

app.listen(PORT, () => {
  console.log(`Finanzas Cliente corriendo en puerto ${PORT}`);
});

const mysql = require('mysql');

const connection = mysql.createConnection({ 
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bd_sanisidro',
  port: '3306'
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos San Isidro');
});
//cerrar el servidor con ctrl+c
module.exports = connection;

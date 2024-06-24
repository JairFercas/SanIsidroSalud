//este modulo ejecuta todo el servidor y lo inicializa
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql');
const myConnection = require('express-myconnection')

const app = express()

//importing Routes
const pacienteRoutes = require('./routes/paciente')

//setting
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))


//middlewares - funciones
app.use(morgan('dev'))
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_sanisidro',
    port: '3306'
}, 'single'))
app.use(express.urlencoded({extended:false}))


//routes
app.use('/', pacienteRoutes)

//static files
app.use(express.static(path.join(__dirname, 'public')))


//starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port 3000')
})
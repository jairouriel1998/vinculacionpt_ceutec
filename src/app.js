const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


//importing routes
 const customerRoutes = require('./routes/customer');



//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));

/*Remoto*/
app.use(myConnection(mysql, {
    host: 'remotemysql.com', 
    user: 'OuYNijpaSl',
    password: 'klc9b82B6s',
    port:3306,
    database: 'OuYNijpaSl'
}, 'single'));

/* Original
app.use(myConnection(mysql, {
    host: 'localhost', 
    user: 'root',
    password: 'Uriel1998',
    port:3306,
    database: 'airisdb'
}, 'single'));
*/

app.use(express.urlencoded({extended: false}));

//routes 
app.use(customerRoutes);


//static files
app.use(express.static(path.join(__dirname, 'public')));


//starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

//*************************** VERSION CONTROL ***************************/

//      |       Author     |       Description          |    Date    |
//      |------------------|--------------------------- |------------|
//           Damont05      | Creation Server Express    | 09-12-2023
//      |----------------- |--------------------------- |------------|
//   

//**********************************************************************/

//IMPORTS
import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';

import { router as viewsRouter } from './routes/company-router.js';


const app = express();

//PORT
let port = process.env.PORT || 8080;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/pages'));

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public'))); //static public

//ROUTES
//route views
app.use('/', viewsRouter);


//SERVER
const server =  app.listen(port, () =>{
    console.log(`Server on port ${port}`);
});
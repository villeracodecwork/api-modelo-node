const express = require("express");
const mysql= require('mysql')
const myconn= require('express-myconnection')
const routes=require('./routes')
const cors=require('cors')

const app = express();
app.set("port", process.env.PORT || 9000);
const bdOptions={
    host:'localhost',
    port: 3306,
    user: 'udianasis',
    password: 'ANTONIO1',
    database:'libreria'

}

////midlewares
app.use(myconn(mysql,bdOptions,'single'))
app.use(express.json())
app.use(cors())

//routes
app.get('/',(req,res)=>{
  res.send('bienbenido a la app 2')
})

app.use('/api',routes)

///servidor en funcionamiemto

app.listen(app.get("port"), () => {
  console.log("servidor activo en puerto", app.get("port"));
});




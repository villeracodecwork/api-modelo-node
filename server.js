const express = require("express");
const mysql= require('mysql')
const myconn= require('express-myconnection')
const routes=require('./routes')

const app = express();
app.set("port", process.env.PORT || 9000);
const bdOptions={
    host:'localhost',
    port: 3306,
    user: 'udianasis',
    password: 'ANTONIO1',
    database:'libreria'

}

////midleware
app.use(myconn(mysql,bdOptions,'single'))

app.use(express.json())

//routes
app.get('/',(req,res)=>{
  res.send('bienbenido a la app 2')
})

app.use('/api',routes)

///servidor en funcionamiemto

app.listen(app.get("port"), () => {
  console.log("servidor activo en puerto", app.get("port"));
});




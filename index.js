const express = require('express')
const app = express()
const port = 2020

app.use(express.json())





const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const URL = 'mongodb://127.0.0.1:27017'
const database = 'API-MongoDB'

MongoClient.connect(URL,{useNewUrlParser : true, useUnifiedTopology: true},(err,client) => {
    if(err){
      return  console.log(`Gagal Koneksi`)
    }  
    app.get('/users', (req, res) => {
        '<h1>Welcome</h1>'
    
    })

    app.post('/users',(req,res) =>{
        //mengambil property name dan age dari req body
        const {name, age} = req.body

        res.send(
            {name,age}
        )
        
    })

})



app.listen(port, () =>{ console.log('API running at port ' + port)})
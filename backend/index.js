const express = require('express')
const cors = require('cors');
require('./DB/config')
const users = require('./DB/users')
const product = require('./DB/product')
const app = express();

app.use(express.json())
app.use(cors()),
app.post('/register', async (req,res)=>{
    const data = new users(req.body)
    let result = await data.save() 
    result = result.toObject();
    delete result.pass
    res.send(result);
})

app.post('/login',async(req,res)=>{
    if(req.body.pass && req.body.email){
        let user = await users.findOne(req.body).select('-pass')
        if(user){
            res.send(user)
        }else{
            res.send({result:"result not found"})
        }
       
    }else{
        res.send({result:"result not found"})
    }
   

});

app.post('/add_product', async (req,res)=>{
    let data =  new product(req.body)
    let result = await data.save()
    res.send(result)
});



app.listen(3200,()=>{
    console.log("Working on 3200 port")
});
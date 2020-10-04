const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoClient=require('mongodb').MongoClient;
const nodemailer=require('nodemailer');
let db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.get('/users',(req,res)=>{
    db.collection('users').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data);
    })
});

app.get('/users/:id',(req,res)=>{
    db.collection('users').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data.find(e=>e._id==req.params.id));
    })
});

app.post('/users',(req,res)=>{
    console.log(req.body);
    db.collection('users').insertOne({_id:req.body.id,email:req.body.email,name:req.body.name,
        surname:req.body.surname,old:req.body.old,password:req.body.password,status:req.body.status,
        familyStatus:req.body.familyStatus,interests:req.body.interests,purpose:req.body.purpose,
        links:req.body.links,rating:req.body.rating},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
    })
    res.sendStatus(200);
});

app.put('/users/:id',(req,res)=>{
    db.collection('users').updateOne({_id: +(req.params.id)},{$set:{...req.body}},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.delete('/users/:id',(req,res)=>{
    db.collection('users').deleteOne({_id: +(req.params.id)},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.get('/userstoreg',(req,res)=>{
    db.collection('userstoreg').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data);
    })
});

app.get('/userstoreg/:id',(req,res)=>{
    db.collection('userstoreg').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data.find(e=>e._id==req.params.id));
    })
});

app.post('/userstoreg',(req,res)=>{
    console.log(req.body);
    db.collection('userstoreg').insertOne({_id:req.body.id,email:req.body.email,name:req.body.name,
        surname:req.body.surname,old:req.body.old,password:req.body.password,status:req.body.status,
        familyStatus:req.body.familyStatus,interests:req.body.interests,purpose:req.body.purpose,
        links:req.body.links,rating:req.body.rating},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
    })
    res.sendStatus(200);
});

app.delete('/userstoreg/:id',(req,res)=>{
    db.collection('userstoreg').deleteOne({_id: +(req.params.id)},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

mongoClient.connect('mongodb://localhost:27017/TravelParty',{useNewUrlParser: true, useUnifiedTopology: true},(err,data)=>{
    if(err) return console.log(err);
    db=data.db('TravelParty');
    app.listen(5000,()=>{console.log('a nyka idi syda, padal')});
})
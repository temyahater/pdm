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
        links:req.body.links,aboutSelf:req.body.aboutSelf,feedbacks:req.body.feedbacks,rating:req.body.rating},(err,result)=>{
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
        links:req.body.links,aboutSelf:req.body.aboutSelf,feedbacks:req.body.feedbacks,rating:req.body.rating},(err,result)=>{
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

app.get('/rooms',(req,res)=>{
    db.collection('rooms').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data);
    })
});

app.get('/rooms/:id',(req,res)=>{
    db.collection('rooms').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data.find(e=>e._id==req.params.id));
    })
});

app.post('/rooms',(req,res)=>{
    console.log(req.body);
    db.collection('rooms').insertOne({_id:req.body.id,name:req.body.name,usersinvite:req.body.usersinvite,users:req.body.users,
        tour:req.body.tour,maxCount:req.body.maxCount,description:req.body.description,status:req.body.status,
        time:req.body.time,messages:req.body.messages,price:req.body.price},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
    })
    res.sendStatus(200);
});

app.put('/rooms/:id',(req,res)=>{
    db.collection('rooms').updateOne({_id: +(req.params.id)},{$set:{...req.body}},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.delete('/rooms/:id',(req,res)=>{
    db.collection('rooms').deleteOne({_id: +(req.params.id)},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.get('/tours',(req,res)=>{
    db.collection('tours').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data);
    })
});

app.post('/tours',(req,res)=>{
    console.log(req.body);
    db.collection('tours').insertOne({_id:req.body.id,name:req.body.name,link:req.body.link,
        tourInfo:req.body.tourInfo,price:req.body.price,photo:req.body.photo},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
    })
    res.sendStatus(200);
});

app.delete('/tours/:id',(req,res)=>{
    db.collection('tours').deleteOne({_id: +(req.params.id)},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.get('/feedbacks',(req,res)=>{
    db.collection('feedbacks').find().toArray((err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(data);
    })
});

app.post('/feedbacks',(req,res)=>{
    console.log(req.body);
    db.collection('feedbacks').insertOne({_id:req.body.id,user:req.body.user,feedback:req.body.feedback,like:req.body.like},(err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
    })
    res.sendStatus(200);
});

app.delete('/feedbacks/:id',(req,res)=>{
    db.collection('feedbacks').deleteOne({_id: +(req.params.id)},(err,result)=>{
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
    app.listen(5000,()=>{console.log('a nyka idi syda, padal\'')});
})
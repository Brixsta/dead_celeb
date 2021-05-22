require("dotenv").config();

const express = require('express');
const app = express();
const db = require('./db/db_configuration');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/api/dead_celeb', (req,res)=>{
    db.query('SELECT * FROM celeb;', (err,data)=>{
        if(err) {
            console.log('THIS IS THE ERROR: ', err);
            res.append('Content-Type', 'plain/text');
            res.status(404).send('An error has occurred!');
        } else {
            res.append('Content-Type', 'application/json');
            res.json(data.rows);
        }
    });
});


app.get('/api/dead_celeb/:id', (req,res)=>{
    let {id} = req.params;

    console.log('THIS IS ID:', id);
    db.query('SELECT * FROM celeb WHERE celebId = $1;', [id], (err,data)=>{
        if(err) {
            console.log('THIS IS THE ERROR: ', err);
            res.append('Content-Type', 'plain/text');
            res.status(404).send('An error has occurred!');
        } else {
            res.append('Content-Type', 'application/json');
            res.json(data.rows);
        }
    });
});

app.post('/api/dead_celeb', (req,res)=>{
    const newCeleb = req.body;

    db.query('INSERT INTO celeb (firstName, lastName, deathId) VALUES ($1, $2, $3);', [newCeleb.firstName,
    newCeleb.lastName, newCeleb.deathId], (err,data)=>{
        if(err) {
            res.append('Content-Type', 'plain/text');
            res.status(400).send(`An error has occurred!`);
        } else {
            res.append('Content-Type', 'application/json');
            res.status(200).send('Congrats your new dead_celeb was added!');
        }
    });
});

app.put('/api/dead_celeb/:id', (req,res)=>{
    const {id} = req.params;
    const celebAttributes = req.body;

    db.query('UPDATE celeb SET firstName=$1, lastName=$2, deathId=$3 WHERE celebId=$4;', [celebAttributes.firstName, 
    celebAttributes.lastName, celebAttributes.deathId, id], (err,data)=>{
        if(err) {
            res.append('Content-Type', 'plain/text');
            res.status(404).send('Unable to update your dead_celeb.');
        } else {
            res.append('Content-Type', 'application/json');
            res.status(200).send('Congrats your dead_celeb has been modified.');
        }
    });
});

app.delete('/api/dead_celeb/:id', (req,res)=>{
    const {id} = req.params;

    db.query('DELETE FROM celeb WHERE celebId=$1;', [id], (err,data)=>{
        if(err) {
            res.append('Content-Type', 'plain/text');
            res.status(404).send('Your dead_celeb was unable to be deleted.');
        } else {
            res.append('Content-Type', 'application/json');
            res.status(200).send('Congrats your dead_celeb was deleted');
        }
    });
});


app.use(express.json());
app.use(express.static('public'));

app.listen(process.env.PORT, () => {
    console.log('listening on Port 9000');
});

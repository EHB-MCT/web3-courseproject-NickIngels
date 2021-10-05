// Express

const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const bgRouter = express.Router();



// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    ObjectID,
    ObjectId
} = require('mongodb');
let db;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Mongo
const DB_NAME = 'Todos';
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Admin:Admin@cluster0.phblm.mongodb.net/Todos?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});

app.get('/Todos', (req, res) => {
    const collection = db.collection("LijstMetTodos");

    collection.find(req.query).toArray((error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(result)
    });
});

app.post('/TodoYannis', (req, res) => {
    const collection = db.collection("LijstMetTodos");

    collection.insertOne(req.body).then(result => {
        console.log(result);
    });
    res.send("test");
});

app.post('/TodoNick', (req, res) => {
    const collection = db.collection("LijstMetTodos");

    collection.insertOne(req.body).then(result => {
        console.log(result);
    });
    res.send("test");
});

app.post('/TodoJasper', (req, res) => {
    const collection = db.collection("LijstMetTodos");

    collection.insertOne(req.body).then(result => {
        console.log(result);
    });
    res.send("test");
});


app.use('/api', bgRouter);


app.get('/', (req, res) => {
    res.sendFile('/Root.html', {
        root: __dirname
    });

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    client.connect(err => {
        if (err) {
            throw err
        }
        db = client.db(DB_NAME);
        console.log(`connected to database ${DB_NAME}`);
    });
});
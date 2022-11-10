/*******************************************************************
 * @Purpose: Environment setup
*******************************************************************/
const type = process.env.npm_lifecycle_event;
const fileName = (type === '' || type === 'start') ? 'env' : type + '.env';
require('dotenv').config({ path: './environments/.'+ fileName });


/*******************************************************************
 * @Purpose: Database setup
*******************************************************************/
const db = 'PostgreSQL'; //'PostgreSQL', 'MongoDB', 'MySQL'
require('./database/'+db+'/dbConnect');


/*******************************************************************
 * @Purpose: Server setup
*******************************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/* To parse post request body */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* To handle CORS issues */
const cors = require("cors");
app.use(cors());

/* To serve static file */ 
//app.use(express.static('./public'));


/*******************************************************************
 * @Purpose: Initiate the Routers
*******************************************************************/
const rtsIndex = require('./routes/index.router');
app.use('/api/', rtsIndex);


/*******************************************************************
 * @Purpose: Handle error if any
*******************************************************************/
 app.use((err, req, res) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    } else {
        console.log(err);
    }
});


/*******************************************************************
 * @Purpose: Start the server
*******************************************************************/
 app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

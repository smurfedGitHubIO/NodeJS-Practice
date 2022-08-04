const express = require('Express');
const app = express();
const fs = require('fs');
const get_sample = require('./get_sample.js');

app.use(express.json());

app.get('/', (req, res) => {
   res.end(`<!DOCTYPE html>
            <html>
            <head>
               <meta charset="utf-8">
               <meta name="viewport" content="width=device-width, initial-scale=1">
               <title>kriel</title>
               <style type="text/css">
                  body {
                     background-color: rgb(236, 152, 42);
                  }
                  div {
                     margin: 0;
                     text-align: center;
                     color: whitesmoke;
                     width: 100%;
                     height: 50%;
                     font-size: 150px;
                     font-family: Helvetica;
                  }
               </style>
            </head>
            <body>
               <div id="welcome">Welcome user!</div>
            </body>
            </html>
   `);
})

app.listen(8000);

app.use('/get_sample', get_sample);

app.use('/things', function(req, res, next) {
   console.log("yo");
   next();
});

app.get('/things', function(req, res){
   res.send("yata");
});

app.put('/put_sample', (req, res) => {
   fs.writeFile('users.txt', req.body.name, (err) => {
      if(err){
         console.log(err);
      }
      else{
         console.log(req.body.name + " was successfully put.");
      }
   });
   res.send(req.body.name);
});
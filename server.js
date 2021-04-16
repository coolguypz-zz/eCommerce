
const express = require('express')
const port = process.env.PORT || 3000;
// const ApiError = require('./helpers/api_error')
// global.ApiError = ApiError;
// const defaultErrorHandler = require('./middleware/default_error_handler')
// const routes = require('./routes/index.js');
const path = require("path");

const app = express();


//check if req has body, change to quantity=5&my%20name=scott parse to object

// app.use(express.urlencoded({extends:false}));

app.use(express.json());

app.use(express.static(path.join(__dirname,'client','dist')))

// app.use(routes);


app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','src','index.html'))
})

// app.use(defaultErrorHandler);

app.listen(port,()=>{console.log("Server listening on localhost: "+ port)});



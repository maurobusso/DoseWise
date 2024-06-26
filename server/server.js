require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const supabase = require('../config/supabaseConfig')
const itemRoutes = require('../routes/itemRoutes')

const app = express();

//probably remove the or 8000 because in the script.js the fetch path is not dinamic
const port = process.env.PORT || 8000

//test connection to supabase
supabase.from('items').select('id').range(0,0)
    .then(response => {
        if(response.data){
            console.log('Successfully connected to Supabase!')
        }else if(response.error){
            console.error('Error connectiong to supabase', response.error.message)
        }
    })
    .catch(error => {
        console.error('Error testing Supabase connection:', error);
    });

//middleware    

//enable cors
app.use(cors())

//serve static files 
//the second line is an absolute path which is more verbose but More reliable, 
//as it always resolves to the intended public directory regardless of the working directory. where the first one 
//Can be error-prone if the server is started from a different directory.
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '../public')));


//help server parse requests for strings or array
app.use(express.urlencoded({extended: false}))

//help server parse request for json
app.use(express.json())

//set EJS as templating engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs')

app.use('/', itemRoutes)

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('An error occurred:', err.message);
    res.status(500).send('Internal Server Error');
});

//start server
app.listen(port, () => {
    console.log(`server running on port: http://localhost:${port}`)
})

module.exports.supabase
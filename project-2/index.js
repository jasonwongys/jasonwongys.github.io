console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'martdb',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

// Get form for entering new item to cart 
app.get('/items/new',(req,res) => {
    res.render('addItem')
});

//View the index for all items
app.get('/items', (req, res) => {

    const queryText = `SELECT * FROM items`;

   pool.query(queryText,(err, queryResult) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log("Result: ", queryResult.rows);
            //console.log(queryResult.rows);
             res.render('viewItems', {items: queryResult.rows});
         };
    });
});

//View an item page 
app.get('/items/:id', (req, res) => {

    let id = req.params.id;
    const queryText = `SELECT * FROM items WHERE id = '${id}'`;

   pool.query(queryText,(err, queryResult) => {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("result", queryResult.rows);
            res.render("addItem", {items: queryResult.rows});
        };

 //response.render('home');
    });
});


app.post('/items', (request, response) => {
  //let id = request.params.id;
  let queryText = 'INSERT INTO cart (name,price,qty) VALUES ($1,$2,$3)';
  const values = [request.body.name,request.body.price,request.body.qty];

  pool.query(queryText, values, (err, queryResult) => {
            if (err) {
                console.log('Error', err);
            }
            console.log("result", queryResult.rows);
            response.render("addItem", queryResult.rows);
  });
});

//View the index for all items
app.get('/cart', (req, res) => {

    const queryText = `SELECT * FROM cart`;

   pool.query(queryText,(err, queryResult) => {
        if (err) {
            console.log('Error: ', error);
        } else {
            console.log("Result: ", queryResult.rows);
            //console.log(queryResult.rows);
             res.render('home', {cart: queryResult.rows});
         };
    });
});

// Get the item to be updated or deleted
app.get('/cart/:id/edit', (req, res) => {

    let id = req.params.id;
    const queryText = `SELECT * FROM cart WHERE item_id = '${id}'`;

   pool.query(queryText,(err, queryResult) => {
        if (err) {
            console.log("Error", err);
        } else {
            //console.log("result", queryResult.rows);
            res.render("addItem", {cart: queryResult.rows});
        };

 //response.render('home');
    });
});

// Update the item quantity in the cart 
app.put('/cart/:id', (req, res) => {

  let queryText = `UPDATE cart SET quantity = $4 WHERE id = '${id}'`;
  const values = [req.params.id, req.body.quantity];

  pool.query(queryText, values, (err, queryResult) => {
    res.render("editCartItems", {cart: queryResult.rows});
  });
});

// Get the Item ID to delete item from cart 
app.get('/cart/:id/delete', (req,res) => {
    let id = req.params.id;
    let queryText = 'SELECT * FROM cart WHERE item_id = ${id}';

    pool.query( queryText, (err, queryResult) => {
      res.render("editCartItems", {cart: queryResult.rows});
    });
});


//Delete the item from the cart 
app.delete('/cart/:id', (req, res) => {
  let id = req.params.id;
  let queryText = 'DELETE from cart WHERE item_id = `{$id}`';
  const values = [req.params.id]

  pool.query(queryText, values, (err, queryResult) => {
    res.redirect("/cart")
  });
});



/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);

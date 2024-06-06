const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const router = require('./app/router');
const app = express();
const session = require('express-session');
const cartsController = require('./app/controllers/cartController');
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "coucou",
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));
app.use(cartsController.cartsInit)
app.use(router);

app.use((req, res) => {  
  res.status(404).render("404");
 })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server start : http://localhost:${PORT} 🚀`);;
});

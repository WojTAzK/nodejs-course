const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findUserById('634164620fe9fee556041a89')
//     .then((user) => {
//       console.log('User: ', user);
//       req.user = new User(user.name, user.name, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://editor:FamilyGuy@node-course.9vcclgg.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then((result) => {
    console.log('Connected to DB!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));

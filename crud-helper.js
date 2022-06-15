// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Practice = require('./models/practiceplan');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let u, p, c, o;

// User.create({ name: 'Laura', email: 'laura@email.com', password: 'abcd' }).then(user => u = user)
// u.save()
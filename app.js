/**
 * Author: Reagan Otema
 * Vehicle Detail Page - MVC App (Render-ready)
 */
require('dotenv').config();
const express = require('express');
const app = express();
const { Pool } = require('pg');
const path = require('path');
const inventoryRoutes = require('./routes/inventoryroutes');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Make database pool available
app.locals.db = pool;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/inventory', inventoryRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found' });
});

// 500 error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('error', { message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

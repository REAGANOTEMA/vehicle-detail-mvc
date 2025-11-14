const express = require('express');
const path = require('path');
const app = express();

// View engine setup -------------- FIXED!
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body parsing (needed for later weeks)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const inventoryRoutes = require('./routes/inventory-routes');
app.use('/', inventoryRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).render('errors/error', { message: 'Page not found' });
});

// Error middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('errors/error', { message: 'Something went wrong!' });
});

// Render-ready PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

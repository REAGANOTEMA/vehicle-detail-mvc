const express = require('express');
const app = express();
const inventoryRoutes = require('./routes/inventory-routes');
const path = require('path');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

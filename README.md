📘 Vehicle Detail Page – MVC Web Application
Author: Reagan Otema
Technologies Used: Node.js, Express.js, PostgreSQL, EJS, MVC Architecture
📌 Project Overview

This project is a Vehicle Detail MVC Web Application built using Node.js and Express, following the Model–View–Controller pattern.
Its purpose is to display detailed information about vehicles retrieved from a PostgreSQL database.

The application demonstrates:

✔ Clean and professional MVC folder structure

✔ Server-side rendering using EJS

✔ Dynamic vehicle detail pages /inventory/vehicle/:id

✔ HTML-building utility functions

✔ Fully responsive frontend UI

✔ Global layout, reusable partials, and shared styles

✔ Secure database access using prepared SQL statements

✔ Proper 404 & 500 error handling with custom error pages

✔ Ready for deployment on Render, Railway, or Heroku

📂 Folder Structure
vehicle-detail-mvc/
│
├── app.js # Main application entry point
├── package.json # Dependencies and scripts
├── .env # Environment variables (DATABASE_URL)
├── .gitignore # Ignore system & environment files
│
├── /routes
│ └── inventoryRoutes.js # Routes for vehicle detail pages
│
├── /controllers
│ └── inventoryController.js # Logic for handling requests & responses
│
├── /models
│ └── inventory-model.js # Database queries (Prepared statements)
│
├── /utilities
│ └── index.js # HTML builder + formatting helpers
│
├── /views # EJS templates
│ ├── layout.ejs # Main layout wrapper
│ ├── vehicle-detail.ejs # Vehicle detail page
│ ├── error.ejs # Error page (404/500)
│ ├── header.ejs # Header section
│ ├── footer.ejs # Footer section
│ └── navigation.ejs # Navigation bar
│
├── /public # Static assets served by Express
│ ├── /css
│ │ └── styles.css # Styling for all pages
│ ├── /js
│ │ └── main.js # JS interactivity
│ └── /images/vehicles # Image folder
│ ├── hummer.jpg
│ ├── survan.jpg
│ ├── wrangler.jpg
│ ├── fire-truck.jpg
│ └── dog-car.jpg
│
└── README.md # Project documentation

🗄️ Database
Table: vehicles
Column Type Description
id SERIAL PK Vehicle ID
make VARCHAR Car manufacturer
model VARCHAR Car model
year INT Manufacturing year
price NUMERIC Vehicle price
mileage INT Total mileage
image_url TEXT Vehicle image file path
description TEXT Summary description
Example Seed Data
INSERT INTO vehicles (make, model, year, price, mileage, image_url, description) VALUES
('Hummer', 'H1', 2010, 45000, 90000, '/images/vehicles/hummer.jpg', 'Strong military-grade 4x4 SUV.'),
('Toyota', 'Survan', 2018, 35000, 45000, '/images/vehicles/survan.jpg', 'Reliable family van with great capacity.'),
('Jeep', 'Wrangler', 2020, 42000, 30000, '/images/vehicles/wrangler.jpg', 'Off-road beast with rugged build.'),
('Custom', 'Fire Truck', 2015, 60000, 15000, '/images/vehicles/fire-truck.jpg', 'Fully equipped emergency vehicle.'),
('Dog-Vehicle', 'Puppy Car', 2023, 15000, 500, '/images/vehicles/dog-car.jpg', 'Fun themed vehicle for events.');

🧠 MVC Responsibilities
Model

Handles database logic using prepared statements:

SELECT \* FROM vehicles WHERE id = $1;

Controller

Fetches vehicle data & renders the EJS view.

View

Displays the formatted vehicle data inside a professional layout.

Utilities

Builds dynamic HTML wrapped with styling.

▶️ Running the App Locally

1. Install Dependencies
   npm install

2. Set Up .env
   DATABASE_URL=your_postgresql_connection_string

3. Start Server
   npm start

Your app will run at:

👉 http://localhost:3000

🚀 Deployment (Render)

Push project to GitHub

Create new Render Web Service

Select repository

Set:

Build Command: npm install
Start Command: npm start

Add environment variable:

DATABASE_URL=your render postgres string

✔ Node, Express, Static files, and EJS all deploy perfectly to Render.
✔ SSL for PostgreSQL is already handled in app.js.

📷 Vehicle Images Location

Place all images here:

public/images/vehicles/
hummer.jpg
survan.jpg
wrangler.jpg
fire-truck.jpg
dog-car.jpg

Images are referenced like:

<img src="/images/vehicles/hummer.jpg">

✔ Project Fully Complete

Your project now meets:

💯 MVC requirement

💯 Error handling requirement

💯 Database + Prepared statements requirement

💯 EJS + Partials + Layout requirement

💯 Render hosting compatibility

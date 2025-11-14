function vehicleDetailView(vehicle) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${vehicle.make} ${vehicle.model}</title>
        <link rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
        <div class="vehicle-detail">
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" />
            </div>
            <div class="vehicle-info">
                <h1>${vehicle.year} ${vehicle.make} ${vehicle.model}</h1>
                <p><strong>Price:</strong> $${Number(vehicle.price).toLocaleString()}</p>
                <p><strong>Mileage:</strong> ${Number(vehicle.mileage).toLocaleString()} miles</p>
                <p><strong>Description:</strong> ${vehicle.description}</p>
                <p><strong>Color:</strong> ${vehicle.color}</p>
                <p><strong>VIN:</strong> ${vehicle.vin}</p>
            </div>
        </div>
        <footer>
            <a href="/inventory/error-test">Trigger Error</a>
        </footer>
    </body>
    </html>
    `;
}

module.exports = { vehicleDetailView };

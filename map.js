// Initialize the map
const map = L.map('map').setView([40.7128, -74.0060], 10);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to convert miles to meters
function milesToMeters(miles) {
    return miles * 1609.34;
}

// Add restaurants to map
restaurants.forEach(restaurant => {
    // Get color for this model type
    const color = modelColors[restaurant.model] || '#666666';
    
    // Create marker
    const marker = L.circleMarker([restaurant.lat, restaurant.lng], {
        radius: 8,
        fillColor: color,
        color: '#000',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);
    
    // Create 3-mile radius circle
    const radius = L.circle([restaurant.lat, restaurant.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.1,
        radius: milesToMeters(3)
    }).addTo(map);
    
    // Create popup content
    const popupContent = `
        <div style="font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 10px 0; color: #333;">${restaurant.name}</h3>
            <p style="margin: 5px 0;"><strong>Address:</strong> ${restaurant.address}</p>
            <p style="margin: 5px 0;"><strong>Model:</strong> <span style="color: ${color}; font-weight: bold;">${restaurant.model}</span></p>
            <p style="margin: 5px 0;"><strong>Brands:</strong> ${restaurant.brands.join(', ')}</p>
        </div>
    `;
    
    // Bind popup to marker
    marker.bindPopup(popupContent);
    
    // Also bind popup to radius circle
    radius.bindPopup(popupContent);
});

// Create legend
const legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'legend');
    div.style.backgroundColor = 'white';
    div.style.padding = '10px';
    div.style.border = '2px solid #ccc';
    div.style.borderRadius = '5px';
    div.style.fontSize = '14px';
    
    let legendHTML = '<h4 style="margin: 0 0 10px 0;">Restaurant Models</h4>';
    
    for (const [model, color] of Object.entries(modelColors)) {
        legendHTML += `
            <div style="margin: 5px 0;">
                <span style="display: inline-block; width: 15px; height: 15px; background-color: ${color}; border: 1px solid #000; margin-right: 8px; border-radius: 50%;"></span>
                ${model}
            </div>
        `;
    }
    
    div.innerHTML = legendHTML;
    return div;
};

legend.addTo(map);

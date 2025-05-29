// Restaurant data - add your locations here
const restaurants = [
    {
        name: "Downtown Location",
        address: "123 Main St, New York, NY 10001",
        lat: 40.7128,
        lng: -74.0060,
        model: "Hybrid",
        brands: ["Brand A", "Brand B", "Brand C"]
    },
    {
        name: "Uptown Branch",
        address: "456 Broadway, New York, NY 10013",
        lat: 40.7589,
        lng: -73.9851,
        model: "Cloud Kitchen",
        brands: ["Brand A", "Brand D"]
    },
    {
        name: "Brooklyn Store",
        address: "789 Atlantic Ave, Brooklyn, NY 11238",
        lat: 40.6782,
        lng: -73.9442,
        model: "Cloud Kitchen Pick-Up",
        brands: ["Brand B", "Brand C", "Brand E"]
    },
    {
        name: "Queens Outlet",
        address: "321 Queens Blvd, Queens, NY 11375",
        lat: 40.7282,
        lng: -73.8370,
        model: "Licensee",
        brands: ["Brand A", "Brand C", "Brand F"]
    }
];

// Model colors for different restaurant types
const modelColors = {
    "Hybrid": "#FF6B6B",              // Red
    "Cloud Kitchen": "#4ECDC4",       // Teal
    "Cloud Kitchen Pick-Up": "#45B7D1", // Blue
    "Licensee": "#96CEB4"             // Green
};

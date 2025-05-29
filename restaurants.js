// Restaurant data - add your locations here
const restaurants = [
    {
        name: "Luton",
        address: "5 Midland Road, Luton LU2 0HS",
        lat: 51.88292,
        lng: -0.41341,
        model: "Licensee",
        brands: ["Dim Dum", "Awesome Wings", "MAD"]
    },
    {
        name: "Darlington",
        address: "111 Victoria Road, Darlington DL1 5JH",
        lat: 54.52152,
        lng:  -1.55003,
        model: "Licensee",
        brands: ["Dim Dum", "MAD"]
    },
    {
        name: "Hounslow",
        address: "281-287 High Street, Hounslow TW3 1EF",
        lat: 51.46795,
        lng:  -0.36539,
        model: "Licensee",
        brands: ["Baskin Robbins"]
    },
    {
        name: "Pool",
        address: "Fore Street, Pool TR15 3PF",
        lat: 50.22739,
        lng:  -5.26964,
        model: "Licensee",
        brands: ["Dim Dum", "MAD"]
    },
];

// Model colors for different restaurant types
const modelColors = {
    "Hybrid": "#FF6B6B",              // Red
    "Cloud Kitchen": "#4ECDC4",       // Teal
    "Cloud Kitchen Pick-Up": "#45B7D1", // Blue
    "Licensee": "#96CEB4"             // Green
};

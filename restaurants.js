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
      {
        name: "Bolton",
        address: "115 Market Street, Bolton BL4 8EX",
        lat: 53.54829,
        lng:  -2.39265,
        model: "Licensee",
        brands: ["Baskin Robbins", "MAD"]
    },
    {
        name: "Swindon",
        address: "Unit 8, Whitbourne Avenue, Park North SN3 2GD",
        lat: 51.55380,
        lng:  -1.75043,
        model: "Licensee",
        brands: ["Eggsquisite", "Holy Bagel"]
    },
    {
        name: "Bristol",
        address: "46 Staple Hill Road, Bristol BS16 5BS",
        lat: 51.48154,
        lng:  -2.52109,
        model: "Licensee",
        brands: ["Eggsquisite", "Holy Bagel"]
    },
    {
        name: "Sale",
        address: "113 Washway Road, Sale M33 7TY",
        lat: 53.42108,
        lng:  -2.32995,
        model: "Licensee",
        brands: ["MAD", "Dim Dum", "Awesome Wings"]
    },
];

// Model colors for different restaurant types
const modelColors = {
    "Hybrid": "#FF6B6B",              // Red
    "Cloud Kitchen": "#4ECDC4",       // Teal
    "Cloud Kitchen Pick-Up": "#45B7D1", // Blue
    "Licensee": "#96CEB4"             // Green
};

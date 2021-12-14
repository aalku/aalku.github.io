window.gameItems = {
    /* basic */
    meat: {
        name: "Meat",
        price: 3.00,
    },
    "fish-meat": {
        name: "Fish Meat",
        price: 4.00,
    },
    "bolete-mushroom": {
        name: "Bolete Mushroom",
        price: 3.00,
    },
    "parsol-mushroom": {
        name: "Parsol Mushroom",
        price: 3.00,
    },
    "red-pine-mushroom": {
        name: "Red Pine Mushroom",
        price: 3.00,
    },
    "morel-mushroom": {
        name: "Morel Mushroom",
        price: 2.00,
    },
    "bitter-bolete-mushroom": {
        name: "Bitter Bolete Mushroom",
        price: 2.00,
    },
    "fly-agaric-mushroom": {
        name: "Fly Agaric Mushroom",
        price: 2.00,
    },
    "wooly-milkcap-mushroom": {
        name: "Wooly Milkcap Mushroom",
        price: 2.00,
    },
    "berry": {
        name: "Berry",
        price: 0.20,
    },
    /* farm */
    egg: {
        name: "Egg",
        price: 10.00,
    },
    betroot: {
        name: "Betroot",
        price: 3.00,
    },
    cabagge: {
        name: "Cabbage",
        price: 3.00,
    },
    apple: {
        name: "Apple",
        price: 3.00,
    },
    pear: {
        name: "Pear",
        price: 3.00,
    },
    carrot: {
        name: "Carrot",
        price: 2.00,
    },
    onion: {
        name: "Onion",
        price: 2.00,
    },
    cherry: {
        name: "Cherry",
        price: 2.00,
    },
    plum: {
        name: "Plum",
        price: 2.00,
    },
    /* Roasted */
    "roasted-meat": {
        name: "Roasted Meat",
        price: 5.00,
        base: "meat",
        productionMultiplier: 1,
    },
    "roasted-fish": {
        name: "Roasted Fish",
        price: 6.00,
        base: "fish-meat",
        productionMultiplier: 1,
    },
    /* Cooked */
    potage: {
        name: "Potage",
        price: 50.00,
        recipe: true,
    },
    stew: {
        name: "Stew",
        price: 40.00,
        recipe: true,
    },
    "meat-with-gravy": {
        name: "Meat with Gravy",
        price: 40.00,
        recipe: true,
    },
    soup: {
        name: "Soup",
        price: 50.00,
        recipe: true,
    },
    "mushroom-soup": {
        name: "Mushroom Soup",
        price: 30.00,
        recipe: true,
    },
    /* containers */
    woodenBowl: {
        name: "Wooden Bowl",
        base: "log",
        price: 4,
        productionMultiplier: 5,
    },
    woodenPlate: {
        name: "Wooden Plate",
        base: "log",
        price: 4,
        productionMultiplier: 5,
    },
    /* Raw materials */
    log: {
        name: "Log",
        price: 5.00,
    },
    /* misc */
    "animal-feed": {
        name: "Animal Feed",
        price: 20.00,
        recipe: true,
    },
    "straw": {
        name: "Straw",
        price:  0.20,
    },
    /* seeds */
    "oat-grain": {
        name: "Oat Grain",
        price: 5.00,
    },
    "rye-grain": {
        name: "Rye Grain",
        price: 5.00,
    },
};
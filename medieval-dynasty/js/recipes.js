/* The source for most of the data is MacaDeath at Discord */

window.recipes = {
    "cauldron-soups": {
        name: "Food - Cauldron - Soups",
        recipes: {
            "potage-meat": {
                "ingredients": {
                    "cabbage": "2",
                    "meat": "3",
                    "wooden-bowl": "1"
                },
                "name": "Potage (Meat)",
                "result": "potage"
            },
            "potage-salted-meat": {
                "ingredients": {
                    "cabbage": "2",
                    "salted-meat": "3",
                    "wooden-bowl": "1"
                },
                "name": "Potage (Salted Meat)",
                "result": "potage"
            },
            "stew-meat": {
                "ingredients": {
                    "carrot": "2",
                    "meat": "2",
                    "wooden-bowl": "1"
                },
                "name": "Stew (Meat)",
                "result": "stew"
            },
            "stew-salted-meat": {
                "ingredients": {
                    "carrot": "2",
                    "salted-meat": "2",
                    "wooden-bowl": "1"
                },
                "name": "Stew (Salted Meat)",
                "result": "stew"
            },
            "soup-meat": {
                "ingredients": {
                    "beetroot": "3",
                    "meat": "4",
                    "wooden-bowl": "1"
                },
                "name": "Meat Soup (Meat)",
                "result": "soup"
            },
            "soup-salted-meat": {
                "ingredients": {
                    "beetroot": "3",
                    "salted-meat": "4",
                    "wooden-bowl": "1"
                },
                "name": "Meat Soup (Salted Meat)",
                "result": "soup"
            },
            "vegetable-soup": {
                "ingredients": {
                    "beetroot": "2",
                    "cabbage": "2",
                    "carrot": "2",
                    "onion": "2",
                    "wooden-bowl": "1"
                },
                "name": "Vegetable Soup",
                "result": "vegetable-soup"
            },
            "mushroom-soup-meat": {
                "ingredients": {
                    "bolete-mushroom": "1",
                    "parasol-mushroom": "1",
                    "red-pine-mushroom": "1",
                    "meat": "1",
                    "wooden-bowl": "1"
                },
                "name": "Mushroom Soup (Meat)",
                "result": "mushroom-soup"
            },
            "mushroom-soup-salted-meat": {
                "ingredients": {
                    "bolete-mushroom": "1",
                    "parasol-mushroom": "1",
                    "red-pine-mushroom": "1",
                    "salted-meat": "1",
                    "wooden-bowl": "1"
                },
                "name": "Mushroom Soup (Salted Meat)",
                "result": "mushroom-soup"
            },
        }
    },
//
    "porridges": {
        name: "Food - Cauldron - Porridges",
        recipes: {
            "porridge": {
                "ingredients": {
                    "oat-grain": "2",
                    "wooden-bowl": "1"
                },
                "name": "Porridge",
                "result": "porridge"
            },
            "porridge-with-berries": {
                "ingredients": {
                    "berry": "20",
                    "oat-grain": "2",
                    "wooden-bowl": "1"
                },
                "name": "Porridge with Berries",
                "result": "porridge-with-berries"
            },
            "porridge-with-apple": {
                "ingredients": {
                    "apple": "2",
                    "oat-grain": "2",
                    "wooden-bowl": "1"
                },
                "name": "Porridge with Apple",
                "result": "porridge-with-apple"
            },
            "gruel": {
                "ingredients": {
                    "rye-grain": "2",
                    "wooden-bowl": "1"
                },
                "name": "Gruel",
                "result": "gruel"
            },
        },
    },

    "cauldron-plate": {
        name: "Food - Cauldron - Plate",
        recipes: {
            "meat-with-gravy": {
                "ingredients": {
                    "onion": "3",
                    "roasted-meat": "1",
                    "wooden-plate": "1"
                },
                "name": "Meat with Gravy",
                "result": "meat-with-gravy"
            },
            "scrambled-egg": {
                "ingredients": {
                    "egg": "3",
                    "wooden-bowl": "1"
                },
                "name": "Scrambled Egg",
                "result": "scrambled-egg"
            },
            "scrambled-egg-with-mushroom": {
                "ingredients": {
                    "morel-mushroom": "3",
                    "egg": "3",
                    "wooden-bowl": "1"
                },
                "name": "Scrambled Egg With Mushroom",
                "result": "scrambled-egg-with-mushroom"
            },
        }
    },

// Problems with units and too basic
    // "quark": {
    //     "ingredients": {
    //         "bucket-soured-milk": "0.1"
    //     },
    //     "name": "Quark",
    //     "result": "quark"
    // },
    // "cheese": {
    //     "ingredients": {
    //         "quark": "1",
    //         "bucket-milk": "0.1"
    //     },
    //     "name": "Cheese",
    //     "result": "cheese"
    // },

// Too basic
    // "salted-meat": {
    //     "ingredients": {
    //         "salt": "1",
    //         "meat": "1"
    //     },
    //     "name": "Salted Meat",
    //     "result": "salted-meat"
    // },
    // "salted-fish-meat": {
    //     "ingredients": {
    //         "salt": "1",
    //         "fish-meat": "1"
    //     },
    //     "name": "Salted Fish Meat",
    //     "result": "salted-fish-meat"
    // },
    // "dried-fish-meat": {
    //     "ingredients": {
    //         "fish-meat": "1"
    //     },
    //     "name": "Dried Fish Meat",
    //     "result": "dried-fish-meat"
    // },
    // "dried-meat": {
    //     "ingredients": {
    //         "meat": "1"
    //     },
    //     "name": "Dried Meat",
    //     "result": "dried-meat"
    // },
    // "roasted-meat-meat": {
    //     "ingredients": {
    //         "meat": "1"
    //     },
    //     "name": "Roasted Meat (Meat)",
    //     "result": "roasted-meat"
    // },
    // "roasted-meat-salted-meat": {
    //     "ingredients": {
    //         "salted-meat": "1"
    //     },
    //     "name": "Roasted Meat (Salted Meat)",
    //     "result": "roasted-meat"
    // },
    // "roasted-fish-fish": {
    //     "ingredients": {
    //         "fish-meat": "1"
    //     },
    //     "name": "Roasted Fish Meat (Fish)",
    //     "result": "roasted-fish-meat"
    // },
    // "roasted-fish-salted-fish": {
    //     "ingredients": {
    //         "salted-fish-meat": "1"
    //     },
    //     "name": "Roasted Fish (Salted Fish)",
    //     "result": "roasted-fish-meat"
    // },

// Problems with units and too basic
    // "flour-oat-x5": {
    //     "ingredients": {
    //         "oat-grain": "5"
    //     },
    //     "name": "Flour (Oat) x5",
    //     "result": "flour",
    //     "multiple": "5"
    // },
    // "flour-rye-x5": {
    //     "ingredients": {
    //         "rye-grain": "5"
    //     },
    //     "name": "Flour (Rye) x5",
    //     "result": "flour",
    //     "multiple": "5"
    // },
    // "flour-wheat-x10": {
    //     "ingredients": {
    //         "wheat-grain": "5"
    //     },
    //     "name": "Flour (Wheat) x10",
    //     "result": "flour",
    //     "multiple": "10"
    // },

    
    // "flatbread": {
    //     "ingredients": {
    //         "flour": "8",
    //         "bucket-water": "0.3"
    //     },
    //     "name": "Flatbread",
    //     "result": "flatbread"
    // },
    // "flatbread-with-onion": {
    //     "ingredients": {
    //         "onion": "5",
    //         "flour": "8",
    //         "bucket-water": "0.3"
    //     },
    //     "name": "Flatbread with Onion",
    //     "result": "flatbread-with-onion"
    // },
    // "multigrain-bread": {
    //     "ingredients": {
    //         "egg": "2",
    //         "oat-grain": "2",
    //         "rye-grain": "2",
    //         "wheat-grain": "1",
    //         "flour": "9",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Multigrain Bread",
    //     "result": "multigrain-bread"
    // },
    // "wheat-bread": {
    //     "ingredients": {
    //         "egg": "2",
    //         "wheat-grain": "2",
    //         "flour": "9",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Wheat Bread",
    //     "result": "wheat-bread"
    // },
    // "wheat-rolls": {
    //     "ingredients": {
    //         "egg": "1",
    //         "wheat-grain": "2",
    //         "flour": "6",
    //         "bucket-water": "0.3"
    //     },
    //     "name": "Wheat Rolls",
    //     "result": "wheat-rolls"
    // },
    // "rye-bread": {
    //     "ingredients": {
    //         "egg": "2",
    //         "rye-grain": "2",
    //         "flour": "9",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Rye Bread",
    //     "result": "rye-bread"
    // },
    // "white-bread": {
    //     "ingredients": {
    //         "egg": "2",
    //         "flour": "9",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "White Bread",
    //     "result": "white-bread"
    // },


    // "oat-rolls": {
    //     "ingredients": {
    //         "egg": "1",
    //         "oat-grain": "2",
    //         "flour": "6",
    //         "bucket-water": "0.3"
    //     },
    //     "name": "Oat Rolls",
    //     "result": "oat-rolls"
    // },
    // "fruit-pie": {
    //     "ingredients": {
    //         "berry": "20",
    //         "egg": "5",
    //         "flour": "10",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Fruit Pie",
    //     "result": "fruit-pie"
    // },
    // "meat-pie": {
    //     "ingredients": {
    //         "egg": "5",
    //         "flour": "10",
    //         "roasted-meat": "4",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Meat Pie",
    //     "result": "meat-pie"
    // },
    // "poppy-seed-pie": {
    //     "ingredients": {
    //         "egg": "5",
    //         "poppy-seed": "8",
    //         "flour": "10",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Poppy Seed Pie",
    //     "result": "poppy-seed-pie"
    // },
    // "cherry-pie": {
    //     "ingredients": {
    //         "cherry": "15",
    //         "egg": "5",
    //         "flour": "10",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Cherry Pie",
    //     "result": "cherry-pie"
    // },
    // "fish-tart-fish": {
    //     "ingredients": {
    //         "egg": "4",
    //         "flour": "10",
    //         "fish-meat": "2",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Fish Tart (Fish)",
    //     "result": "fish-tart"
    // },
    // "fish-tart-salted-fish": {
    //     "ingredients": {
    //         "egg": "4",
    //         "flour": "10",
    //         "salted-fish-meat": "2",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Fish Tart (Salted Fish)",
    //     "result": "fish-tart"
    // },
    // "fruit-tart": {
    //     "ingredients": {
    //         "berry": "20",
    //         "egg": "5",
    //         "flour": "10",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Fruit Tart",
    //     "result": "fruit-tart"
    // },
    // "pear-tart": {
    //     "ingredients": {
    //         "pear": "5",
    //         "egg": "4",
    //         "flour": "10",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Pear Tart",
    //     "result": "pear-tart"
    // },
    // "plum-tart": {
    //     "ingredients": {
    //         "plum": "10",
    //         "egg": "4",
    //         "flour": "10",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Plum Tart",
    //     "result": "plum-tart"
    // },
    // "meat-tart-meat": {
    //     "ingredients": {
    //         "onion": "2",
    //         "egg": "4",
    //         "flour": "10",
    //         "meat": "2",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Meat Tart (Meat)",
    //     "result": "meat-tart"
    // },
    // "meat-tart-salted-meat": {
    //     "ingredients": {
    //         "onion": "2",
    //         "egg": "4",
    //         "flour": "10",
    //         "salted-meat": "2",
    //         "bucket-water": "0.5"
    //     },
    //     "name": "Meat Tart (Salted Meat)",
    //     "result": "meat-tart"
    // },

    
    /* misc */
    "misc": {
        name: "Miscelaneous",
        recipes: {
            "animal-feed": {
                "ingredients": {
                    "oat-grain": 1,
                    "rye-grain": 1,
                    "straw": 5,
                },
                "name": "Animal Feed",
                "result": "animal-feed"
            },
        }
    },
};

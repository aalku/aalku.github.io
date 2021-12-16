var foodArray = `
\tberry	bolete-mushroom	parasol-mushroom	red-pine-mushroom	morel-mushroom	beetroot	cabbage	carrot	onion	apple	pear	plum	cherry	egg	salt	oat-grain	rye-grain	wheat-grain	poppy-seed	flour	meat	salted-meat	roasted-meat	fish	salted-fish	quark	bucket-water	bucket-milk	soured-milk	bucket	wooden-bowl	wooden-plate
Milk																														1		
Quark																													0,1			
Cheese																										1		0,1				
Salted Meat															1						1											
Salted Fish															1									1								
Dried Fish																								1								
Dried Meat																					1											
Roasted Meat (Meat)																					1											
Roasted Meat (Salted Meat)																						1										
Roasted Fish (Fish)																								1								
Roasted Fish (Salted Fish)																									1							
Flour (Oat) x5																5																
Flour (Rye) x5																	5															
Flour (Wheat) x10																		5														
Porridge																2															1	
Porridge with Berries	20															2															1	
Porridge with Apple										2						2															1	
Gruel																	2														1	
Potage (Meat)							2														3										1	
Potage (Salted Meat)							2															3									1	
Stew (Meat)								2													2										1	
Stew (Salted Meat)								2														2									1	
Meat Soup (Meat)						3															4										1	
Meat Soup (Salted Meat)						3																4									1	
Vegetable Soup						2	2	2	2																						1	
Mushroom Soup (Meat)		1	1	1																	1										1	
Mushroom Soup (Salted Meat)		1	1	1																		1									1	
Meat with Gravy									3														1									1
Scrambled Egg														3																	1	
Scrambled Egg With Mushroom					3									3																	1	
Flatbread																				8							0,3					
Flatbread with Onion									5											8							0,3					
Multigrain Bread														2		2	2	1		9							0,5					
Wheat Bread														2				2		9							0,5					
Wheat Rolls														1				2		6							0,3					
Rye Bread														2			2			9							0,5					
White Bread														2						9							0,5					
Oat Rolls														1		2				6							0,3					
Fruit Pie	20													5						10							0,5					
Meat Pie														5						10			4				0,5					
Poppy Seed Pie														5					8	10							0,5					
Cherry Pie													15	5						10							0,5					
Fish Tart (Fish)														4						10				2			0,5					
Fish Tart (Salted Fish)														4						10					2		0,5					
Fruit Tart	20													5						10							0,5					
Pear Tart											5			4						10							0,5					
Plum Tart												10		4						10							0,5					
Meat Tart (Meat)									2					4						10	2						0,5					
Meat Tart (Salted Meat)									2					4						10		2					0,5					
`.split(/\r?\n/).filter(line=>line.trim()!="").map(line => line.split('\t', -1).map(x=>x.trim()));

console.debug("foodArray", foodArray);

var headers = foodArray.slice(0, 1)[0].slice(1);
// console.debug("headers", headers);

const multipleRegex = /.*[)\s][xX]\s*(\d+)\s*$/;

var recipes = {};
for (var n=1; n<foodArray.length; n++) {
    var row = foodArray[n];
    var recipeName = row[0];
    var ingredients = row.slice(1).map((c,i)=>[headers[i], c]).filter(e=>e[1]).reduce((obj, [key, value])=>{
        if (/^\s*\d*,\d+\s*$/.test(value)) {
            value = value.replace(",", '.');
        }
        obj[key] = value;
        return obj;
    }, {});
    
    var recipe = {ingredients: ingredients};
    recipe.name = recipeName;
    recipe.result = recipeName.toLowerCase().replaceAll(" ", "-").replace(/[-]*[(][^)]+[)].*/, "");
    if (multipleRegex.test(recipeName)) {
        recipe.multiple = recipeName.replace(multipleRegex, "$1");
    }

    var id = recipeName.toLowerCase().replaceAll(" ", "-").replace(/[)(]/g, "");
    recipes[id] = recipe;
}
console.debug("recipes obj", recipes);

// Elements
const recipeIngredientsList = document.getElementById("recipe-ingredients-list");
const itemCount = document.getElementById("item-count");
const recipeSelect = document.getElementById("recipe-select");

// Templates
const recipeIngredientsTemplate = document.getElementById("ingredient-template").content;
const recipeTemplate = document.getElementById("recipe-template").content;

var fixedIngredient = null;
var fixedItemCount = false;

function initRecipeList() {
    for (var id in recipes) {
        var option = recipeTemplate.firstElementChild.cloneNode(true);
        option.value = id;
        option.innerText = gameItems[id].name;
        recipeSelect.appendChild(option);
    };
    initRecipe();
}

function initRecipe() {
    var recipe = document.getElementById("recipe-select").value;
    console.log("initRecipe", recipe);
    var recipeIngredients = recipes[recipe].ingredients;
    var fixedIngredientQuantity = null;

    [...recipeIngredientsList.querySelectorAll("tr")].forEach(function(row) {
        if (row.classList.contains("header")) {
            // Keep header
        } else {
            if (fixedIngredient && row.classList.contains("ingredient-row")) {
                var input = row.querySelector("input");
                if (input.id == "ingredient-" + fixedIngredient) {
                    // Keep fixed ingredient quantity
                    fixedIngredientQuantity = input.value;
                }
            }
            row.remove();
        }
    });

    if (fixedIngredient && !recipeIngredients[fixedIngredient]) {
        fixedIngredient = null;
        fixedIngredientQuantity = null;
    }

    for (var id in recipeIngredients) {
        var ingredient = recipeIngredientsTemplate.firstElementChild.cloneNode(true);
        var input = ingredient.querySelector("input");
        var ingredientCost = ingredient.querySelector("select");
        ingredientCost.id = "ingredient-cost-" + id;
        console.log("ingredient", id, gameItems[id], input, ingredientCost);
        input.placeholder = recipeIngredients[id];
        input.id = "ingredient-" + id;
        if (id == fixedIngredient) {
            input.value = fixedIngredientQuantity;
        }

        var optionBasePrice = document.createElement("option");
        optionBasePrice.id = 'option-base-price-' + id;
        ingredientCost.options.add(optionBasePrice);

        var optionBuyPrice = document.createElement("option");
        optionBuyPrice.id = 'option-buy-price-' + id;
        ingredientCost.options.add(optionBuyPrice);

        ingredient.querySelector("label").innerText = gameItems[id].name;
        recipeIngredientsList.appendChild(ingredient);
    }
    recipeEdit(null);
}

function recipeEdit(target) {
    // console.log("recipeEdit", target, target.value, "fixed pre", fixedItemCount, fixedIngredient);
    var recipeId = document.getElementById("recipe-select").value;
    var recipe = recipes[recipeId];
    var ingredientInputElements = [...recipeIngredientsList.querySelectorAll("input")].reduce(function(acc, input) {
        acc[input.id.replace("ingredient-", "")] = input;
        return acc;
    }, {});

    // Determine what is fixed and what is not
    if (fixedIngredient && ingredientInputElements[fixedIngredient].value == "") {
        fixedIngredient = null;
    }
    if (target == itemCount && target.value != "") {
        fixedItemCount = true;
        fixedIngredient = null;
    } else {
        var newFixedIngredient = Object.keys(ingredientInputElements).find(function(inputId) {
            return ingredientInputElements[inputId] == target && target.value != "";        
        });
        if (newFixedIngredient) {
            fixedIngredient = newFixedIngredient;
            fixedItemCount = false;
        }
    }
    
    // Calc the rest
    // console.log("fixedPost", fixedIngredient, fixedItemCount);
    var count = null;
    if (fixedIngredient) {
        var fixedValue = ingredientInputElements[fixedIngredient].value;
        count = Number.parseInt(fixedValue / recipe.ingredients[fixedIngredient]);
    } else { // Fixed count or 1
        count = Number.parseInt(itemCount.value) || 1;
    }
    itemCount.placeholder = Number.parseInt(count) || "???";
    if (!fixedItemCount) {
        itemCount.value = "";
    }
    var ingredientsCost = 0;
    for (var ingredientId in recipe.ingredients) {
        var basePrice = gameItems[ingredientId].price || 0;
        var input = ingredientInputElements[ingredientId];
        console.debug("recipeEdit.calc.input", ingredientId, input.value);
        var q = Number.parseInt(recipe.ingredients[ingredientId]);
        input.placeholder = `${q} x ${count} = ${ count * q  || '???'}`;
        if (ingredientId == fixedIngredient) {
            // No modificamos el modificado
        } else {
            input.value = "";
        }

        var optionBasePrice = document.getElementById('option-base-price-' + ingredientId);
        optionBasePrice.innerHTML = `${basePrice} x ${q} = ${basePrice * q} (base)`;
        optionBasePrice.value = basePrice * q;

        var optionBuyPrice = document.getElementById('option-buy-price-' + ingredientId);
        optionBuyPrice.innerHTML = `${basePrice} x ${q } x ${buyPriceMultiplier} = ${basePrice * q * buyPriceMultiplier} &nbsp;(buy)`;
        optionBuyPrice.value = basePrice * q * buyPriceMultiplier;

        // Calculate this after update the option values
        var cost = document.getElementById("ingredient-cost-" + ingredientId).value;
        ingredientsCost += Number.parseFloat(cost);
    }

    // Calc and fill the details
    var recipeBasePrice = Number.parseInt(gameItems[recipeId].price);
    document.getElementById("base-price").innerText = `${recipeBasePrice} x ${count} = ${ count * recipeBasePrice * 1  || '???'}`;
    document.getElementById("sell-price").innerText = `${recipeBasePrice} x ${sellPriceMultiplier} x ${count} = ${ count * recipeBasePrice * sellPriceMultiplier || '???' }`;
    document.getElementById("ingredients-cost").innerText = `${ingredientsCost} x ${count} = ${ count * ingredientsCost * 1  || '???'}`;
    document.getElementById("profit").innerText = `${ Number.parseInt( 100 * 100.0*((count * recipeBasePrice * sellPriceMultiplier) - (count * ingredientsCost)) / (count * ingredientsCost)) / 100.0}%`;
}

/* Init when the page is loaded */
window.addEventListener("load", function() {
    initRecipeList();
});

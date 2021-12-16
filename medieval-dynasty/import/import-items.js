var itemsArray = `\tItem	Original Price	Sell Price	Buy Price	Weight (kg)	Manufactuing Time
Tools	Wooden Hammer	30	15	45	1	3
\tWooden Shovel	25	12.5	37.5	2	2
\tWooden Hoe	30	15	45	2	3
\tSimple Torch	10	5	15	0.5	2
\tTorch	40	20	60	0.5	5
\tBucket	30	15	45	2	5
\tStone Axe	40	20	60	2.5	5
\tStone Pickaxe	45	22.5	67.5	3	5
\tStone Knife	40	20	60	0.5	6
\tStone Hoe	45	22.5	67.5	2.5	7
\tStone Sickle	45	22.5	67.5	0.75	7
\tFishing Spear	100	50	150	2.5	5
\tCopper Hammer	110	55	165	2	5
\tCopper Axe	180	90	270	3	8
\tCopper Hoe	110	55	165	2	7
\tCopper Shovel	180	90	270	3	4
\tCopper Sickle	140	70	210	1	7
\tCopper Knife	110	55	165	0.5	8
\tBronze Hammer	220	110	330	2	7
\tBronze Axe	350	175	525	3.5	11
\tBronze Pickaxe	360	180	540	5	10
\tBronze Hoe	220	110	330	2	8
\tBronze Shovel	360	180	540	3	7
\tBronze Sickle	290	145	435	1.5	8
\tBronze Scythe	360	180	540	4	10
\tBronze Shearing Scissors	110	55	165	1	10
\tBronze Knife	220	110	330	0.75	10
\tIron Axe	490	245	735	3.5	15
\tIron Pickaxe	500	250	750	5	15
\tIron Hammer	300	150	450	2	10
\tIron Hoe	300	150	450	2	10
\tIron Scythe	500	250	750	4	15
\tIron Shearing Scissors	140	70	210	1	10
\tIron Knife	300	150	450	0.75	12
\tIron Shovel	500	250	750	3	10
\tIron Sickle	400	200	600	1.5	10
\tIron Horseshoes	250	125	375	4	15
\tSimple Bag	50	25	75	0.15	3
\tBag	180	90	270	0.5	8
\tWaterskin	170	85	255	0.25	5
\tSaddle	480	240	720	2	20
\tLinen Thread	50	25	75	0.1	5
\tLinen Fabric	60	30	90	0.1	5
\tWool Thread	100	50	150	0.5	10
\tWool Fabric	120	60	180	0.5	10
\tAnimal Feed	20	10	30	0.2	2
\tFertilizer	5	2.5	7.5	0.5	1
\tDaub	1	0.5	1.5	0.5	10
\tCopper Bar	30	15	45	1	2
\tTin Bar	25	12.5	37.5	1	1
\tBronze Bar	60	30	90	1	2
\tIron Bar	90	45	135	1	3
Weapons	Cudgel	18	9	27	1.5	3
\tIron Spiked Cudgul	180	90	270	2	3
\tWooden Spear	20	10	30	1.5	3
\tStone Spear	100	50	150	2.5	8
\tCopper Spear	170	85	255	2	12
\tBronze Spear	330	165	495	2	16
\tIron Spear	410	205	615	2	20
\tBow	90	45	135	1.25	10
\tLongbow	230	115	345	1.25	15
\tRecurve Bow	320	160	480	1.25	18
\tWooden Crossbow	150	75	225	1	9
\tIron Crossbow	730	365	1095	1.25	20
\tThrowing Stone	0.1	0.1	0.2	0.2	2
\tStone Arrow	7	3.5	10.5	0.01	5
\tCopper Arrow	9	4.5	13.5	0.01	3
\tBronze Arrow	11	5.5	16.5	0.01	3
\tIron Arrow	13	6.5	19.5	0.01	4
\tWooden Bolt	7	3.5	10.5	0.01	2
\tCopper Bolt	9	4.5	13.5	0.01	3
\tBronze Bolt	11	5.5	16.5	0.01	3
\tIron Bolt	13	6.5	19.5	0.01	4
\tPoisoned Stone Arrow	10	5	15	0.01	4
\tPosioned Copper Arrow	12	6	18	0.01	4
\tPoisoned Bronze Arrow	11	5.5	16.5	0.01	4
\tPoisoned Iron Arrow	13	6.5	19.5	0.01	4
\tPoisoned Wooden Bolt	10	5	15	0.01	4
\tPoisoned Copper Bolt	12	6	18	0.01	4
\tPoisoned Bronze Bolt	14	7	21	0.01	4
\tPoisoned Iron Bolt	16	8	24	0.01	4
Wood/Clay Items	Wooden Ladle	3	1.5	4.5	0.07	2
\tWooden Spoon	3	1.5	4.5	0.07	2
\tWooden Bowl	4	2	6	0.2	2
\tWooden Cup	4	2	6	0.2	2
\tWooden Plate	4	2	6	0.2	2
\tWooden Vial	3	1.5	4.5	0.1	7
\tWooden Wheel	40	20	60	4	15
\tSmall Wicker Basket	15	7.5	22.5	0.5	5
\tMedium Wicker Basket	20	10	30	0.8	8
\tLarge Wicker Basket	25	12.5	37.5	1.2	10
\tWicker Crate	30	15	45	1.6	12
\tBeer Bottle	50	25	75	0.35	8
\tWine Bottle	60	30	90	0.5	10
\tMead Bottle	50	25	75	0.3	8
\tClay Bowl	30	15	45	0.4	5
\tClay Bottle	40	20	60	0.5	7
\tClay Jug	40	20	60	0.5	7
\tClay Cup	20	10	30	0.2	3
\tClay Mug	30	15	45	0.25	5
\tClay Vial	20	10	30	0.2	7
Cloths	Hat	320	160	480	0.1	18
\tBag Hat	600	300	900	0.2	25
\tFelt Hat	520	260	780	0.15	22
\tHat with Lapels	380	190	570	0.1	20
\tStrawhat	120	60	180	0.2	5
\tFlat Straw Hat	130	65	195	0.15	5
\tCoif	150	75	225	0.05	5
\tCap	230	115	345	0.05	10
\tCap with Coif	290	145	435	0.1	12
\tHood	330	165	495	0.3	20
\tFur Hood	370	185	555	0.35	21
\tLong Fur Hood	520	260	780	0.4	23
\tLong Hood	480	240	720	0.4	22
\tFur Capelet	240	120	360	0.25	14
\tSimple Tunic	330	165	495	0.5	16
\tShort Sleeve Tunic	320	160	480	0.45	15
\tTunic	470	235	705	0.5	21
\tFelt Vest	590	295	885	0.7	23
\tQuilted Vest	740	370	1110	0.8	25
\tSimple Linen Shirt	200	100	300	0.25	5
\tLinen Shirt	270	135	405	0.25	10
\tThick Leather Gloves	180	90	270	0.15	4
\tTrousers	200	100	300	0.3	3
\tTrousers with Cuffs	220	110	330	0.35	5
\tHose	370	185	555	0.4	15
\tJoined Hose	460	230	690	0.5	20
\tFancy Shoes	290	145	435	0.15	20
\tShoes	140	70	210	0.15	5
\tFur Shoes	170	85	255	0.25	5
\tNoble Shoes	340	170	510	0.1	22
\tBoots	280	140	420	0.25	18
\tSimple Shoes	100	50	150	0.15	3
\tNoble Boots	420	210	630	0.2	24
\tFur Boots	250	125	375	0.35	11
Bags	Small Pouch	110	55	165	0.25	10
\tPouch	180	90	270	0.5	15
\tLarge Pouch	260	130	390	1	20
\tSimple Small Backpack	190	95	285	0.5	10
\tSimple Backpack	260	130	390	1	15
\tSimple Large Backpack	380	190	570	1.5	20
\tSmall Saddlebag	280	140	420	2	10
\tSaddlebag	370	185	555	3	15
\tLarge Saddlebag	610	305	915	4	20
Materials	Log	2	1	3	2.5	N/A
\tStick	0.2	0.1	0.3	0.1	N/A
\tFirewood	2	1	3	0.6	4
\tPlank	4	2	6	1	4
\tStone	0.2	0.1	0.3	1	N/A
\tLimestone	12	6	18	1	N/A
\tClay	0.2	0.1	0.3	0.5	N/A
\tCopper Ore	12	6	18	1	N/A
\tTin Ore	10	5	15	1	N/A
\tIron Ore	40	20	60	1	N/A
\tLeather	8	4	12	0.25	N/A
\tFur	6	3	9	0.25	N/A
\tFeather	3	1.5	4.5	0.01	N/A
\tFlax	10	5	15	0.05	N/A
\tFlax Stalk	5	2.5	7.5	0.04	N/A
\tStraw	0.2	0.1	0.3	0.04	N/A
\tWool	12	6	18	0.1	N/A
\tManure	2	1	3	0.25	N/A
\tRot	0	0	0	0.05	N/A
Gifts	Amber Neclace	500	250	750	0.07	N/A
\tCoverlet	500	250	750	0.2	N/A
\tDried Dates	750	375	1125	0.06	N/A
\tDried Figs	750	375	1125	0.06	N/A
\tFlute	500	250	750	0.9	N/A
\tGlass Beads	500	250	750	0.07	N/A
\tGlass Bottle	750	375	1125	1.1	N/A
\tGolden Ring	750	375	1125	0.05	N/A
\tHand Fan	500	250	750	0.6	N/A
\tIncense	750	375	1125	1	N/A
\tJewelry Box	1000	500	1500	1.5	N/A
\tKaptorga	1000	500	1500	1	N/A
\tLunula	750	375	1125	0.1	N/A
\tMalvasia	1000	500	1500	1.2	N/A
\tNeedle Case	750	375	1125	0.07	N/A
\tPerfume	500	250	750	1	N/A
\tPouch of Spices	1000	500	1500	0.09	N/A
\tSilk Shawl	750	375	1125	0.05	N/A
\tSilver Earings	500	250	750	0.06	N/A
\tThimble	500	250	750	0.1	N/A
Food	Broadleaf Plantain	0.5	0.3	0.8	0.01	
\tSt. John's Wort	0.3	0.2	0.5	0.01	
\tMorel Mushroom	2	1	3	0.1	
\tBerry	0.2	0.1	0.3	0.05	
\tBitter Bolete Mushroom	2	1	3	0.1	
\tBolete Mushroom	3	1.5	4.5	0.1	
\tFly Agaric Mushroom	2	1	3	0.1	
\tParasol Mushroom	3	1.5	4.5	0.1	
\tRed Pine Mushroom	3	1.5	4.5	0.1	
\tWooly Milkcap Mushroom	2	1	3	0.1	
\tChicory	0.4	0.2	0.6	0.01	
\tDaisy	0.5	0.3	0.8	0.01	
\tDandelion	0.6	0.3	0.9	0.01	
\tDeadly Nightshade	0.6	0.3	0.9	0.01	
\tHenbane	0.5	0.3	0.8	0.01	
\tThistle	0.4	0.2	0.6	0.01	
\tBeetroot	3	1.5	4.5	0.15	
\tCabbage	3	1.5	4.5	0.2	
\tCarrot	2	1	3	0.1	
\tOnion	2	1	3	0.1	
\tPoppy	3	1.5	4.5	0.05	
\tHoneycomb	10	5	15	0.1	
\tEgg	10	5	15	0.05	
\tBucket of Milk 10/10	180	90	270	2	
\tBucket of Soured Milk 10/10	180	90	270	2	
\tCheese	100	50	150	0.2	3
\tQuark	50	25	75	0.2	3
\tMeat	3	1.5	4.5	0.2	
\tFish Meat	4	2	6	0.2	
\tSalted Meat	16	8	24	0.25	4
\tSalted Fish Meat	18	9	27	0.2	4
\tDried Fish Meat	10	5	15	0.2	5
\tDried Meat	8	4	12	0.2	5
\tRoasted Meat	5	2.5	7.5	0.2	3
\tRoasted Fish Meat	6	3	9	0.2	3
\tFlour	5	2.5	7.5	0.01	1
\tPorridge	25	12.5	37.5	0.2	5
\tPorridge With Berries	50	25	75	0.25	5
\tPorridge With Apple	60	30	90	0.25	5
\tGruel	30	15	45	0.2	5
\tPotage	50	25	75	0.7	8
\tStew	40	20	60	0.75	7
\tSoup	50	25	75	0.75	8
\tVegetable Soup	100	50	150	0.8	8
\tMushroom Soup	20	10	30	0.2	3
\tMeat with Gravy	40	20	60	0.55	5
\tScrambled Egg	60	30	90	0.2	5
\tScrambled Egg With Mushroom	70	35	105	0.2	5
\tFlatbread	80	40	120	0.05	9
\tFlatbread with Onion	100	50	150	0.1	10
\tMultigrain Bread	170	85	255	0.15	13
\tWheat Bread	150	75	225	0.15	12
\tRye Bread	140	70	210	0.15	11
\tWhite Bread	120	60	180	0.15	11
\tOat Rolls	110	55	165	0.1	10
\tWheat Rolls	130	65	195	0.1	12
\tFruit Pie	175	87.5	262.5	0.1	15
\tMeat Pie	220	110	330	0.1	15
\tPoppy Seed Pie	190	95	285	0.1	15
\tCherry Pie	240	120	360	0.1	15
\tFish Tart	180	90	270	0.1	14
\tFruit Tart	155	77.5	232.5	0.1	14
\tPear Tart	190	95	285	0.1	14
\tPlum Tart	165	82.5	247.5	0.1	14
\tMeat Tart	180	90	270	0.1	14
\tRoach	2	1	3	0.2	
\tPerch	15	7.5	22.5	0.4	
\tPike	25	12.5	37.5	0.7	
\tApple	3	1.5	4.5	0.09	
\tPlum	2	1	3	0.07	
\tCherry	2	1	3	0.05	
\tPear	3	1.5	4.5	0.1	
\tUnripe Berry	0.1	0.1	0.2	0.05	
\tWheat Grain	10	5	15	0.02	
\tBeetroot Seed	8	4	12	0.01	
\tCabbage Seed	8	4	12	0.01	
\tCarrot Seed	5	2.5	7.5	0.01	
\tFlax Seed	10	5	15	0.01	
\tOat Grain	5	2.5	7.5	0.01	
\tOnion Seed	5	2.5	7.5	0.01	
\tRye Grain	5	2.5	7.5	0.01	
\tPoppy Seed	3	1.5	4.5	0.01	
\tApple Seedling	180	90	270	1	
\tCherry Seedling	150	75	225	1	
\tPear Seedling	200	100	300	1	
\tPlum Seedling	160	80	240	1	
\tHop Seedling	250	125	375	1	
\tOat	5	2.5	7.5	0.05	
\tRye	5	2.5	7.5	0.05	
\tWheat	10	5	15	0.06	
\tHop	3	1.5	4.5	0.02	
\tSalt	8	4	12	0.5	
\tBucket of Water 10/10	180	90	270	2	
\tWaterskin 4/4	170	85	255	0.25	5
Drinks	Berry Juice	110	55	165	0.6	2
\tApple Juice	130	65	195	0.6	3
\tCherry Juice	120	60	180	0.6	3
\tPear Juice	140	70	210	0.6	3
\tPlum Juice	150	75	225	0.6	3
\tBerry Wine	190	95	285	0.6	5
\tApple Wine	250	125	375	0.6	7
\tCherry Wine	240	120	360	0.6	7
\tPear Wine	260	130	390	0.6	7
\tPlum Wine	270	135	405	0.6	7
\tMead	280	140	420	0.4	6
\tOat Ale	180	90	270	0.5	4
\tOat Beer	230	115	345	0.5	5
\tRye Beer	240	120	360	0.5	5
\tWheat Beer	260	130	390	0.5	5
Potions	Potion of Sobriety	50	25	75	0.2	3
\tPotion of Cure	50	25	75	0.2	3
\tPotion of Satiety	50	25	75	0.2	3
\tPotion of Instant Cure	40	20	60	0.2	3
\tPoison	40	20	60	0.2	3
\tPotion of Healing I	40	20	60	0.2	3
\tPotion of Healing II	50	25	75	0.2	3
\tPotion of Health	60	30	90	0.2	3
\tPotion of Instant Healing I	40	20	60	0.2	3
\tPotion of Instant Healing II	50	25	75	0.2	3
\tPotion of Night Vision	50	25	75	0.2	3
\tPotion of Stamina	40	20	60	0.2	3
\tPotion of Strength	40	20	60	0.2	3
\tPotion of Temperature	50	25	75	0.2	3
\tPotion of Weight	60	30	90	0.2	3
\tPotion of Saturation	40	20	60	0.2	3
\tPotion of Possibilities	80	40	120	0.2	3
\tPotion of Camouflage	80	40	120	0.2	3
Animals	Sheep	2600	1300	3900	N/A	
\tLamb	1300	650	1950	N/A	
\tChicken	750	375	1125	N/A	
\tChick	375	187.5	562.5	N/A	
\tGoat	2000	1000	3000	N/A	
\tGoatling	1000	500	1500	N/A	
\tGoose	1000	500	1500	N/A	
\tGosling	500	250	750	N/A	
\tCow	3000	1500	4500	N/A	
\tCalf	1500	750	2250	N/A	
\tHorse	7000	3500	10500	N/A	
\tFoal	3500	1750	5250	N/A	
\tPig	1500	750	2250	N/A	
\tPiglet	750	375	1125	N/A	
\tDonkey	2500	1250	3750	N/A	
\tFoal	1750	875	2625	N/A	`.split(/\r?\n/).filter(line=>line.trim()!="").map(line => line.split('\t', -1).map(x=>x.trim()));
console.debug("itemsArray", itemsArray);

var headers = itemsArray[0];
console.debug("headers", headers);

const bucketRegex = /^(Bucket of (.*)) (\d+)\s*[/]\s*(\3)$/;

var gameItems = {};
var type;
for (var n=1; n<itemsArray.length; n++) {
    var row = itemsArray[n];
    type = (row[0] && row[0].toLowerCase().replaceAll(" ", "-").replace(/[^-\w\d]+/g, "")) || type;
    var columns = row.slice(1).map((c,i)=>[headers[i+1], c]).filter(e=>e[1]).reduce((obj, [key, value])=>{
        if (/^\s*\d*,\d+\s*$/.test(value)) {
            value = value.replace(",", '.');
        } else if (value.trim()=="N/A" || value.trim()=="") {
            value = null;
        }
        obj[key] = value;
        return obj;
    }, {});

    var itemName = columns["Item"];
    var divideBy = 1;
    {
        var bucketMatch = itemName.match(bucketRegex);
        if (bucketMatch) {
            //divideBy = bucketMatch[3];
            itemName = bucketMatch[1].trim();
        }
    }

    var item = {
        name: itemName, 
        type: type, 
        price: columns["Original Price"] / divideBy, 
        weight: columns["Weight (kg)"] / divideBy
    };
    if (columns["Manufactuing Time"]) {
        item["manufacturing-time"] = columns["Manufactuing Time"]  / divideBy;
    }
    var id = itemName.toLowerCase().replaceAll(" ", "-").replace(/^bucket-of-/,"bucket-").replace(/[-]*[(][^)]+[)].*/, "").replace(/[^-\w\d]+/g, "");
    gameItems[id] = item;
}
console.debug("gameItems", gameItems);

console.debug("types", Object.keys(gameItems).map(id=>gameItems[id].type).filter((v,i,a)=>a.indexOf(v)==i).sort());


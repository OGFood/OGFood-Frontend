const tempDataRecipes = [{
	name: "Pasta Bolognese",
	id: 1,
	ingredients: [
		{ ingredient: { id: "", name: "pasta" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "ground beef" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "tomatoes" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "oregano" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "onion" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "carrots" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "milk" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "pepper" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "salt" }, amount: 0, unit: "dl" },],
	// ingredients: ["pasta", "ground beef", "tomatoes", "oregano", "onion", "carrots", "milk", "salt", "pepper"],
	description: "Nothing beats a hearthy meal of Pasta Bolognese. This recipe is easy to make and makes the perfect lunch or dinner. It tastes just as good the day after, so cook some extra!",
	imgUrl: "https://cdn-rdb.arla.com/Files/arla-se/629559204/0a998d4e-d757-4ef1-9915-48189679c1eb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
	instructions: ["Cut up the vegetables. Fry them in a bit of butter in a big pot for 10 minutes until lightly coloured. Add oregano.", "Fry the ground beef in a pan with butter. Add salt and pepper.", "Add tomatoes and milk to the pan and let it simmer for a minute or two until the sauce thickens."],
	aproxTime: "10-15min"
},
{
	name: "Pizza",
	id: 2,
	ingredients: [
		{ ingredient: { id: "", name: "flour" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "cheese" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "salami" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "smoked ham" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "yeast" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "water" }, amount: 0, unit: "dl" },],
	// ingredients: ["dough", "cheese", "salami", "smoked ham", "yeast"],
	description: "Pizza, a modern classic! Make it as an everyday meal, or spice it up for your favourite weekend movie. A simple recipe made with home-made dough and tomatoes with shredded cheese. This pizza is topped with sliced ham, salami sausage, and mushrooms",
	imgUrl: "https://cdn-rdb.arla.com/Files/arla-se/66124392/d83377a8-d3ea-46bc-aee6-fca575172aef.jpg?crop=(0,0,0,-148)&w=1269&h=715&ak=f525e733&hm=5c342ed7",
	instructions: ["Prepare the dough and let it sit for 30 minutes.", "Prepare the oven, set it to 225c.", "Roll out the dough, make two semi-thin circles.", "Coat the dough in tomato-sauce, shred the cheese and use as topping together with the sausage.", "Put the pizza in the oven and let it cook for 15 minutes. Garnish with spices."],
	aproxTime: "10-15min"
},
{
	name: "Pad Thai",
	id: 3,
	ingredients: [
		{ ingredient: { id: "", name: "noodles" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "chicken" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "peanuts" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "chili flakes" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "sweet chili sauce" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "lime" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "eggs" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "shrimp" }, amount: 0, unit: "dl" },],
	// ingredients: ["noodles", "chicken", "peanuts", "chili flakes", "sweet chili sauce", "lime", "shrimp", "eggs", "coriander"],
	description: "A wonderful recipe for Pad Thai. Release the fragrances of the Thai Kitchen at your dinner table. Pad Thai is a street-food classic that everybody loves. Adjust the hotness after taste and throw some peanuts and chili flakes on top for extra garnish.",
	imgUrl: "https://cdn-rdb.arla.com/Files/arla-se/2703932663/0856b724-f44d-4afd-aa12-acd925ed24fb.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
	instructions: ["Add all ingredients to the sauce.", "Cook the noodles according to the instructions found on the package.", "Cut down the chicken and fry in a pan with oil until thoroughly cooked. Add onions and the shrimp. Fry for another minute or two.", "Whisk the eggs lightly in a pot and pour into the pan while giving it a stir. Prepare the chili, cut the peanuts and the coriander.", "Add the noodles, chili and sauce to the pan. Garnish with peanuts, chili flakes, and some slices of lime."],
	aproxTime: "10-15min"
},
{
	name: "Meatballs with mashed potatoes",
	id: 4,
	ingredients: [
		{ ingredient: { id: "", name: "ground beef" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "potatoes" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "cream sauce" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "sour cream" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "lingonberry sauce" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "onion" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "egg" }, amount: 0, unit: "dl" },],
	// ingredients: ["ground beef", "potatoes", "cream sauce", "lingonberry sauce", "onion", "egg", "sour cream"],
	description: "A swedish classic. Garnish with some diced apple and parsley for a slight twist.",
	imgUrl: "https://cdn-rdb.arla.com/Files/arla-se/3776820023/44d39292-0f40-46d6-a91c-0ff5931476e0.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
	instructions: ["Cut and dice the onion. Mix the ground beef with onion, eggs, and sour cream.", "Roll the meat into balls. Fry them in butter in a large pan for 5-7 minutes.", "Serve with lingonberry sauce, add diced apple on top as garnish."],
	aproxTime: "10-15min"
},
{
	name: "Salmon with pasta and lime",
	id: 5,
	ingredients: [
		{ ingredient: { id: "", name: "pasta" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "salmon" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "lime" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "honey" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "chicken broth" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "creme fraiche" }, amount: 0, unit: "dl" },],
	// ingredients: ["pasta", "salmon", "lime", "creme fraiche", "honey", "chicken broth"],
	description: "A quick and tasty everyday favourite. Served with a creamy sauce sweetened by honey, with some extra zing from lime.",
	imgUrl: "https://cdn-rdb.arla.com/Files/arla-se/3185386303/97993690-6b12-4db5-99e5-4a9c327dcf97.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
	instructions: ["Boil the pasta according to the instructions on the package", "Dice the salmon. Mix creme fraiche, chicken broth, honey, lime zest and juice in a pot. Let the sauce come to a boil.", "Add the salmon and let it boil for a minute or two. Serve with the pasta. Salt and pepper to taste."],
	aproxTime: "10-15min"
},
{
	//["milk", "eggs", "butter", "flour"],
	name: "Pancakes",
	id: 6,
	ingredients: [
		{ ingredient: { id: "", name: "milk" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "eggs" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "butter" }, amount: 0, unit: "dl" },
		{ ingredient: { id: "", name: "flour" }, amount: 0, unit: "dl" },],
	description: "Pancake - a clear favourite! Simple base recipe for thin pancakes. Throw them in the pan and serve with jam, cream, or why not some ice-cream!",
	imgUrl: "https://cdn-rdb.arla.com/Files/arla-se/3249856695/32b74f1c-1632-4aee-aa3b-8fd449494835.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790",
	instructions: ["Whisk the flour into the milk until it's a smooth mix. Add the rest of the milk, eggs and some salt.", "Let the mix rest for 10 minutes.", "Heat up some butter in a pan and pour the pancake-mix into the pan."],
	aproxTime: "10-15min"
},
];

export default tempDataRecipes;
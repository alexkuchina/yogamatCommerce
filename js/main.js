
//constructor notation function for yoga mats objects
function yogaMats(name, img, cost, info) {
	this.name = name;
	this.img = img;
	this.cost = cost;
	this.info = info;
};

var matManduka = new yogaMats('Manduka PROlite', "img/manduka.jpg", 80, 'Guaranteed to last a lifetime, the Manduka PROlite will never peel, flake, or fade, it only improves over time. Nontoxic, 100% latex free, and has an emissions-free manufacturing process.');
var matJade = new yogaMats('Jade Harmony Professional Mat', "img/jadeyoga.jpg", 74.95, "Great Grip - open cell natural rubber provides optimum grip, more resilience and cushion. Through its partnership with Trees for the Future, JadeYoga plants a Tree with every mat sold.");
var matHugger = new yogaMats('Hugger Mugger Para Rubber Mat', "img/hugger.jpg", 55, "Natural rubber yoga mat. Non-slip surfaces on both sides. 1/4 thickness for excellent cushion");
var matPrana = new yogaMats('PrAna E.C.O. Mat', "img/pranaeco.jpg", 48, "Two sided textured surface provides superior cushioning and excellent grip on hard surfaces. TPE material is UV resistant, lightweight, PVC free, chloride free, latex free and uses non-toxic materials in its production");
var matGaiam = new yogaMats('Gaiam Print Premium', "img/giamprint.jpg", 29.98, 'This PVC mat is free of the Phthalates DEHP, DBP, BBP, DINP, DIDP, and DNOP. Extra thick for additional cushioning - 5mm Thick. Textured non-slip surface');
var matLiforme = new yogaMats('Liforme Mat', "img/liforme.jpg", 140, 'Unique and original AlignForMe alignment system. Revolutionary "GripForMe" material for unparalleled grip whilst practicing. Made using the most "body kind" and eco-friendly materials and processes');

//console.log(matManduka, matJade, matHugger, matPrana, matGaiam, matLiforme);
var allMats = new Array

allMats.push(matManduka, matJade, matHugger, matPrana, matGaiam, matLiforme);

var info = document.createElement('h4');
var infoText = document.createTextNode('Like your practice, your yoga mat should be one that you invest in, one that you keep coming back to, and one that supports you through every inhale and exhale. It should feel like a little island you want to call home for every practice.');
info.appendChild(infoText);
document.getElementById('products').appendChild(info);

// loop through yoga mats array
for (var i = 0; i < allMats.length; i++) {

	//elements for each youga mat product
	var newCol = document.createElement('div');
	var nameH3 = document.createElement('H3');
	var pricePar = document.createElement('p');
	var infoP = document.createElement('p');
	var image = document.createElement('img');
	var button = document.createElement('button');

    
	//setting attributes to the new elements
    pricePar.setAttribute('id', 'price');
    infoP.setAttribute('id', 'info');
	button.className = 'btn btn-default';
	button.textContent = 'Buy';
	newCol.className = 'col-md-6';



	//link our new elements with yoga mats' object values 
	nameH3.textContent = allMats[i].name;
	pricePar.textContent = "Price: $" + allMats[i].cost;
	infoP.textContent = "Item description: " + allMats[i].info;
	image.src = allMats[i].img;
	image.setAttribute('width', '300');
	image.setAttribute('height', '300');

	//adding elements to new Divs and new Divs to the body
	newCol.appendChild(nameH3);
	newCol.appendChild(image);
	newCol.appendChild(pricePar);
	newCol.appendChild(infoP);
	newCol.appendChild(button);
	document.getElementById('products').appendChild(newCol);
}


































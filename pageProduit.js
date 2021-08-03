fetch("http://localhost:3000/api/teddies");



function showItem(articleEnCours){

  const sectionProduit = document.getElementById("produit");
  console.log(sectionProduit)


  const article = document.createElement("article"); //div div h3
  article.classList.add("produit");

  const item_img = document.createElement("div");
  item_img.classList.add("item_img");

  const divImg = document.createElement("div");
  divImg.classList.add("img");

  const img = document.createElement("img");
  img.id="item_img";
  img.setAttribute("src", "./images/peluches/teddy_4.jpg");
  img.setAttribute("alt", "nom de l'article");

  const item_description = document.createElement("div");
  item_description.id = "item-description";
  item_description.classList.add("item_description");

  const text_title = document.createElement("div");
  text_title.classList.add("text_title");

  const item_title = document.createElement("h1");
  item_title.id="item_title";
  item_title.textContent="EDOUARD";

  const item_price = document.createElement("h2");
  item_price.id="item_price";
  item_price.textContent=(articleEnCours.price/100 + " €");

  const text_description = document.createElement("div");
  text_description.classList.add("text_description");

  const item_desc = document.createElement("h2");
  item_desc.id="item_desc";
  item_desc.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const item_filtre = document.createElement("div");
  item_filtre.classList.add("item_filtre");

  const label = document.createElement("label");
  label.setAttribute("for", "item_colors");
  label.textContent="Choisissez sa couleur";

  const select = document.createElement("select");
  select.id="color_select";
  select.setAttribute("name", "colors");

  const option = document.createElement("option");
  option.setAttribute("value", "black");
  option.textContent="black";

  // const buy = document.createElement("div");

  const item_buy = document.createElement("div");
  item_buy.classList.add("item_buy", "panier");

  const link_panier = document.createElement("a");
  link_panier.href="#item_description";
  link_panier.title="ajouter au panier";

  const panier = document.createElement("i");
  panier.class="fas fa-shopping-cart fa-2x";


  link_panier.appendChild(panier);
  item_buy.appendChild(link_panier);

  select.appendChild(option);

  item_filtre.appendChild(label);
  item_filtre.appendChild(select);

  text_description.appendChild(item_desc);

  text_title.appendChild(item_title);
  text_title.appendChild(item_price);
  text_description.appendChild(item_desc);

  item_description.appendChild(text_title);
  item_description.appendChild(text_description);
  item_description.appendChild(item_filtre);
  item_description.appendChild(item_buy);

  divImg.appendChild(img);
  item_img.appendChild(divImg);
  article.appendChild(item_img);
  article.appendChild(item_description);

  sectionProduit.appendChild(article);
}

showItem();


// function addToPanier(){
//   const panier = getElementByClass("panier");
//
//
//   article.classList.add("produit");
// }




















// const newElt = document.createElement("div");
// Let elt = document.getElementById("main");

// elt.appendChild(newElt)


// function creath4(){
//   const item_price = document.createElement("h4");
//   item_price.id = 'item_price';
//   item_price.textContent = "2400€";
//   document.body.appendChild(item_price);
// }
// creath4();

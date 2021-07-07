fetch("http://localhost:3000/api/teddies");
function createArticle(){
  const item_price = document.createElement("h4"); //h4
  item_price.id = 'item_price';

  const text_price = document.createElement("div"); //div h4
  text_price.classList.add("text", "text_price");

  const item_img = document.createElement("img");//img
  item_img.id = "item_img";
  item_img.src = "./images/peluches/teddy_4.jpg";
  item_img.atl = "img";

  const text_img = document.createElement("div");//div img
  text_img.classList.add("img");

  const item_title = document.createElement("h3"); //h3
  item_title.id = 'item_title';

  const text_title = document.createElement("div"); //div h3
  text_title.classList.add("text", "text_title");

  const vignette = document.createElement("div"); //div div h3
  vignette.classList.add("vignette");

  const link = document.createElement("a");//a
  link.setAttribute("href", "pageProduit.html?ID=1234");
  // link.href="pageProduit.html?ID=1234";

  const article = document.createElement("article");//article
  article.classList.add("item");

  const items_list = document.getElementById("items_list");

  items_list.appendChild(article); //article
  article.appendChild(link); //a
  link.appendChild(vignette); //div div h3
  vignette.appendChild(text_title); //div h3
  vignette.appendChild(text_img); //div img
  vignette.appendChild(text_price); //div h4
  text_price.appendChild(item_price); //h4
  text_img.appendChild(item_img); //img
  text_title.appendChild(item_title); //h3

  item_price.textContent = "2400€"; //h4
  item_title.textContent = "EDOUARD"; //h3
}
createArticle();


function showItem(){

  const sectionProduit = document.getElementById("produit");

  const article = document.createElement("article"); //div div h3
  article.classList.add("produit");

  const item_img = document.createElement("div");
  item_img.classList.add("item_img");

  const img = document.createElement("div");
  img.classList.add("img");

  const item_description = document.createElement("div");
  item_description.id = "item-description";
  item_description.classList.add("item_description");

  const text_title = document.createElement("div");
  text_title.classList.add("text_title");

  const item_title = document.createElement("h1");
  item_title.id="item_title";

  const item_price = document.createElement("h2");
  item_price.id="item_price";

  const text_description = document.createElement("div");
  text_description.classList.add("text_description");

  const item_desc = document.createElement("h2");
  item_desc.id="item_desc";

  const item_filtre = document.createElement("div");
  item_filtre.classList.add("item_filtre");

  const label = document.createElement("label");
  label.for="item_colors";

  const select = document.createElement("select");
  select.id="color_select";
  select.setAttribute("name", "colors");

  const option = document.createElement("option");
  option.setAttribute("value", "black");

  // const buy = document.createElement("div");

  const item_buy = document.createElement("div");
  item_buy.classList("item_buy", "panier");

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
  text_description.appendChild(item_price);

  item_description.appendChild(text_title);
  item_description.appendChild(text_description);
  item_description.appendChild(item_filtre);
  item_description.appendChild(item_buy);

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

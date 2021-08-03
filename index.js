//---
//  CREATION DE LA REQUETE VERS L'API
//---
function getTeddies(){
  fetch("http://localhost:3000/api/teddies/")
    .then(async result_ => { // promise affichage array
        const response = await result_.json();
        for (let i = 0; i < response.length; i++){
          createArticle(response[i]);
        }
    })
      // creating the price's arr
      //boucle avec la fonction createArticle(reponse[i]) :

      // return response[0].price;
      // return response;
    .catch(error => alert(error.message));
}
getTeddies();

// function addition(nb1, nb2){
//   let result;
//   result = nb1+nb2;
//   return result;
// }
// let chiffre;
// chiffre = addition(4, 8);
// console.log(chiffre);

// const articleEnCours = result_.json([0]);
// console.log(articleEnCours[0]);


//---
// CREATION DES ELEMENTS COMPOSANT L'ARTICLE
//---
function createArticle(articleEnCours){
  // console.log(response[0].price);
  console.log(articleEnCours);
  const item_price = document.createElement("h4"); //h4
  item_price.id = 'item_price';
  item_price.textContent = (articleEnCours.price/100 + " €");

  const text_price = document.createElement("div"); //div h4
  text_price.classList.add("text", "text_price");

  const item_img = document.createElement("img");//img
  item_img.id = "item_img";
  item_img.src = articleEnCours.imageUrl;
  item_img.atl = "imageUrl";

  const text_img = document.createElement("div");//div img
  text_img.classList.add("img");

  const item_title = document.createElement("h3"); //h3
  item_title.id = 'item_title';
  item_title.textContent = articleEnCours.name;

  const text_title = document.createElement("div"); //div h3
  text_title.classList.add("text", "text_title");

  const vignette = document.createElement("div"); //div div h3
  vignette.classList.add("vignette");

  const link = document.createElement("a");//a
  link.setAttribute("href", "pageProduit.html?ID=");

  const article = document.createElement("article");//article
  article.classList.add("item");

  const items_list = document.getElementById("items_list");
  console.log(items_list); //on verrifie l'affichage de la structure de l'article
//---
// STRUCTURATION DES ELEMENTS CREES
//---
  items_list.appendChild(article); //article
  article.appendChild(link); //a
  link.appendChild(vignette); //div div h3
  vignette.appendChild(text_title); //div h3
  vignette.appendChild(text_img); //div img
  vignette.appendChild(text_price); //div h4
  text_price.appendChild(item_price); //h4
  text_img.appendChild(item_img); //img
  text_title.appendChild(item_title); //h3
  //item_price.textContent = "2400€"; //h4
  //item_title.textContent = "EDOUARD"; //h3
}
// createArticle();

//---
//  REMPLISSAGE DES ARTICLES AVEC LES DONNEES DE L'API
//---

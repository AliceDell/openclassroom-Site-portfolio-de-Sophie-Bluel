const galery = document.getElementById("gallery");
const url = 'http://localhost:5678/api/works';

fetch(url)
.then((resp) => resp.json())
.then(function(data) { 
  let work = data;
    return work.map(function(work) {
    console.log(work);
    
   
    let images = document.createElement("img")
    images.src = work.imageUrl;
    images.alt = work.title;
    images.crossorigin="anonymous";

    let fig = document.createElement("figurecaption");
    fig.innerHTML = work.title;
    
    let figure = document.createElement("figure");
    figure.appendChild(images);
    figure.appendChild(fig);
    galery.appendChild(figure);
  // a faire :   
 // déclarer un tableau var récupérer tout les projet par categoryid var work /
 // function de mettre à jour 
 // function qui récupére de tout les works et recherche un projet un va être ajouter dans un nouveau tableau
 // crée une fonction qui met à jour + la recherche

  // récupérer tout les projets
    var getAllWorks = work.id;
    console.log("id projet => "+ getAllWorks);

  // catégories
      var category = work.categoryId
      console.log("id category => "+ category);

  // recherche de catégorie
  
  // mettre à jour  
  })
})

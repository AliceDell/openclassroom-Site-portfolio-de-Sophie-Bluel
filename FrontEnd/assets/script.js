function createEl(element) {
    return document.createElement(element);
}

function parentAppend(parent, el) {
  return parent.appendChild(el);
}

const galery = document.getElementById("gallery");
const url = 'http://localhost:5678/api/works';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let work = data.results;
  return work.map(function(project) {
    console.log(project);
    console.log("tst");
   
    /*let images = document.createElement("img")
    image.src = projets.imageUrl;
    image.alt = projets.title;
    
    let fig = document.createElement("figurecaption");
    fig.innerHTML = work.title;
    
    let figure = document.createElement("figure");
    figure.appendchild(images)
    figure.appendchild(fig)
    */
  })
})

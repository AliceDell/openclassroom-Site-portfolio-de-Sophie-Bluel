function createEl(element) {
    return document.createElement(element);
}

function parentAppend(parent, el) {
  return parent.appendChild(el);
}

const galery = document.getElementsByClassName('gallery');
const url = 'http://localhost:5678/api/works';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let projets = data.results;
  return projets.map(function(work) {
    console.log(work)
   
  })
})

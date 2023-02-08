function createEl(element) {
    return document.createElement(element);
}

function parentAppend(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'http://localhost:5678/';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createEl('li');
    let img = createEl('img');
    let span = createEl('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    parentAppend(li, img);
    parentAppend(li, span);
    parentAppend(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
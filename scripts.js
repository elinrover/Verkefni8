const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);  
});

const text = (() => {
  let items;
  function init(_form, _items) {
    items = _items;
    for (let item of items.querySelectorAll('.item__checkbox')) {
      item.addEventListener('click', finish);
    }
    for (let item of items.querySelectorAll('.item__button')) {
      item.addEventListener('click', deleteItem);
    } 
    for (let item of items.querySelectorAll('.item__text')) {
      item.addEventListener('click', edit);
    }
    _form.addEventListener('submit', formHandler);
  }
  function isNullOrEmpty(str){
    return !str||!str.trim();
  }


  function formHandler(e) {
    e.preventDefault();
    var input = document.querySelector('.form__input').value;
    if (isNullOrEmpty(input)) {
      return;
    }
    add();
    for (let item of items.querySelectorAll('.item__checkbox')) {
      item.addEventListener('click', finish);
    } 
    for (let item of items.querySelectorAll('.item__button')) {
      item.addEventListener('click', deleteItem);
    }
    for (let item of items.querySelectorAll('.item__text')) {
      item.addEventListener('click', edit);
    }
    e.target.reset();
    console.log('halló heimur');
  }


  function finish(e) {
    if (e.target.checked) {
      e.target.parentElement.className += ' item--done';
    } else {
      e.target.parentElement.className = 'item';
    }
    console.log('Finish changes')
  }


  function edit(e) {
    var value = e.target.innerText;
    var elephant = e.target.parentElement;
    var newForm = document.createElement("form");
    newForm.className = "item__edit";
    var change = document.createElement("input");
    change.type = "text";
    change.className = "text__input";
    change.value = value;
    newForm.appendChild(change);
    e.target.replaceWith(newForm);
    newForm.addEventListener('submit', commit);
    console.log('Changes started');
  }


  function commit(e) {
    e.preventDefault();
    elephant = e.target.parentElement;
    let newSpan = document.createElement('span');
    newSpan.className = "item__text";
    let value = document.querySelector('.text__input').value;
    newSpan.appendChild(document.createTextNode(value));
    e.target.replaceWith(newSpan);
    newSpan.addEventListener('click', edit);
    console.log(value);
    console.log('Committed');
  }


  function add(value) {
    let input = document.querySelector('.form__input').value;
    let li = document.createElement("li");
    li.className = "item";
    let box = document.createElement("input");
    box.type = "checkbox";
    box.className = "item__checkbox";
    let span = document.createElement("span");
    span.className = "item__text";
    span.appendChild(document.createTextNode(input));
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Eyða"));
    button.className = "item__button";
    li.appendChild(box);
    li.appendChild(span);
    li.appendChild(button);
    items.appendChild(li);
    console.log(input);
  }


  function deleteItem(e) {
    e.target.parentElement.remove();
  }


  function el(type, className, clickHandler) {
  }


  return {
    init: init
  }
})();

var data = (localStorage.getItem('saveData')) ? JSON.parse(localStorage.getItem('saveData')):{
  title: [],
  text: []
};

renderData();

document.getElementById('save').addEventListener('click', addChild);

//save data local storage

//get the input value
function addChild(getValue){
  var titleValue = document.getElementById('inputTitle').value;
  var getValue = document.getElementById('textarea').value;
  if (getValue && titleValue){
    printChild(titleValue, getValue);
  }
  textarea.value= '';
  inputTitle.value= '';
}

function dataUpdated(){
  localStorage.setItem('saveData', JSON.stringify(data));
}


function renderData(){
  if (!data.title.length && data.text.length) return;

  for (var i=0; i < data.title.length&&data.text.length; i++){
    var titleValue = data.title[i];
    var getValue = data.text[i];
    makeChild(titleValue, getValue);
  }
}



function printChild(titleValue, getValue){
  makeChild(titleValue, getValue);
  document.getElementById('inputTitle').value='';
  document.getElementById('textarea').value='';


  data.title.push(titleValue);
  data.text.push(getValue);

  dataUpdated();
}




function makeChild(title, text){

  //get both of values typed in the box
//  var getValue = document.getElementById('textarea').value;
  //var titleValue = document.getElementById('inputTitle').value;


  //get the container of child box wrapper
  var childBox = document.getElementById('added');

  //get the child container
  var childContainer = document.createElement('li');
  childContainer.classList.add("addedBox");
  childBox.insertBefore(childContainer, childBox.childNodes[0]);

  var childTitle = document.createElement('p');
  childTitle.classList.add("title");
  childTitle.textContent = title;
  childContainer.appendChild(childTitle);

  var childText = document.createElement('textarea');
  childText.classList.add('sideText');
  childText.textContent = text;
  childContainer.appendChild(childText);

  var ulText = document.createElement('ul');
  childContainer.appendChild(ulText)

  var openChild = document.createElement('li');
  openChild.classList.add('lista');
  openChild.innerHTML = "open";
  ulText.appendChild(openChild);

  var removeChild = document.createElement('li');
  removeChild.classList.add('listb');
  removeChild.innerHTML = "remove";
  ulText.appendChild(removeChild);

  //open back the child

  openChild.addEventListener('click', function(){
    //var getChildValue = document.getElementById('sideText');
    document.getElementById('inputTitle').value = childTitle.textContent;
    document.getElementById('textarea').value = childText.textContent;
    window.scroll(0,0);
  });

  removeChild.addEventListener('click', function(){
    childContainer.remove();
    childTitle.remove();
    childText .remove();
    ulText.remove();
    openChild.remove();
    removeChild.remove();
    data.title.splice(data.title.indexOf(title), 1);
    data.text.splice(data.text.indexOf(text), 1);
    dataUpdated();
  });

}



//loop makeChild



document.getElementById('delete').addEventListener('click', function(){
  var getValue = document.getElementById('textarea').value = "";
  var getValue = document.getElementById('inputTitle').value= "";
});

function myFunction(){
  var getValue = document.getElementById('textarea');
  getValue.select();
  document.execCommand('copy');
}

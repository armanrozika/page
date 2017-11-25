document.getElementById('save').addEventListener('click', addChild);

//save data local storage


//get the input value
function addChild(getValue){
  var getValue = document.getElementById('textarea').value;
  var titleValue = document.getElementById('inputTitle').value;
  if (getValue && titleValue){
    makeChild();
  }
  textarea.value= '';
  inputTitle.value= '';

}


function makeChild(){
  //get both of values typed in the box
  var getValue = document.getElementById('textarea').value;
  var titleValue = document.getElementById('inputTitle').value;

  //get the container of child box wrapper
  var childBox = document.getElementById('added');

  //get the child container
  var childContainer = document.createElement('li');
  childContainer.classList.add("addedBox");
  childBox.insertBefore(childContainer, childBox.childNodes[0]);

  var childTitle = document.createElement('p');
  childTitle.classList.add("title");
  childTitle.textContent = titleValue;
  childContainer.appendChild(childTitle);

  var childText = document.createElement('textarea');
  childText.classList.add('sideText');
  childText.textContent = getValue;
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

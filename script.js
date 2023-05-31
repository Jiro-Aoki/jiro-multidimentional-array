let myArray = [];
function addItem() {
  console.log(myArray.length);
  if (myArray.length < 10){
    let input = document.getElementById("input").value;
    myArray.push(input);
  }
  else{
    alert("You cannot add, Maximum limit reached!");
  }
  displayList();
}

function removeFirst() {
  myArray.shift();
  displayList();
}

function removeLast() {
  myArray.pop();
  displayList();
}

function addFirst(){
        const newBrand= prompt("Insert new brand to the first");
        myArray.unshift(newBrand);
       displayList();
}

function addLast(){
        const newBrand= prompt("Insert new brand to the last");
        myArray.push(newBrand);
     displayList();
}

function displayList() {
  let list = document.getElementById("myList");
  list.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(myArray[i]));
    list.appendChild(item);
  }
}
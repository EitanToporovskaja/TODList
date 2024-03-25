// Create a "close" button and append it to each list item
var myNodelist= document.getElementsByTagName("LI");
//console.log(document.getElementsByTagName("LI"));//Dice: nada
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var arr=[];
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    arr.push (document.createElement("SPAN"));
    //console.log(document.createElement("SPAN"));//Dice: nada
  }
  
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function elementNuevo() {
  var fecha =new Date().toLocaleString();
  console.log(fecha);
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("No has agregado ninguna tarea");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  //console.log(document.createElement("SPAN"));//Dice: <span></span>
  var txt = document.createTextNode("\u00D7");
  //console.log(document.createTextNode("\u00D7"));Dice:´x´
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
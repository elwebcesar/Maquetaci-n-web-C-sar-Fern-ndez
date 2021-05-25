const datos_buscar = ["Imagen", "Fotografía", "Diseño", "Color", "Concepto", "Idea", "Creatividad", "Talento"];

function autocomplete(inp, arr) {
  let currentFocus;

  inp.addEventListener("input", function(e) {
      let a, b, i, val = this.value;
      closeAllLists();

      if (!val) { return false;}

      currentFocus = -1;

      a = document.createElement("div");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);

      arr.forEach(function (arr, index) {
        console.log(arr)
        console.log(index)

        if (arr.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr.substr(0, val.length) + "</strong>";
          b.innerHTML += arr.substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      });
  });
  
  inp.addEventListener("keydown", function(e) {
      let x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      console.log(e.keyCode)
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      }
      else if (e.keyCode == 38) { 
        currentFocus--;
        addActive(x);
      }
      else if (e.keyCode == 13) {  
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    console.log(x)
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("input_buscar"), datos_buscar);
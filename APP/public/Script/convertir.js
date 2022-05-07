function unite(str) {/*fonction retourne unite de devise et convertie en entier */
     str=parseFloat(str.substring(0,str.indexOf(" ")));
    return str;
}

    document
    .getElementById("etranger")
    .addEventListener("input", function(e) {
      document
        .getElementById("dinar")
        .innerText = e.target.value;
  });


// console.log(str);
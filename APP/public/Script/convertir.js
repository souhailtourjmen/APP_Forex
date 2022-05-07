function unite(str) {/*fonction retourne unite de devise et convertie en entier */
     str=parseFloat(str.substring(0,str.indexOf(" ")));
    return str;
}
function convertie(){
//  let str=document
//   .getElementById("etranger")
//   .addEventListener("input", function(e) {
//     document
//       .getElementById("dinar")
//       .value = e.target.value;
// });
let str=document.querySelector("#etranger").placeholder;

console.log(str);
document.getElementById("dinar").value =unite(str);
}


// console.log(str);
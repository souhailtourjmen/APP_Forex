function unite(str) {/*fonction retourne unite de devise et convertie en entier */
     str=parseFloat(str.substring(0,str.indexOf(" ")));
    return str;
}
function convertie(){

        let str=document.querySelector("#etranger").placeholder;
        let dinar=document.querySelector("#dinar").placeholder;
        let unitetr=unite(str);
        let unitdina=unite(dinar);
        let req=document.querySelector("#etranger").value;
        document.getElementById("dinar").value =((unitdina/unitetr)*req).toFixed(2);
        if(req==''){
            document.getElementById("dinar").value ="";
        }
}
function inverseconv(){
    let req=parseFloat(document.querySelector("#etranger").value);
    let req1=parseFloat(document.querySelector("#bestResultachat").textContent);
    document.getElementById("dinar").value =(req/req1).toFixed(2);
}

function text(a,b){
    let right=document.querySelector(a)
    let left=document.querySelector(b);
    let aux=right.textContent;
    right.innerHTML=left.textContent;
    left.innerHTML=aux;
    right.style.color = "red";
    left.style.color = "green";
}

function mouseOver(){
   text("#right","#left");
  inverseconv();
}
function mouseOut(){
    text("#left","#right");
    convertie();
}



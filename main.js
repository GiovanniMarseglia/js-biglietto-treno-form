let loginForm = document.getElementById("inv");

let reset = document.getElementById("reset");



reset.addEventListener("click", function() {
    location.reload();
})



loginForm.addEventListener("click", function() {

let age = document.getElementById("age1").value;
let km = document.getElementById("km2").value;
let name = document.getElementById("name1").value;
let total_price;
const price = 0.21;
let first_price = km * price;
const under = 20;
const over = 40;
let a;


visible.className = "d-block"





function RandomCP() {
    return Math.floor(Math.random() * (10000 - 1) + 0);
  }


  function RandomCrz() {
    return Math.floor(Math.random() * (20 - 1) + 0);
  }





document.getElementById("nomepsg").innerHTML = (`<p>${name}</p>`);
document.getElementById("crz").innerHTML = (`<p>${RandomCrz(a)}</p>`);
document.getElementById("CP").innerHTML = (`<p>${RandomCP(a)}</p>`);

if(age == "" || km == "" || name == ""){
    document.writeln("I campi non possono rimanere vuoti");
}
else{
if (age < 18){
    total_price = first_price - ((first_price / 100) * under); 
    document.getElementById("prz").innerHTML = (`<p>${total_price.toFixed(2)}€</p>`);
    document.getElementById("nomebgl").innerHTML = (`<p>Biglietto Under</p>`);
    

    
}
else if (age > 65){
    total_price = first_price - ((first_price / 100) * over);
    document.getElementById("prz").innerHTML = (`<p>${total_price.toFixed(2)}€ </p>`);
    document.getElementById("nomebgl").innerHTML = (`<p>Biglietto Over</p>`);
}
else{
    document.getElementById("prz").innerHTML = (`<p>${first_price.toFixed(2)}€</p>`);
    document.getElementById("nomebgl").innerHTML = (`<p>Biglietto Standard</p>`);
}
}
});
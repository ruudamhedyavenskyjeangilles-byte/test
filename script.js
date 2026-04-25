const display = document.getElementById("display");

function insert(input){
    display.value += input;
}

function toggleSign(){
    display.value = - display.value;
}

function clearDisplay(){
    display.value = "";
} 

function Del(){
    display.value = display.value.slice(0,-1)
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Erreur";
        setTimeout(clearDisplay,1500);
    }
}

function applySquareRoot() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);

    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        alert("Impossible de calculer la racine carrée d’un nombre négatif !");
    }
}
function k(MAX) {           //Nastavíme počet stran
    rnd = Math.random()* MAX//Vygenerujem číslo
    return Math.ceil(rnd)   //Vrátíme a zaokrouhlíme nahoru
}

console.log (k(6))          //6 esti straná kostka
console.log (k(12))
console.log (k(2))
function cesarsif(vstup, c) {

    let text = vstup.split("")
    celek = ""

    for (let i = 0; i < text.length; i++) {
        let znak = text[i]
        let kodabecedy = znak.charCodeAt(0)
        let znakZKodu = String.fromCharCode(kodabecedy + c)
        console.log(`Znak ${znak} na pozici ${i}: ${kodabecedy} na ${znakZKodu}`)
        celek = celek + znakZKodu
        return celek
    }
}

function cesardesif(vstup, c) {
    
    let text = vstup.split("")

    for (let i = 0; i < text.length; i--) {
        let znak = text[i]
        let kodabecedy = znak.charCodeAt(0)
        let znakZKodu = String.fromCharCode(kodabecedy + -c)
        console.log(`Znak ${znak} na pozici ${i}: ${kodabecedy} na ${znakZKodu}`)
        celek = celek + znakZKodu
    }
}

cesarsif("Adolf snifler", 1)
cesardesif(celek, 1)
console.log(celek)
//cezardesif(celek, -1)

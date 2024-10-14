// funktionen sind codeblöcke die ein stück eines programm sind, die ich beliebig oft aufrufen kann 
// sie können parameter von uns bekommen --> platzhalter für die argumente (geben wir beim calling ein) #variablen für die jeweilige fujnktion 
// funktionen können einen rückgabewert bekommen --> return
// welche zwei arten von funktionen haben wir genutzt?
// arrow function -->es6
// function notation -_> standard funktion in js/ts

// phase 1 = declaration, hier schreiben wir die funktion mit ihrem code den sie ausführen soll 
function sayHello(){
    console.log("hello");
}
// phase 2= calling, hier wird die funktion aufgerufen/ ausgeführt
sayHello();
// funktion mit parameter 
// wann könnte meine funktion einen parameter gebrauchen?
function greeting(user:string){
    console.log("hello"+ user);
}
greeting("neco")
// hier geben wir dem parameter user einen wert/ argument
// wenn eine funktion verwendet werden soll, mit verschiedenen werten, dann braucht sie einen parameter
// arrow function
// haben keinen eigenen namen, anonym 
const arrow = ()=>{
    console.log("Arrow");
}
arrow();
// was war nochmal ein return?
// gibt der funktion einen rückgabewert
const sum = (num1: number, num2:number): number => {
    return num1 + num2;
}
console.log(sum(4,4));
// 
const resultSum = sum(5,5);
console.log(resultSum);

// function die etwas multipliziert  und ich möchte das auto return feature nutzen 
// oneliner
const multiply = (num1: number, num2: number): number => num1 * num2;
const resultMulti = multiply(4,4)
console.log(resultMulti);
// wir bauen einen vermögenschecker 
// verschiedene werte immer gleich prüfen --> spricht für einen parameter
// welchen typ hat der wert: vermögen = zahlen --> number 
// unterschiedliche ergebnisse -> bedingungen 
// brauche ich das ergebnis im weiteren code
// ergebnis soll in die konsole also nein dann function :void 

const howRich = (cash: number):void => {
    if (cash <= 5009){
        console.log("du könntest mehr tun");
    } else if (cash >= 5001 && cash <= 15000){
        console.log("du bist auf einem guten weg vermögend zu werden");
    }
    else if (cash >= 15001 && cash <= 45000){
        console.log("du altes RichKid");
    } else {
        console.log("bitte gib eine zahl ein");
    }
    console.log(howRich);
}
// um negative zahlen abzufangen sollten wir unser if else if konstrukt erweitern 
// document.querySelector() --> hiermit kann ich ids, class, type, attributsselektion und normale css selektion
// document.getElementById() --> hiermit kann ich nur ids selektieren 
// beide können nur ein element fassen und selektieren
const nettoZuBrutto = document.querySelector('#nettoZuBrutto') as HTMLInputElement;
const bruttoZuNetto = document.querySelector('#bruttoZuNetto') as HTMLInputElement;
const neunzehnProzent = document.querySelector('#neunzehnProzent') as HTMLInputElement;
const siebenProzent = document.querySelector('#siebenProzent') as HTMLInputElement;
const betrag = document.querySelector('#betrag')as HTMLInputElement;
const berechne = document.querySelector('#berechne')as HTMLInputElement;
const ergebnisMehrwertssteuerbetrag = document.querySelector('#ergebnisMehwertssteuerbetrag')as HTMLElement;
const ergebnisHeadline = document.querySelector('#ergebnisHeadline')as HTMLElement;
const ergebnisBruttoOderNetto = document.querySelector('#ergebnisBruttoOderNetto')as HTMLElement;
const berechneHeadline= document.querySelector ('#berechneHeadline') as HTMLInputElement;
// wir nehmen das ? -_> optional chaining/ elvis
// element.addEventListener ("event", callback function)
// eine callback funktion ist eine funktion die an einer andere funktion übergeben wird, die von dieser irgendwann zu einem späteren zeitpunkt aufgerufen wird 
const changeText= () => {
    console.log("aufschlagen", nettoZuBrutto.checked);
    console.log("abziehen",bruttoZuNetto.checked); 
    if (bruttoZuNetto.checked) {
        berechneHeadline?.textContent = "Bruttobetrag (Preis inkl. Mehrwertsteuer in EUR";
        ergebnisHeadline?.textContent = "Nettobetrag"
    } else {
        berechneHeadline?.textContent = "Nettobetrag";
        ergebnisHeadline?.textContent = "Bruttobetrag"
    }
}
// element checked git uns einen boolean zurück 

nettoZuBrutto?.addEventListener("change", changeText);
bruttoZuNetto?.addEventListener("change", changeText);

berechne?.addEventListener('click', () =>{
    const userBetrag = Number(betrag.value)
    let bruttoBetrag; 
    let steuerBetrag;
    
    if (betrag.value){
        console.log("bitte gebe einen betrag ein");
        
    }

    if (neunzehnProzent.checked){
        // aufschlagen oder abziehen
        if(nettoZuBrutto.checked){
            bruttoBetrag = userBetrag* 1.19;
            steuerBetrag = bruttoBetrag - userBetrag;
            ergebnisMehrwertssteuerbetrag.textContent = steuerBetrag.toFixed(2) + " €";
            ergebnisBruttoOderNetto.textContent = bruttoBetrag.toFixed(2) + " €";
        } else {
            console.log("19% abziehen");
        }
    } else {
        if (nettoZuBrutto.checked){
           bruttoBetrag = userBetrag * 1.07; 
           steuerBetrag = bruttoBetrag - userBetrag;
           ergebnisBruttoOderNetto.textContent = bruttoBetrag.toFixed(2);
        } else {
           bruttoBetrag = userBetrag / 1.07; 
           steuerBetrag = userBetrag - bruttoBetrag;
           ergebnisBruttoOderNetto.textContent = bruttoBetrag.toFixed(2)
        }
        }
    } 
)

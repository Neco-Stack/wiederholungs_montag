// mit arrays kann man mehrere werte in einer liste speichern
// über den index --> array[zahl]
// zu den komplexen datentypen --> referenz typen 
// man kann nicht einfach wie bei primitiven datentypen die werte kopieren, sondern muss ein bisschen was beachten --> sonst ungewollte mutation des ursprungsarrays 
const numArr: number [] = [2,3,4,5,6];
console.log(numArr[2]);
// denke daran das der index von einem array bei 0 beginnt 
// slice(), spread operator, concat()
const numArr2: number [] = [...numArr];
numArr2.push(10);
// möchten wir elemente in einem array verändern (nicht sortieren), d.h. elemente hinzufügen, entfernen, filtern --> sollten wir uns immer ein neues array erstellen, so dass das ursprungsarray immer unverändert bleibt
// die loops iterieren durchlaufen jedes element in einem array 
//  find() steigt aus sobald es den gesuchten wert gefunden hat 
// map () sollte in eine variable gespeichert werden und genutzt wenn ich mit den veränderten elementen weiterarbeiten will/ muss im code
const multiArr = numArr.map((elt) => {
    return elt * 2
})
// forEach () nutze ich wenn ich alle elemente aus meinem array ausgeben möchte 
multiArr.forEach((elt) => {
    console.log((elt));
})
// 
console.clear();




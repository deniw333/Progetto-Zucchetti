let mappa1 = L.map('mappa1').setView([45.3138, 9.5025], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19,
    minZoom: 0
}).addTo(mappa1);

let mappa2 = L.map('mappa2').setView([45.3138, 9.5025], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19,
    minZoom: 0
}).addTo(mappa2);


const xhr = new XMLHttpRequest();
xhr.open("GET", "tappe.json", true);

xhr.addEventListener("load", () => {

    let dati = JSON.parse(xhr.responseText);

    const linea = [];
    const linea2 = [];

//mappa 1
// cicli 
const wayPoints = [];
const fantastici4 = L.icon({
    iconUrl:"marcatore.png",
    iconSize:[70,70]
})
for (let i= 0; i<9; i++){
   
    /* let marker =L.marker([dati[i].lat,dati[i].lon]).addTo(mappa1);
    marker.bindPopup( "<img src='" + dati[i].img + "' style='width:200px;'><h3>" + dati[i].nome + "</h3><p>" + dati[i].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[i].indirizzo + "</p><p><strong>Orari:</strong> " + dati[i].orari + "</p>"); */
    wayPoints.push(L.latLng(dati[i].lat, dati[i].lon));
    /* linea.push([dati[i].lat, dati[i].lon]) */
}
L.Routing.control({
    waypoints: wayPoints,
    language:"it",
    createMarker: function() {return false}
}).addTo(mappa1)

for(let i=0;i<9;i++) {
    let marker =L.marker([dati[i].lat,dati[i].lon],{icon:fantastici4}).addTo(mappa1);
    marker.bindPopup( "<img src='" + dati[i].img + "' style='width:200px;'><h3>" + dati[i].nome + "</h3><p>" + dati[i].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[i].indirizzo + "</p><p><strong>Orari:</strong> " + dati[i].orari + "</p>");
}

/* L.polyline(linea, { color: 'red' }).addTo(mappa1); */

for (let i= 9; i<16; i++){
   
   /*  let marker =L.marker([dati[i].lat,dati[i].lon]).addTo(mappa2);
    marker.bindPopup( "<img src='" + dati[i].img + "' style='width:200px;'><h3>" + dati[i].nome + "</h3><p>" + dati[i].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[i].indirizzo + "</p><p><strong>Orari:</strong> " + dati[i].orari + "</p>");
    linea2.push([dati[i].lat, dati[i].lon])*/
wayPoints.push(L.latLng(dati[i].lat, dati[i].lon));
}
 L.Routing.control({
    waypoints: wayPoints,
    language:"it",
    lineOptions: {
        styles: [
            { color: 'blue', weight: 5 }
        ]
    }
}).addTo(mappa2)

for(let i= 9; i<16; i++) {
    let marker =L.marker([dati[i].lat,dati[i].lon]).addTo(mappa2);
    marker.bindPopup( "<img src='" + dati[i].img + "' style='width:200px;'><h3>" + dati[i].nome + "</h3><p>" + dati[i].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[i].indirizzo + "</p><p><strong>Orari:</strong> " + dati[i].orari + "</p>");
}
/*L.polyline(linea2, { color: 'blue' }).addTo(mappa2);*/

});

xhr.send();

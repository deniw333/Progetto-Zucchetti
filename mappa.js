let mappa = L.map('mappa').setView([45.3138, 9.5025], 15);

let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
    minZoom:0
}).addTo(mappa);
const xhr = new XMLHttpRequest();

xhr.open("GET","tappe.json",true);
let dati;
xhr.addEventListener("load",()=> {
    dati= JSON.parse(xhr.responseText);

    const istituobassi = L.marker([dati[0].lat,dati[0].lon]).addTo(mappa);
    istituobassi.bindPopup("<h3>"+ dati[0].nome + "</h3><p>"+dati[0].descrizione+ "</p>")
})
xhr.send();
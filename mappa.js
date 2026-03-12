let mappa1 = L.map('mappa1').setView([45.3138, 9.5025], 15);

let osm1 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
    minZoom:0
}).addTo(mappa1);
const xhr = new XMLHttpRequest();

xhr.open("GET","tappe.json",true);
let dati;
xhr.addEventListener("load",()=> {
    dati= JSON.parse(xhr.responseText);
const MuseodellaStampaAndreaSchiavi = L.marker([dati[0].lat, dati[0].lon]).addTo(mappa1);
MuseodellaStampaAndreaSchiavi.bindPopup(dati[0].img+"<h3>"+ dati[0].nome +"</h3><p>"+ dati[0].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[0].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[0].orari +"</p>");

const CentroStoricodiLodi = L.marker([dati[1].lat, dati[1].lon]).addTo(mappa1);
CentroStoricodiLodi .bindPopup("<h3>"+ dati[1].nome +"</h3><p>"+ dati[1].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[1].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[1].orari +"</p>");

const RistoranteFuoriModena = L.marker([dati[2].lat, dati[2].lon]).addTo(mappa1);
 RistoranteFuoriModena.bindPopup("<h3>"+ dati[2].nome +"</h3><p>"+ dati[2].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[2].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[2].orari +"</p>");

//const MuseodellaStampadArteAndreaSchiavi = L.marker([dati[3].lat, dati[3].lon]).addTo(mappa);
//MuseodellaStampadArteAndreaSchiavi.bindPopup("<h3>"+ dati[3].nome +"</h3><p>"+ dati[3].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[3].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[3].orari +"</p>");

const PizzeriaArmandino = L.marker([dati[4].lat, dati[4].lon]).addTo(mappa1);
PizzeriaArmandino.bindPopup("<h3>"+ dati[4].nome +"</h3><p>"+ dati[4].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[4].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[4].orari +"</p>");

const MuseoEttoreArchinti = L.marker([dati[5].lat, dati[5].lon]).addTo(mappa1);
MuseoEttoreArchinti.bindPopup("<h3>"+ dati[5].nome +"</h3><p>"+ dati[5].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[5].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[5].orari +"</p>");

const Bistrot901 = L.marker([dati[6].lat, dati[6].lon]).addTo(mappa1);
Bistrot901.bindPopup("<h3>"+ dati[6].nome +"</h3><p>"+ dati[6].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[6].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[6].orari +"</p>");

const MuseodArteContemporaneaFolligeniali = L.marker([dati[7].lat, dati[7].lon]).addTo(mappa1);
MuseodArteContemporaneaFolligeniali.bindPopup("<h3>"+ dati[7].nome +"</h3><p>"+ dati[7].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[7].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[7].orari +"</p>");

const RistoranteAltaMarea = L.marker([dati[8].lat, dati[8].lon]).addTo(mappa1);
RistoranteAltaMarea.bindPopup("<h3>"+ dati[8].nome +"</h3><p>"+ dati[8].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[8].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[8].orari +"</p>");


let mappa2 = L.map('mappa2').setView([45.3138, 9.5025], 15);

let osm2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
    minZoom:0
}).addTo(mappa2);
const MuseoPaoloGorini = L.marker([dati[10].lat, dati[10].lon]).addTo(mappa2);
MuseoPaoloGorini.bindPopup("<h3>"+ dati[10].nome +"</h3><p>"+ dati[10].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[10].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[10].orari +"</p>");

const RistoranteLaPetiteMondina = L.marker([dati[11].lat, dati[11].lon]).addTo(mappa2);
RistoranteLaPetiteMondina.bindPopup("<h3>"+ dati[11].nome +"</h3><p>"+ dati[11].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[11].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[11].orari +"</p>");

const MuseodelloStrumentoMusicale = L.marker([dati[12].lat, dati[12].lon]).addTo(mappa2);
MuseodelloStrumentoMusicale.bindPopup("<h3>"+ dati[12].nome +"</h3><p>"+ dati[12].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[12].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[12].orari +"</p>");

const RistoranteAlSazio = L.marker([dati[13].lat, dati[13].lon]).addTo(mappa2);
RistoranteAlSazio.bindPopup("<h3>"+ dati[13].nome +"</h3><p>"+ dati[13].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[13].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[13].orari +"</p>");

const MuseodiocesanoArteSacra = L.marker([dati[14].lat, dati[14].lon]).addTo(mappa2);
MuseodiocesanoArteSacra.bindPopup("<h3>"+ dati[14].nome +"</h3><p>"+ dati[14].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[14].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[14].orari +"</p>");

const BarCavour = L.marker([dati[15].lat, dati[15].lon]).addTo(mappa2);
BarCavour.bindPopup("<h3>"+ dati[15].nome +"</h3><p>"+ dati[15].descrizione +"</p><p><strong>Indirizzo:</strong> "+ dati[15].indirizzo +"</p><p><strong>Orari:</strong> "+ dati[15].orari +"</p>");
/*const percorso1= L.layerGroup([MuseodellaStampaAndreaSchiavi,CentroStoricodiLodi, RistoranteFuoriModena,MuseoEttoreArchinti, Bistrot901,MuseodArteContemporaneaFolligeniali, MuseodArteContemporaneaFolligeniali,PizzeriaArmandino]);
const percorso2=L.layerGroup([RistoranteAltaMarea, MuseoPaoloGorini, RistoranteLaPetiteMondina, MuseodelloStrumentoMusicale, RistoranteAlSazio, MuseodiocesanoArteSacra, BarCavour,PizzeriaArmandino]);
const percorsi = {
  "Percorso1":percorso1,
  "Percorso2":percorso2  
}
let tipoMappa = {
    "OpenStreetMap": osm,
};*/
})
xhr.send();

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
    const MuseodellaStampaAndreaSchiavi = L.marker([dati[0].lat, dati[0].lon]).addTo(mappa1);
    MuseodellaStampaAndreaSchiavi.bindPopup(
        "<img src='" + dati[0].img + "' style='width:200px;'><h3>" + dati[0].nome + "</h3><p>" + dati[0].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[0].indirizzo + "</p><p><strong>Orari:</strong> " + dati[0].orari + "</p>"
    );
    linea.push([dati[0].lat, dati[0].lon]);

    const CentroStoricodiLodi = L.marker([dati[1].lat, dati[1].lon]).addTo(mappa1);
    CentroStoricodiLodi.bindPopup(
        "<img src='" + dati[1].img + "' style='width:200px;'><h3>" + dati[1].nome + "</h3><p>" + dati[1].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[1].indirizzo + "</p>"
    );
    linea.push([dati[1].lat, dati[1].lon]);

    const RistoranteFuoriModena = L.marker([dati[2].lat, dati[2].lon]).addTo(mappa1);
    RistoranteFuoriModena.bindPopup(
        "<img src='" + dati[2].img + "' style='width:200px;'><h3>" + dati[2].nome + "</h3><p>" + dati[2].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[2].indirizzo + "</p>"
    );
    linea.push([dati[2].lat, dati[2].lon]);

    const MuseodellaStampadArteAndreaSchiavi = L.marker([dati[3].lat, dati[3].lon]).addTo(mappa1);
    MuseodellaStampadArteAndreaSchiavi.bindPopup(
        "<img src='" + dati[3].img + "' style='width:200px;'><h3>" + dati[3].nome + "</h3><p>" + dati[3].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[3].indirizzo + "</p>"
    );
    linea.push([dati[3].lat, dati[3].lon]);

    const MuseoEttoreArchinti = L.marker([dati[4].lat, dati[4].lon]).addTo(mappa1);
    MuseoEttoreArchinti.bindPopup(
        "<img src='" + dati[4].img + "' style='width:200px;'><h3>" + dati[4].nome + "</h3><p>" + dati[4].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[4].indirizzo + "</p>"
    );
    linea.push([dati[4].lat, dati[4].lon]);

    const MuseodArteContemporaneaFolligeniali = L.marker([dati[5].lat, dati[5].lon]).addTo(mappa1);
    MuseodArteContemporaneaFolligeniali.bindPopup(
        "<img src='" + dati[5].img + "' style='width:200px;'><h3>" + dati[5].nome + "</h3><p>" + dati[5].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[5].indirizzo + "</p>"
    );
    linea.push([dati[5].lat, dati[5].lon]);

    const PizzeriaArmandino = L.marker([dati[6].lat, dati[6].lon]).addTo(mappa1);
    PizzeriaArmandino.bindPopup(
        "<img src='" + dati[6].img + "' style='width:200px;'><h3>" + dati[6].nome + "</h3><p>" + dati[6].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[6].indirizzo + "</p>"
    );
    linea.push([dati[6].lat, dati[6].lon]);

    const Bistrot901 = L.marker([dati[7].lat, dati[7].lon]).addTo(mappa1);
    Bistrot901.bindPopup(
        "<img src='" + dati[7].img + "' style='width:200px;'><h3>" + dati[7].nome + "</h3><p>" + dati[7].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[7].indirizzo + "</p>"
    );
    linea.push([dati[7].lat, dati[7].lon]);

    const RistoranteAltaMarea = L.marker([dati[8].lat, dati[8].lon]).addTo(mappa1);
    RistoranteAltaMarea.bindPopup(
        "<img src='" + dati[8].img + "' style='width:200px;'><h3>" + dati[8].nome + "</h3><p>" + dati[8].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[8].indirizzo + "</p>"
    );
    linea.push([dati[8].lat, dati[8].lon]);

    L.polyline(linea, { color: 'red' }).addTo(mappa1);

    // mappa 2

    const AlbergoAnelli = L.marker([dati[9].lat, dati[9].lon]).addTo(mappa2);
    AlbergoAnelli.bindPopup(
        "<img src='" + dati[9].img + "' style='width:200px;'><h3>" + dati[9].nome + "</h3><p>" + dati[9].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[9].indirizzo + "</p>"
    );
    linea2.push([dati[9].lat, dati[9].lon]);

    const MuseoPaoloGorini = L.marker([dati[10].lat, dati[10].lon]).addTo(mappa2);
    MuseoPaoloGorini.bindPopup(
        "<img src='" + dati[10].img + "' style='width:200px;'><h3>" + dati[10].nome + "</h3><p>" + dati[10].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[10].indirizzo + "</p>"
    );
    linea2.push([dati[10].lat, dati[10].lon]);

    const MuseodelloStrumentoMusicale = L.marker([dati[11].lat, dati[11].lon]).addTo(mappa2);
    MuseodelloStrumentoMusicale.bindPopup(
        "<img src='" + dati[11].img + "' style='width:200px;'><h3>" + dati[11].nome + "</h3><p>" + dati[11].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[11].indirizzo + "</p>"
    );
    linea2.push([dati[11].lat, dati[11].lon]);

    const RistoranteLaPetiteMondina = L.marker([dati[12].lat, dati[12].lon]).addTo(mappa2);
    RistoranteLaPetiteMondina.bindPopup(
        "<img src='" + dati[12].img + "' style='width:200px;'><h3>" + dati[12].nome + "</h3><p>" + dati[12].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[12].indirizzo + "</p>"
    );
    linea2.push([dati[12].lat, dati[12].lon]);

    const RistoranteAlSazio = L.marker([dati[13].lat, dati[13].lon]).addTo(mappa2);
    RistoranteAlSazio.bindPopup(
        "<img src='" + dati[13].img + "' style='width:200px;'><h3>" + dati[13].nome + "</h3><p>" + dati[13].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[13].indirizzo + "</p>"
    );
    linea2.push([dati[13].lat, dati[13].lon]);

    const CentroStorico = L.marker([dati[14].lat, dati[14].lon]).addTo(mappa2);
    CentroStorico.bindPopup(
        "<img src='" + dati[14].img + "' style='width:200px;'><h3>" + dati[14].nome + "</h3><p>" + dati[14].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[14].indirizzo + "</p>"
    );
    linea2.push([dati[14].lat, dati[14].lon]);

    const MuseodiocesanoArteSacra = L.marker([dati[15].lat, dati[15].lon]).addTo(mappa2);
    MuseodiocesanoArteSacra.bindPopup(
        "<img src='" + dati[15].img + "' style='width:200px;'><h3>" + dati[15].nome + "</h3><p>" + dati[15].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[15].indirizzo + "</p>"
    );
    linea2.push([dati[15].lat, dati[15].lon]);

    const BarCavour = L.marker([dati[16].lat, dati[16].lon]).addTo(mappa2);
    BarCavour.bindPopup(
        "<img src='" + dati[16].img + "' style='width:200px;'><h3>" + dati[16].nome + "</h3><p>" + dati[16].descrizione + "</p><p><strong>Indirizzo:</strong> " + dati[16].indirizzo + "</p>"
    );
    linea2.push([dati[16].lat, dati[16].lon]);

    L.polyline(linea2, { color: 'blue' }).addTo(mappa2);

});

xhr.send();
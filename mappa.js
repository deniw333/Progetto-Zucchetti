const avv1 = document.getElementById("avv1");
const avv2 = document.getElementById("avv2");

// MAPPE
let mappa1 = L.map('mappa1').setView([45.3138, 9.5025], 15);
let mappa2 = L.map('mappa2').setView([45.3138, 9.5025], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
}).addTo(mappa1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
}).addTo(mappa2);

// VARIABILI GLOBALI
let coords1 = [];
let coords2 = [];

const xhr = new XMLHttpRequest();
xhr.open("GET", "tappe.json", true);

xhr.addEventListener("load", () => {
    let dati = JSON.parse(xhr.responseText);

    const wayPoints1 = [];
    const wayPoints2 = [];

    // ICONE
    const fantastici4 = L.icon({
        iconUrl: "marcatore.png",
        iconSize: [90, 90],
        iconAnchor: [35, 70] 
    });

    const fant1 = L.icon({
        iconUrl: "fantastici4.png",
        iconSize: [90, 90],
        iconAnchor: [35, 70] 
    });

    const fant2 = L.icon({
        iconUrl: "fantastici4.png",
        iconSize: [90, 90],
        iconAnchor: [35, 70]
    });

    // MARKER CHE SI MUOVONO
    let primo = L.marker([dati[0].lat, dati[0].lon], { icon: fant1 }).addTo(mappa1);
    let secondo = L.marker([dati[9].lat, dati[9].lon], { icon: fant2 }).addTo(mappa2);

    // ---------------- MAPPA 1 ----------------
    for (let i = 0; i < 9; i++) {
        wayPoints1.push(L.latLng(dati[i].lat, dati[i].lon));

        L.marker([dati[i].lat, dati[i].lon], { icon: fantastici4 })
            .addTo(mappa1)
            .bindPopup(`<h3>${dati[i].nome}</h3><img src="${dati[i].img}" style="width:200px;">`);
    }

    let control1 = L.Routing.control({
        waypoints: wayPoints1,
        language: "it",
        createMarker: () => false
    }).addTo(mappa1);

    // SALVO COORDINATE
    control1.on('routesfound', function(e) {
        coords1 = e.routes[0].coordinates;
    });

    // CLICK AVV1
    avv1.addEventListener("click", function () {
        coords1.forEach((coord, index) => {
            setTimeout(() => {
                primo.setLatLng([coord.lat, coord.lng]);
            }, 30 * index);
        });
    });

    // ---------------- MAPPA 2 ----------------
    for (let i = 9; i < 16; i++) {
        wayPoints2.push(L.latLng(dati[i].lat, dati[i].lon));

        L.marker([dati[i].lat, dati[i].lon],{ icon: fantastici4 })
            .addTo(mappa2)
            .bindPopup(`<h3>${dati[i].nome}</h3>`);
    }

    let control2 = L.Routing.control({
        waypoints: wayPoints2,
        language: "it",
        lineOptions: {
            styles: [{ color: 'green', weight: 5 }]
        },
        createMarker: () => false
    }).addTo(mappa2);

    // SALVO COORDINATE
    control2.on('routesfound', function(e) {
        coords2 = e.routes[0].coordinates;
    });

    // CLICK AVV2
    avv2.addEventListener("click", function () {
        coords2.forEach((coord, index) => {
            setTimeout(() => {
                secondo.setLatLng([coord.lat, coord.lng]);
            }, 30 * index);
        });
    });

});

xhr.send();

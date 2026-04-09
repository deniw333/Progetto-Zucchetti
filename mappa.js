let mappa1 = L.map('mappa1').setView([45.3138, 9.5025], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
}).addTo(mappa1);

let mappa2 = L.map('mappa2').setView([45.3138, 9.5025], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
}).addTo(mappa2);

const xhr = new XMLHttpRequest();
xhr.open("GET", "tappe.json", true);

xhr.addEventListener("load", () => {
    let dati = JSON.parse(xhr.responseText);

    const wayPoints1 = [];
    const wayPoints2 = [];
    const fantastici4 = L.icon({
        iconUrl: "marcatore.png",
        iconSize: [70, 70],
        iconAnchor: [35, 70] 
    });

    // Marker che si deve muovere
    let primo = L.marker([dati[0].lat, dati[0].lon]).addTo(mappa1);

    // --- MAPPA 1 ---
    for (let i = 0; i < 9; i++) {
        wayPoints1.push(L.latLng(dati[i].lat, dati[i].lon));
        // Aggiungo i marker fissi con popup
        L.marker([dati[i].lat, dati[i].lon], { icon: fantastici4 }).addTo(mappa1)
            .bindPopup("<h3>" + dati[i].nome + "</h3><img src='" + dati[i].img + "' style='width:200px;'>");
    }

    let control1 = L.Routing.control({
        waypoints: wayPoints1,
        language: "it",
        createMarker: function() { return false; }
    }).addTo(mappa1);

    control1.on('routesfound', function(e) {
        let coords = e.routes[0].coordinates;
        coords.forEach(function(coord, index) {
            setTimeout(() => {
                primo.setLatLng([coord.lat, coord.lng]);
            }, 30 * index);});
    });

    for (let i = 9; i < 16; i++) {
        wayPoints2.push(L.latLng(dati[i].lat, dati[i].lon));
        L.marker([dati[i].lat, dati[i].lon]).addTo(mappa2)
            .bindPopup("<h3>" + dati[i].nome + "</h3>");
    }

    L.Routing.control({
        waypoints: wayPoints2,
        language: "it",
        lineOptions: {
            styles: [{ color: 'blue', weight: 5 }]
        },
        createMarker: function() { return false; }
    }).addTo(mappa2);

});

xhr.send();

<?php
$currentYear = date("Y");
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Percorsi - Fuoriclasse a Lodi </title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="styleheader.css">

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
crossorigin=""></script>

<script src="mappa.js" defer></script>

</head>

<body>

<header class="site-header">
<div class="header-bar">

<a href="home.php" class="logo-link">
<img src="logo-img.png" alt="Fuoriclasse a Lodi" class="logo-img">
</a>

<button class="hamburger" id="hamburger">&#9776;</button>

<nav id="nav-menu">
<ul id="menu">
<li><a href="home.php"><strong>Home</strong></a></li>
<li><a href="chisiamo.php"><strong>Chi Siamo</strong></a></li>
<li><a href="percorsi.php"><strong>Percorsi</strong></a></li>
</ul>
</nav>

</div>
</header>

<main class="main-content">

<h1>Percorsi Disponibili</h1>

<div class="percorsi-container">

<div class="percorso">
<h2>Percorso Storico</h2>
<p>Descrizione del primo percorso.</p>
<p>Questo percorso attraversa alcuni dei luoghi culturali e gastronomici più interessanti della città di Lodi. Inizia dal Museo della Stampa Andrea Schiavi, dove è possibile scoprire la storia della tipografia e delle tecniche di stampa. Prosegue poi nel Centro storico di Lodi, il cuore della città, ricco di edifici storici, piazze e monumenti. Il percorso continua tra musei dedicati all’arte e alla cultura locale, come il Museo Ettore Archinti e il Museo d'Arte Contemporanea Folligeniali, offrendo un viaggio tra tradizione e creatività contemporanea. L’itinerario include anche diverse tappe gastronomiche, tra cui il ristorante Fuori Modena, la Pizzeria Armandino, il Bistrot 901 e il ristorante Alta Marea, dove è possibile assaporare piatti tipici e specialità della cucina italiana. Questo itinerario permette quindi di unire arte, storia e buona cucina in una piacevole visita alla città. 
</p>
</div>

<div class="percorso">
<h2>Percorso Artistico</h2>
<p>Descrizione del secondo percorso.</p>
<p>Questo secondo percorso si sviluppa nel centro della città di Lodi e combina luoghi culturali, storici e gastronomici. Parte dall’Albergo Anelli, una struttura situata vicino al centro, ideale come punto di partenza per esplorare la città. Prosegue verso il Museo Paolo Gorini, museo dedicato allo scienziato lodigiano noto per i suoi studi anatomici e scientifici. Il percorso continua con il Museo dello Strumento Musicale, dove sono esposti strumenti musicali storici che raccontano l’evoluzione della musica nel tempo.

L’itinerario include anche alcune tappe gastronomiche, come il La Petite Mondina e il Al Sazio, ristoranti dove è possibile assaporare piatti della tradizione italiana. Successivamente si raggiunge il Centro storico di Lodi, ricco di monumenti, palazzi storici e piazze caratteristiche.

Il percorso continua con la visita al Museo Diocesano di Arte Sacra, che conserva opere religiose e testimonianze artistiche della storia ecclesiastica del territorio. L’ultima tappa è il Bar Cavour, un luogo ideale per una pausa o un aperitivo prima di concludere il percorso. 
</p>
</div>

</div>


<div id="Bigmap">

<div id="mappa1">
</div>

<div id="mappa2"></div>

</div>

</main>

<footer class="site-footer">
<p>&copy; <?php echo $currentYear; ?> Fuoriclasse a Lodi</p>
</footer>

<script>
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});
</script>

</body>
</html>
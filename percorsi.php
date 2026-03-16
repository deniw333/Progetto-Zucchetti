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
<img src="logofuori-removebg-preview.png" alt="Fuoriclasse a Lodi" class="logo-img">
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
<p>Questo percorso ti permette di scoprire Lodi con una piacevole passeggiata tra le vie del centro storico, immergendoti nell'atmosfera della città. Lungo il tragitto potrai ammirare edifici storici e luoghi legati all'arte e alla tradizione locale, scoprendo la storia e la cultura del territorio. Allo stesso tempo, il percorso offre anche diverse occasioni per fermarsi e gustare piatti tipici della cucina italiana, rendendo la visita ancora più piacevole. È un itinerario perfetto per vivere la città con calma, tra cultura, storia e buon cibo.

</p>
</div>

<div class="percorso">
<h2>Percorso Artistico</h2>
<p>Descrizione del secondo percorso.</p>
<p>Questo percorso ti permette di esplorare Lodi nel cuore della città, unendo cultura, storia e buon cibo. Si snoda tra musei affascinanti, come quelli dedicati alla scienza, alla musica e all'arte sacra, e luoghi storici che raccontano la vita e le tradizioni locali. Lungo il tragitto ci sono anche diverse soste gastronomiche, perfette per assaporare piatti tipici italiani, e momenti di relax in caffè o bar dove fermarsi a godersi l'atmosfera della città. È un itinerario che invita a passeggiare con calma, scoprire storie interessanti e lasciarsi conquistare dai sapori e dai colori di Lodi.

</p>
</div>

</div>
</main>

<div id="Bigmap">
    <div id="mappa1"></div>
    <div id="mappa2"></div>
</div>



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
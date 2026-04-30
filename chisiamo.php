<?php
$currentYear = date("Y");
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Chi siamo - Fuoriclasse a Lodi</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="styleheader.css">
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
<li><a href="chisiamo.php"><strong class="active">Chi Siamo</strong></a></li>
<li><a href="percorsi.php"><strong>Percorsi</strong></a></li>
</ul>
</nav>

</div>
</header>
<div class="strongman">
<main class="main-content">

<h1>Il nostro progetto</h1>

<div class="section-box">
<p>
Questo progetto è stato realizzato da un gruppo di studenti con
l'obiettivo di valorizzare il patrimonio storico e artistico
della città di Lodi.
</p>
</div>

<div class="section-box">
<h2>Obiettivi del progetto</h2>
<p>
Approfondire la conoscenza del patrimonio culturale di Lodi.
</p>
</div>

<div class="section-box">
<h2>Il percorso culturale</h2>
<ul>
<li>Visita ai musei</li>
<li>Scoperta delle chiese</li>
<li>Storia e arte del territorio</li>
</ul>
</div>

</main>
<div class="dady">
    <h1>Chi siamo</h1>
<div class="cont1">
    <div>
    <img src="keci.png" alt="">
    <p class="section-box ">Barra di navigazione HTML + CSS
Intestazione della pagina home
Verificare e creare footer della pagina home
Struttura grafica generale delle pagine
</p>
    </div>
    <div>
    <img src="denise.png" alt="">
    <p class="section-box ">Creazione del file JSON
File di testo per le tappe (.txt)
Organizzazione dei dati che verranno mostrati sulla mappa
Preparazione del codice base delle pagine in PHP</p>
    </div>
</div>
<div class="cont2">
    <div> <img src="rayane.png" alt="">
    <p class="section-box ">Gestione dei comandi (gruppi di marcatori)
Creazione dei popup dei marcatori
Scelta e impostazione della tipologia di mappa (tile)
File di testo per i percorsi</p>
    </div>
    <div>
    <img src="manina.png" alt="">
    <p class="section-box ">Barra di navigazione HTML + CSS
Intestazione della pagina home
Verificare e creare footer della pagina home
Struttura grafica generale delle pagine
</p>
    </div>
</div>
</div>
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

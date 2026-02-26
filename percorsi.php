<?php
$currentYear = date("Y");
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Percorsi - Fuoriclasse a Lodi</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleheader.css">
</head>
<body>

<header class="site-header">
    <div class="header-bar">
        <a href="home.php" class="logo-link">
            <img src="img/png.png" alt="Fuoriclasse a Lodi" class="logo-img">
        </a>

        <button class="hamburger" id="hamburger">&#9776;</button>

        <nav id="nav-menu">
            <ul id="menu">
                <li><a href="home.php">Home</a></li>
                <li><a href="chisiamo.php">Chi siamo</a></li>
                <li><a href="percorsi.php">Percorsi</a></li>
            </ul>
        </nav>
    </div>
</header>

<main class="main-content">
    <h1>Percorsi Disponibili</h1>

    <div class="percorsi-container">
        <div class="percorso">
            <h2>Percorso 1</h2>
            <p>Descrizione del primo percorso. Puoi aggiungere immagine o dettagli.</p>
        </div>
        <div class="percorso">
            <h2>Percorso 2</h2>
            <p>Descrizione del secondo percorso. Puoi aggiungere immagine o dettagli.</p>
        </div>
    </div>
</main>

<footer class="site-footer">
    <p>&copy; <?php echo $currentYear; ?> Tutti i diritti riservati.</p>
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

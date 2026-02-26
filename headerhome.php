<?php
$currentYear = date("Y");
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Fuoriclasse a Lodi</title>
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
                <li><a href="info.php">Info</a></li>
            </ul>
        </nav>

    </div>
</header>

<main class="main-content">
   benvenuti nel sito
</main>

<footer class="site-footer">
<p>&copy; 2026 Tutti i diritti riservati.</p>
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

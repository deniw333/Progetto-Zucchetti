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
   <h1 id="keci"><strong>Benvenuti su</strong></h1>

   <img src="logo-img.png" width="600px" class="fontimg">

   <p id="baboni">Un viaggio insieme oltre la scuola, verso nuove scoperte</p>
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
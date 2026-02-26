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
<script>
  	$(document).ready(function(){   
		$(".nav-menu").click(function() {
		$("#menu").toggleClass("mostra-smartmenu");
		});
	});
</script>
<header class="site-header">
    <div class="header-bar">

        <!-- LOGO -->
        <a href="index.php" class="logo-link">
            <img src="img/png.png" alt="Fuoriclasse a Lodi" class="logo-img">
        </a>

        <!-- HAMBURGER -->
        <button class="hamburger" id="hamburger">&#9776;</button>

        <!-- NAVBAR -->
        <nav id="nav-menu">
            <ul id="#menu">
                <li><a href="index.php">Home</a></li>
                <li><a href="chisiamo.php">Chi siamo</a></li>
                <li><a href="info.php">Info</a></li>
            </ul>
        </nav>

    </div>
</header>

<main class="main-content">
    <!-- Contenuto della pagina -->
</main>

<script>
    // Toggle menu hamburger
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
</script>

</body>
</html>

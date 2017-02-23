<?php include('config.php'); ?>
<!DOCTYPE html>
<html>
    <head>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Size My Area - Map Area Comparator</title>
        <!-- loading jsPanel css -->
        <link rel="stylesheet" href="css/jquery.jspanel.min.css">
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
		<div id="map"></div>
        <!-- loading jQuery -->
        <script src="js/jquery-3.1.1.min.js"></script>
        <!-- loading jsPanel javascript -->
        <script src="js/jquery.jspanel-compiled.min.js"></script>
        <script src="js/javascript.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo(API_KEY); ?>&callback=initMap" async defer></script>
    </body>
</html>

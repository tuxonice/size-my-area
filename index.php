<?php include('config.php'); ?>
<!DOCTYPE html>
<html>
    <head>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Size My Area - Map Area Comparator</title>
        <!-- OPTIONALLY load jQuery UI css (which theme doesn't matter regarding jsPanel) -->
        <link rel="stylesheet" href="vendor/jquery-ui-1.12.1.complete/jquery-ui.min.css">
        <!-- loading jsPanel css -->
        <link rel="stylesheet" href="source/jquery.jspanel.css">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
		<div id="map"></div>
        <!-- loading jQuery -->
        <script src="vendor/jquery/jquery-3.1.1.min.js"></script>
        <!-- OPTIONALLY load jQuery UI and jQuery UI Touch Punch js -->
        <script src="vendor/jquery-ui-1.12.1.complete/jquery-ui.min.js"></script>
        <!-- <script src="vendor/jquery.ui.touch-punch.min.js"></script> -->
        <!-- loading jsPanel javascript -->
        <script src="source/jquery.jspanel-compiled.js"></script>
        <script src="javascript.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo(API_KEY); ?>&callback=initMap" async defer></script>
    </body>
</html>

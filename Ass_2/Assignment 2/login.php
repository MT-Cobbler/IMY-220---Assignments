<?php
// See all errors and warnings

use function PHPSTORM_META\type;

error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

$server = "localhost";
$username = "root";
$password = "";
$database = "dbUser";
$mysqli = mysqli_connect($server, $username, $password, $database);


$email = isset($_POST["regEmail"]) ? $_POST["regEmail"] : false;
$pass = isset($_POST["regPass"]) ? $_POST["regPass"] : false;



if (isset($_POST['submit'])) {
	/*------------Upload single image at a time--------------
	// Get the directory for the file
	$target = "gallery/" . basename($_FILES['picToUpload']['name']);

	$image = $_FILES['picToUpload']['name'];//get the file name------

	$userID = $_POST['user_id'];


	//--------------We need to do some checks before it cam be uploaded----------------
	$imageType = strtolower(pathinfo($target, PATHINFO_EXTENSION));
	if ($imageType === "jpeg" || $imageType === "jpg" && $_FILES['picToUpload']['size'] < 1048576) {
		if ($_FILES['picToUpload']['error'] > 0) {
			echo "Error";
		} else {
			if (!file_exists($target)) {
				$sql = "INSERT INTO tbgallery (user_id, filename) VALUES ('$userID','$image')";
				if ($mysqli->query($sql) === TRUE) {

					if (move_uploaded_file($_FILES['picToUpload']['tmp_name'], $target)) {
						
					} else {
					}
				}
			} else {
			}
		}
	}
------------Upload single image at a time--------------*/
	/*----------------Upload multiple at a time------------*/
	$targetFile = "gallery/";
	$uploadFile = $_FILES['picToUpload'];
	$numFiles = count($uploadFile['name']);
	$userID = $_POST['user_id'];


	for ($i = 0; $i < $numFiles; $i++) {
		$target = $targetFile . $uploadFile['name'][$i];
		$imageType = strtolower(pathinfo($target, PATHINFO_EXTENSION));

		$image = $uploadFile['name'][$i];

		if ($imageType === "jpeg" || $imageType === "jpg" && $uploadFile['size'][$i] < 1048576) {

			if ($uploadFile['error'][$i] > 0) {
			} else {

				// if (!file_exists($target)) {
				$sql = "INSERT INTO tbgallery (user_id, filename) VALUES ('$userID','$image')";
				if ($mysqli->query($sql) === TRUE) {

					if (move_uploaded_file($uploadFile['tmp_name'][$i], $target)) {
					} else {
					}
				}
				// }
			}
		}
	}


	//-----------------Upload multiple at a time------------*/


}

?>

<!DOCTYPE html>
<html>

<head>
	<title>IMY 220 - Assignment 2</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css" />
	<meta charset="utf-8" />
	<meta name="author" content="Matthew Schoeman">
	<!-- Replace Name Surname with your name and surname -->

</head>

<body>
	<div class="container">
		<?php

		if ($email && $pass) {

			$getID = "SELECT user_id FROM tbusers WHERE email = '$email' AND password = '$pass'";
			$result = $mysqli->query($getID);
			$sResult = mysqli_fetch_array($result);
			$userID = $sResult['user_id'];

			$query = "SELECT * FROM tbusers WHERE email = '$email' AND password = '$pass'";
			$res = $mysqli->query($query);
			if ($row = mysqli_fetch_array($res)) {
				echo 	"<table class='table table-bordered mt-3'>
								<tr>
									<td>Name</td>
									<td>" . $row['name'] . "</td>
								<tr>
								<tr>
									<td>Surname</td>
									<td>" . $row['surname'] . "</td>
								<tr>
								<tr>
									<td>Email Address</td>
									<td>" . $row['email'] . "</td>
								<tr>
								<tr>
									<td>Birthday</td>
									<td>" . $row['birthday'] . "</td>
								<tr>
							</table>";

				echo 	"<form method='POST' action='login.php' enctype='multipart/form-data'>
								<div class='form-group'>
									<input type='hidden' name='regEmail' value='" . $email . "'/>
									<input type='hidden' name='regPass' value='" . $pass . "'/>
									<input type='hidden' name='user_id' value='" . $userID . "'/>
									<input type='file' class='form-control' name='picToUpload[]' id='picToUpload' multiple='multiple' /><br/>
								
				 					<input type='submit' class='btn btn-standard' value='Upload Image' name='submit' />
				 				</div>
						  </form>";
				echo "

					<h1>Image Gallery</h1>
					<div>
					<div class='row imageGallery'>";
				$query = "SELECT * FROM tbgallery WHERE user_id = '$userID'";
				$result = $mysqli->query($query);
				if ($result->num_rows > 0) {
					// output data of each row
					while ($row = $result->fetch_assoc()) {
						echo "<div class='col-3' style='background-image: url(gallery/" . $row['filename'] . ")'></div>";
					}
				} else {
				}
				echo "</div>
				";
			} else {
				echo 	'<div class="alert alert-danger mt-3" role="alert">
	  							You are not registered on this site!
	  						</div>';
			}
		} else {
			echo 	'<div class="alert alert-danger mt-3" role="alert">
	  						Could not log you in
						  </div>';
						  
		}

		?>
	</div>
</body>

</html>
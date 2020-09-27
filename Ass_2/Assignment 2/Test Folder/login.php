<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "image_upload";
$mysqli = mysqli_connect($server, $username, $password, $database);

if($mysqli){
	echo "Connect 1";
}
// If the upload button is pressed
if (isset($_POST['upload'])) {
	$target =  "gallery/" . basename($_FILES['image']['name']);

	//connect to the server

	

	// Get all the submitted data from the form
	$image = $_FILES['image']['name'];

	$text = $_POST['text'];


	$sql = "INSERT INTO images (image,text) VALUES ('$image','$text')";


	// Now let's move the uploaded image to the folder : gallery
	if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
		echo "Image uploaded successfully";
	} else {
		echo "Upload unsuccessful";
	}
}
?>
<!DOCTYPE html>
<html>

<head>
	<title>Image Upload</title>
	<style type="text/css">
		#content {
			width: 50%;
			margin: 20px auto;
			border: 1px solid #cbcbcb;
		}

		form {
			width: 50%;
			margin: 20px auto;
		}

		form div {
			margin-top: 5px;
		}

		#img_div {
			width: 80%;
			padding: 5px;
			margin: 15px auto;
			border: 1px solid #cbcbcb;
		}

		#img_div:after {
			content: "";
			display: block;
			clear: both;
		}

		img {
			float: left;
			margin: 5px;
			width: 300px;
			height: 140px;
		}
	</style>
</head>

<body>
	<div id="content">
		<?php
				$server = "localhost";
				$username = "root";
				$password = "";
				$database = "image_upload";
				$mysqli = mysqli_connect($server, $username, $password, $database);
				if($mysqli){
					echo "Connect 2";				}
				$sql = "SELECT * FROM images";
				$result = $mysqli->query($sql);
				while ($row = $result->fetch_array()) {
					echo "<div><img src='gallery/" . $row['image'] . "'/> <p>" . $row['text'] . "</p></div>";
				}
				mysqli_close($mysqli); 
		?>
		<form method="POST" action="#" enctype="multipart/form-data">
			
			<div>
				<input type="file" name="image">
			</div>
			<div>
				<textarea id="text" cols="40" rows="4" name="text" placeholder="Say something about this image..."></textarea>
			</div>
			<div>
				<input type="submit" name="upload" value="Upload Image">
			</div>
		</form>
	</div>
</body>

</html>
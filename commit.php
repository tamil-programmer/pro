
 <script type="text/javascript">
     <?php require_once("script.js");?>
     
</script>
<?php 



$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
echo "<script  type='text/javascript'>
commit();
</script>";

// header("Location: http://localhost/pro/index.php");







?>
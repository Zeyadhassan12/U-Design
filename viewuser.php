<head>
	<title>View Name</title>
	
</head>

<body>
	<h1>View user</h1>
	<table border="1">
		<tr>
			<td>First name</td>
			<td>Last name</td>
			<td>Email</td>
			<td>password</td>
		</tr>
	<?php
	include "config.php";
	
	$viewuser = "SELECT * FROM Accounts";
	$result = mysqli_query($con,$viewuser);
	if(!$result){
		die("Error: ".mysqli_errno($con));
	}
	
	while($row = mysqli_fetch_array($result)){
		echo "
			<tr>
				<td>".$row["firstName"]."</td>
				<td>".$row["lastName"]."</td>
				<td>".$row["email"]."</td>
				<td>".$row["password"]."</td>

			</tr>
		";
	}
	?>
	</table>
</body>

</html>

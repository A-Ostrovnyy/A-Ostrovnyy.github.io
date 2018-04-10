<?PHP

	$connect = mysql_connect("localhost", "root", "");
	$db = mysql_select_db("test");

	$name = strip_tags(trim($_POST['name']));
	$phone = strip_tags(trim($_POST['phone']));
	$email = strip_tags(trim($_POST['email']));
	$text = strip_tags(trim($_POST['text']));

	if($name && $phone && $email && $text){
		mysql_query("
			INSERT INTO users (name, phone, email, text)
			VALUES ('$name', '$phone', '$email', '$text')
		");

	mysql_close();
	}
	else{
		echo "Fail";
	}
?>		

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Guestbook</title>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css">
		<style>
			.form-container {
				max-width: 500px;
				margin: 50px auto;
				padding: 20px;
			}
			h2 {
				text-align: center;
			}
		</style>
	</head>
	<body>
		<div class="form-container">
			<h2>Guestbook Form</h2>
			<form class="pure-form pure-form-stacked" method="post" action="/JavaWeb/guestbook">
				<fieldset>
					<legend>Guestbook Form</legend>
					<label>留言:</label>
					<input name="message" type="text" required />
					
					<button type="submit" class="pure-button pure-button-primary">送出</button>
					
				</fieldset>
			
			</form>
		</div>
	</body>
</html>
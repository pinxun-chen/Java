<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>咖啡</title>
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
			<h2>咖啡</h2>
			<form class="pure-form pure-form-stacked" method="post" action="/JavaWeb/coffee">
				<fieldset>
					<legend>User Form</legend>
					<label>請輸入牛奶毫升數:(ml)</label>
					<input name="milk" type="number" min="0.1" max="1000" step="0.1" required />
					
					<label>請輸入咖啡毫升數:(ml)</label>
					<input name="coffee" type="number" min="0.1" max="1000" step="0.1" required />

					<button type="submit" class="pure-button pure-button-primary">送出</button>
					
				</fieldset>
			
			</form>
		</div>
	</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>咖啡資料結果</title>
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
			<h2>咖啡資料結果</h2>
			<fieldset>
				<legend>Coffee Result</legend>
				咖啡: ${ coffee.coffeeType }<p />
				牛奶(ml): ${ coffee.milk }<p />
				咖啡(ml): ${ coffee.coffee }<p />
				<a href="/JavaWeb/coffee" class="pure-button pure-button-primary">返回</a>
			</fieldset>
		</div>
	</body>
</html>
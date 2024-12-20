<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Event Management Website - Footer</title>
<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<!-- Font Awesome CSS (for icons) -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<style>
.footer {
	background-color: #131313;
	color: #fff;
	padding: 50px 0;
}

.footer-links {
	list-style-type: none;
	padding-left: 0;
}

.footer-links li {
	margin-bottom: 10px;
}

.footer-links li a {
	color: #fff;
	text-decoration: none;
	transition: color 0.3s ease;
}

.footer-links li a:hover {
	color: orange;
	
}
</style>
</head>
<body>

	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<h5>About Us</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div class="col-md-4">
					<h5>Quick Links</h5>
					<ul class="footer-links">
						<li><a href="Home.jsp">Home</a></li>
						<li><a href="Event-category.jsp">Events</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
				<div class="col-md-4">
					<h5>Contact Us</h5>
					<p>
						123 Event Street<br>City, State 12345<br>Email:
						info@example.com<br>Phone: 123-456-7890
					</p>
				</div>
			</div>
			<hr style="background-color: #555;">
			<div class="text-center">
				<p>&copy; 2024 Event Management. All rights reserved by PK.</p>
			</div>
		</div>
	</footer>

	<!-- Bootstrap JS-->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
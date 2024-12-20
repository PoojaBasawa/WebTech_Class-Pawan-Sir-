<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.event.model.Registration"%>
<%@page import="com.event.model.Events"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Events | PK</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
	crossorigin="anonymous">
<title>Events | PK</title>

<style>
.image-container {
	background-size: cover;
	background-position: center;
	height: 100%;
	width: 100%;
}

.row-container {
	height: 500px;
}

.col-sec-2 {
	position: relative;
}

.book-now {
	position: absolute;
	bottom: 0;
	transform: translateY(-50px);
}

#msg {
	color: green;
	text-align: center;
	width: 100%;
	font-weight: bold;
	font-size: 25px;
	padding: 5px;
}
</style>
</head>
<body>

	<%@include file="Header.jsp"%>

	<div class="container py-5 ">
		<%
		if (request.getAttribute("status") != null) {
		%>
		<div id="msg">
			<%=request.getAttribute("status")%></div>
		<%
		}
		%>


		<div class="row row-container border  p-5 g-2">
			<%
			Registration reg = new Registration(session);
			ArrayList<Events> al = reg.getEventInfo(request.getParameter("event-category"));
			Iterator<Events> itr = al.iterator();

			while (itr.hasNext()) {

				Events e = itr.next();
			%>
			<div class="col-md-5 col-lg-6 p-5">
				<div class="image-container"
					style="background-image: url(imgs/gallery/<%=e.getEventImage()%>.jpg);"></div>
			</div>
			<div class="col-md-7 col-lg-6 p-5 col-sec-2">
				<div class="h1 fs-1 text-success   mb-3 fw-bolder ">
					<%=e.getEventName()%>
				</div>
				<div
					class="h3 mb-3 text-center text-white bg-danger d-inline-block rounded p-1 fw-bold"><%=e.getEventCost()%>
				</div>
				<div class="h4"><%=e.getEventDetails()%>
				</div>


				<%
				if (session.getAttribute("uname") != null) {
				%>
				<a href="EventBooking.jsp?event_id=<%=e.getEventId()%>" class="btn btn-primary">Book
					Now</a>
				<%
				} else {
				session.setAttribute("logoutredirect", "Events.jsp?event-category=" + request.getParameter("event-category"));
				%>
				<a href="Login.jsp" class="btn btn-primary">Book Now</a>
				<%
				}
				}
				%>

			</div>

		</div>
	</div>

	<%@include file="Footer.jsp"%>

	<!-- Bootstrap  -->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
		crossorigin="anonymous"></script>

</body>
</html>
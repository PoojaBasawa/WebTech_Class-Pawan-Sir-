<%@page import="com.event.model.Events"%>
<%@page import="com.event.model.Registration"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Book an Event</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
</head>
<style>
td input {
	display: block;
}

.jumbotron {
	background-color: white;
}

.errmsg {
	background: green;
	padding: 10px;
	width: 50%;
	color: white;
	font-weight: bold;
	text-align: center;
}

.error {
	color: red;
}

.jumbotron label {
	width: 110px;
}
</style>
<script>
	//            jQuery.validator.addMethod( name, method [, message ] )
	//            
	// value---> "current value of the validated element".
	//elememt---> " element to be validated ".

	jQuery.validator
			.addMethod(
					"checkemail",
					function(value, element) {
						return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
								.test(value)
								|| /^[0-9]{10}$/.test(value);
					});
	jQuery(document).ready(function($) {
		$("#bookevent").validate({
			rules : {
				name : {
					required : true
				},
				email : {
					required : true,
					checkemail : true
				},
				pno : {
					required : true,
					minlength : 10,
					maxlength : 10
				},
				address : {
					required : true
				},
				edate : {
					required : true,
				}
			},
			messages : {
				name : {
					required : "Please enter the name."
				},
				email : {
					required : "Please enter the email.",
					email : "Please enter valid email id"
				},
				pno : {
					required : "Please enter the number.",
					minlength : "Please enter the  10 digit number .",
					maxlength : "more than 10 digits."
				},
				address : {
					required : "Please enter the address.",
				},
				edate : {
					required : "Please select the date.",
				}
			}
		});
	});
</script>
<body>
	<%@include file="Header.jsp"%>

	<%
	if (request.getAttribute("status") != null) {
	%>
	<h1 class="d-flex justify-content-center align-item-center mt-5 fw-bolder fs-3 text-success">
		<%=request.getAttribute("status")%></h1>
	<%
	}
	%>
	<br>
	<%
	if (session.getAttribute("uname") != null) {
		Registration reg = new Registration(session);
		Events s = reg.getEventFormInfo(request.getParameter("event_id"));
	%>

	<form action='addtocart' method='POST' id="bookevent">
		<div class="container ">
			<div
				class="jumbotron d-flex justify-content-center align-items-center flex-column mb-5 w-100">

				<h2 class="text-center fs-1 text-primary fw-bolder mb-5">Book
					anEvent</h2>
				<div
					class="form-group col-md-8 d-flex justify-content-center align-items-center gap-3">
					<label style="width: 170px;" class="fw-bold">Name</label> <input type="text"
						class="form-control w-100" name="name"
						value="<%=session.getAttribute("uname")%>">
				</div>
				<div
					class="form-group col-md-8 d-flex justify-content-center align-items-center gap-3 ">
					<label style="width: 170px;" class="fw-bold ">Phone Number</label> <input
						type="number" class="form-control w-100" name="pno"
						value="<%=session.getAttribute("uphone")%>">
				</div>
				<div
					class="form-group col-md-8 d-flex justify-content-center align-items-center gap-3">
					<label style="width: 170px;" class="fw-bold">Email</label> <input type="email"
						class="form-control w-100" name="email"
						value="<%=session.getAttribute("uemail")%>">
				</div>
				<div
					class="form-group col-md-8 d-flex justify-content-center align-items-center gap-3">
					<label style="width: 170px;" class="fw-bold">Address</label> <input type="text"
						class="form-control w-100" name="address" value="">
				</div>
				<div
					class="form-group col-md-8 d-flex justify-content-center align-items-center gap-3">
					<label style="width: 170px;" class="fw-bold">Event Name</label> <input type="text"
						class="form-control 100" name="ename" value="<%=s.getEventName()%>"
						readonly>
				</div>
				<div
					class="form-group col-md-8 d-flex justify-content-center align-items-center gap-3">
					<label style="width: 170px;" class="fw-bold">Event cost</label> <input
						type="number" class="form-control w-100" name="ecost"
						value="<%=s.getEventCost()%>" readonly>
				</div>
				<div
					class="form-group col-md-8 d-flex justify-content-center align-items-center gap-3">
					<label style="width: 170px;" class="fw-bold">Date of Event</label> <input
						type="date" class="form-control w-100" name="edate" value="">
				</div>
				<input type="hidden" name="event_id"
					value="<%=request.getParameter("event_id")%>">
				<button type="submit"
					class="btn btn-sm fw-bolder btn-success px-4 mt-3 py-2 "
					name="bookevent">Book Now</button>

			</div>
		</div>
	</form>
	<%
	}
	%>

	<%@include file="Footer.jsp"%>
</body>
</html>

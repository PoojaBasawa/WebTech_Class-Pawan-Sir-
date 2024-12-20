<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Event-Category | PK</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <style>
        .event-card {

            transition: transform 0.3s ease-in-out;
        }

        .event-card:hover {

            transform: translateY(-10px);
        }

        .event-img {
            /* border-radius: 50%; */
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
    </style>
</head>
<body>
	<%@include file="Header.jsp" %>
	<div class="container mt-5">
		<div class="text-success fw-bold fs-1 text-center ">Event Categories</div>	
        <div class="row mb-3 mt-3 p-5 text-center">
            <!-- Event 1 -->
            <div class="col-3">
                <div class=" event-card">
                    <img src="imgs/gallery/wedding.jpg" class="card-img-top event-img mb-3" alt="Event 1">
                    <div class="card-body">
                        <a href="Events.jsp?event-category=wedding"><h5 class="btn btn-danger fw-bold mt-3 text-center">Wedding</h5></a>

                    </div>
                </div>
            </div>
            <!-- Event 2 -->
            <div class="col-3">
                <div class=" event-card">
                    <img src="imgs/gallery/reception.jpg" class="card-img-top event-img mb-3" alt="Event 2">
                    <div class="card-body">
                        <a href="Events.jsp?event-category=reception"><h5 class="btn btn-danger fw-bold mt-3 text-center">Reception</h5></a>

                    </div>
                </div>
            </div>
            <!-- Repeat for other events... -->
            <!-- Event 3 -->
            <div class="col-3">
                <div class=" event-card">
                    <img src="imgs/gallery/party.jpg" class="card-img-top event-img mb-3" alt="Event 3">
                    <div class="card-body">
                       <a href="Events.jsp?event-category=party"><h5 class="btn btn-danger fw-bold mt-3 text-center">Party</h5></a>

                    </div>
                </div>
            </div>
            <!-- Event 4 -->
            <div class="col-3">
                <div class=" event-card">
                    <img src="imgs/gallery/mehndi.jpg" class="card-img-top event-img mb-3" alt="Event 4">
                    <div class="card-body">
                        <a href="Events.jsp?event-category=mehndi"><h5 class="btn btn-danger fw-bold mt-3 text-center">Mehndi</h5></a>

                    </div>
                </div>
            </div>
        </div>

        <div class="row text-center mb-5 px-5 pt-3 pb-5">
            <!-- Event 5 --> 
            <div class="col-3">
                <div class=" event-card">
                    <img src="imgs/gallery/family.jpg" class="card-img-top event-img mb-3" alt="Event 5">
                    <div class="card-body">
                        <a href="Events.jsp?event-category=family"><h5 class="btn btn-danger fw-bold mt-3 text-center">Family</h5></a>

                    </div>
                </div>
            </div>
            <!-- Event 6 -->
            <div class="col-3">
                <div class=" event-card">
                    <img src="imgs/gallery/decorate.jpg" class="card-img-top event-img mb-3" alt="Event 6">
                    <div class="card-body">
                        <a href="Events.jsp?event-category=decorate"><h5 class="btn btn-danger fw-bold mt-3 text-center">Decorate</h5></a>

                    </div>
                </div>
            </div>
            <!-- Event 7 -->
            <div class="col-3">
                <div class=" event-card">
                    <img src="imgs/gallery/corporate.jpg" class="card-img-top event-img mb-3" alt="Event 7">
                    <div class="card-body">
                        <a href="Events.jsp?event-category=corporate"><h5 class="btn btn-danger fw-bold mt-3 text-center">Corporate</h5></a>

                    </div>
                </div>
            </div>
            <!-- Event 8 -->
            <div class="col-3">
                <div class=" event-card">
                    <img src="imgs/gallery/birthday.jpg" class="card-img-top event-img mb-3" alt="Event 8">
                    <div class="card-body">
                        <a href="Events.jsp?event-category=birthday"><h5 class="btn btn-danger fw-bold mt-3 text-center">Birthday</h5></a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <%@include file="Footer.jsp" %>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-IMTRzjw/jWJFc4PtwlZ2YnD8TezCU7ziEQa5zIsXqhDn9u6zV5QiJ56UoFXbrRL9"
        crossorigin="anonymous"></script>

</body>
</html>
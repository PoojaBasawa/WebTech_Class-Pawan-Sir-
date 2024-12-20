<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <!--
            jquery validation 
        -->

    <script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>


    <!--
            /jquery validation
        -->
    <title>Login</title>
    <style>
        .error {
            color: red;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

/*  Login  */
.bg-holder {
    background-image: url(img/bg-holder-login.jpg);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.devider-content-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 0.5rem;
    background-color: white;
    font-weight: 600;

}

.forgotpw {
    text-decoration: none;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    border-radius: 30px;
    overflow: hidden;

}

.container-group {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

}
#msg {
	color: Green;
	text-align: center;
	width: 100%;
	font-weight: bold;
	font-size: 25px;
	padding: 5px;
	margin-top: 10px;
}
    </style>
</head>
<body>
		 <%@include file="Header.jsp" %>
		
	   <div class="container-group">
	   
	   <%
	   	String category=request.getParameter("category");
	   %>
	   
	   <%if(category!=null){
		   %>
		   <div><%=category %></div>
		   <%} %>
	   
	  
        <div class="container">
        <% if (request.getAttribute("status") != null) {%>
 			<div id="msg"> <%= request.getAttribute("status")%></div>
 			<%}%>
            <div class="wrapper shadow">
            	
                <div class="row w-100  g-0 ">
                    <div class="col-lg-6 d-none d-lg-block position-relative ">
                        <div class='bg-holder'></div>
                    </div>
                    <div class="col-lg-6 w-100">
                        <div
                            class="row text-center d-flex align-items-center justify-content-center h-100 g-0 px-3 px-sm-0  py-5 ">
                            <div class="col-sm-6 col-lg-7 col-xl-6 w-100">
                                <div class="text-center mb-4">
                                    <h1 class='fw-bold text-dark '>Log In</h1>
                                    <p class="text-secondary">Get access to your account</p>
                                </div>
                                <div class="position-relative">
                                    <hr class="text-secondary my-4 " />
                                    <div class="devider-content-center fw-bolder">Or</div>
                                </div>
                                <form action="register" method="post" id="login">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">
                                            <i class='bx bx-user'></i>
                                        </span>
                                        <input type="text" class="form-control form-control-lg w-75"
                                            placeholder=" Enter the email" name="email" id="email" />
                                    </div>

                                    <div class="input-group mb-3">
                                        <span class="input-group-text">
                                            <i class='bx bx-lock-alt'></i>
                                        </span>
                                        <input type="password" class="form-control form-control-lg w-75"
                                            placeholder="Enter the password" name="pw" id="pw" />
                                    </div>
                                    <div class="input-group mb-3 d-flex justify-content-between ">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id='formCheck' />
                                            <label htmlFor="formCheck"
                                                class="form-check-label text-secondary"><small>Remember
                                                    me</small></label>
                                        </div>
                                        <a href="#" class='forgotpw'>
                                            <small>Forgot Password ?</small>
                                        </a>

                                    </div>
                                    <button class="btn btn-primary btn-lg w-75 my-3" type="submit" name="login">Login</button>

                                </form>
                                <div class="text-content">
                                    <small>
                                        Don't have account ? <a href="SignUp.jsp" class='forgotpw'>Sign Up</a>
                                    </small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <script>
    jQuery.validator.addMethod("checkEmail", function (value, element) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }, "Please enter a valid email address.");
    
        $(document).ready(function ($) {

            
            

            $('#login').validate({
                rules: {

                    email: {
                        required: true,
                        email: true,
                        checkEmail: true
                    },
                    pw: {
                        required: true,
                        minlength: 6
                    }
                },
                messages: {

                    email: {
                        required: 'Please enter your email.',
                        email: 'Please enter a valid email address.'

                    },
                    pw: {
                        required: 'Please enter password',
                        minlength: 'password should be morethan 5',
                    }

                },
                
            });
        });
    </script>
    <%@include file="Footer.jsp"%>
</body>
</html>
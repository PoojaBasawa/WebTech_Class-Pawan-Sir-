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

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>


    <!--
        /jquery validation
    -->
    
    <!-- Css styling  -->
    <style type="text/css">
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
			    height: 430px;
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
			    /* display: flex;
			justify-content: center;
			align-items: center; */
			    width: 100%;
			    height: 100%;
			    margin: auto 0;
			    padding: auto 0;
			    border: none;
			    border-radius: 30px;
			    overflow: hidden;
			   /* height: 550px;*/
			    padding: 20px;
			    margin:0  50px;
			
			}
			
			.container-group {
			    display: flex;
			    justify-content: center;
			    align-items: center;
			    min-height: 100vh;
			
			}
			
			.forgotpw {
			    text-decoration: none;
			}
			
			.eye {
			    position: absolute;
			    top: 50%;
			    right: 0;
			    transform: translate(-50%, -50%);
			    z-index: 100;
			    font-size: 20px;
			    border: none;
			    background-color: transparent;
			}
			
			/* .content {
			     height: 400px;	
			}*/
			
			.error {
			    color: red;
			}
			#msg{
				color:red;
				text-align:center;
				width:100%;
				font-weight: bold;
				font-size: 25px;
				padding: 5px;
				margin-top:10px;
			}
			

    </style>
    
    <script>
    jQuery.validator.addMethod("checkEmail", function (value, element) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }, "Please enter a valid email address.");
        $(document).ready(function ($) {

            

            $('#sign-up').validate({
                rules: {
                    name: {
                        required: true
                    },
                    phone: {
                        required: true,
                        minlength: 10,
                        maxlength: 10

                    },
                    email: {
                        required: true,
                        email: true,
                        checkEmail: true
                    },
                    pw: {
                        required: true,
                        minlength: 6
                    },
                    cp: {
                        required: true,
                        minlength: 6,
                        equalTo: "#pw"
                    }
                },
                messages: {
                    name: {
                        required: 'Please enter your name.'
                    },
                    phone: {
                        required: 'Please enter your Phone number.',
                        minlength: 'number is lessthan 10',
                        maxlength: 'number is morethan 10'

                    },
                    email: {
                        required: 'Please enter your email.',
                        email: 'Please enter a valid email address.'

                    },
                    pw: {
                        required: 'Please enter password',
                        minlength: 'password should be morethan 5',
                    },
                    cp: {
                        required: 'Please re-enter password',
                        equalto: 'password not matching !!'
                    }

                }
            });
        });
    </script>
    <title>Sign Up</title>
</head>
<body>
	<div class="header-file"><%@include file="Header.jsp"%></div>
   <div class="container-group">
        <div class="container">
            <div class="wrapper shadow">
            <% if (request.getAttribute("status") != null) {%>
 			<div id="msg" > <%= request.getAttribute("status")%></div>
 			<%}%>
                <div class="row w-100  g-0 mt-5">
                    <div class="col-lg-6 d-none d-lg-block position-relative ">
                        <div class='bg-holder'></div>
                    </div>
                    <div class="col-lg-6 content py-2">
                        <div
                            class="row text-center d-flex align-items-center justify-content-center h-75 g-0 px-1 px-sm-0 ">
                            <div class="col-sm-6 col-lg-7 col-xl-6">
                                <div class="text-center mb-2">
                                    <h1 class='fw-bold text-dark '>Sign Up</h1>
                                    <p class="text-secondary">Please register to get our service</p>
                                </div>
                                <div class="position-relative">
                                    <hr class="text-secondary my-2 " />
                                    <div class="devider-content-center fw-bolder"></div>
                                </div>
                                <form action="register" method="post" id="sign-up">
                                    <div class="input-group mb-2">
                                        <span class="input-group-text">
                                            <i class='bx bx-user'></i>
                                        </span>
                                        <input type="text" class="form-control form-control w-75"
                                            placeholder="Enter your Name" name="name" id="name" />
                                    </div>
                                    <div class="input-group mb-2">
                                        <span class="input-group-text">
                                            <i class='bx bx-phone'></i>
                                        </span>
                                        <input type="number" class="form-control form-control w-75"
                                            placeholder="Enter contact number" name="phone" id="phone" />
                                    </div>
                                    <div class="input-group mb-2 ">
                                        <span class="input-group-text">
                                            <i class='bx bx-envelope'></i>
                                        </span>
                                        <input type="text" class="form-control form-control w-75"
                                            placeholder="Enter Email" name="email" id="email" />
                                    </div>

                                    <div class="input-group mb-2">
                                        <span class="input-group-text">
                                            <i class='bx bx-lock-alt'></i>
                                        </span>
                                        <input type="password" class="form-control form-control position-relative "
                                            id="pw" placeholder="Enter password" name="pw" />

                                    </div>
                                    <div class="input-group mb-2">
                                        <span class="input-group-text">
                                            <i class='bx bx-lock-alt'></i>
                                        </span>
                                        <input type="password" class="form-control form-control position-relative "
                                            id="cp" placeholder="Confirm password" name="cp" id="cp" />

                                    </div>


                                    <button class="btn btn-primary w-100 my-3" name="register">Sign Up</button>

                                </form>
                                <div class="text-content">
                                    <small>
                                        Already registered ? <a href="Login.jsp" class='forgotpw'>Login</a>
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
    
    <%@include file="Footer.jsp"%>
</body>
</html>
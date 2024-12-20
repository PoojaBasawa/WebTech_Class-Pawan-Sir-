<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Event management by | PK</title>
    <link rel="stylesheet" href="home-style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!--BoxIcons-->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <!-- font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <!-- Bootstrap -->


</head>
<body>

<%@include file="Header.jsp" %>
	<header class="position-relative header">

       <!--   Nav bar     -->
         <!-- <div class="container nav-wrapper top-0 right-0 z-1">

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a href="#" class="navbar-brand h1 align-top h1 fw-bold text-white text-uppercase">PK</a>
                    <ul class="navbar-nav navigation">
                        <div class="navigation d-flex ">
                            <li class="nav-item">
                                <a href="#" class="nav-link p  text-uppercase header-btn ">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about-us" class="nav-link  p  text-uppercase header-btn  ">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="#event-list" class="nav-link  p  text-uppercase header-btn ">Event</a>
                            </li>
                            <li class="nav-item">
                                <a href="#suggestion" class="nav-link  p  text-uppercase header-btn ">Contact-Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link  p  text-uppercase header-btn ">Login</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>

        </div> -->

        <!--   Nav bar     --> 


        <!-- Hero section -->
        <div id="hero-carousel" class="carousel slide position-relative">



            <div class="carousel-indicators">
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="slide 1"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1"
                    aria-label="slide 2"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2"
                    aria-label="slide 3"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3"
                    aria-label="slide 4"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="4"
                    aria-label="slide 5"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="5"
                    aria-label="slide 6"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="6"
                    aria-label="slide 7"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="7"
                    aria-label="slide 8"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active  c-item">
                    <img src="imgs/hero-carousel/wed-ban.png" class="d-block w-100 c-img" alt="slide 1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="hero-txt">Wedding</h5>
                        <p>Ensure seamless coordination for your special day with personalized touches.</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="imgs/hero-carousel/party-ban 1.jpg" class="d-block w-100 c-img" alt="slide 2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="hero-txt">Party</h5>
                        <p>From themed decorations to entertainment, create unforgettable celebrations effortlessly.</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="imgs/hero-carousel/rec-ban-4.png" class="d-block w-100 c-img" alt="slide 3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="hero-txt">Reception</h5>
                        <p>Craft elegant receptions with attention to detail and impeccable execution.</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="imgs/hero-carousel/birth-ban 1.jpg" class="d-block w-100 c-img" alt="slide 4">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="hero-txt">Birthday</h5>
                        <p>Tailored celebrations to make birthdays memorable for all ages.</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="imgs/hero-carousel/corp-ban-1.jpg" class="d-block w-100 c-img" alt="slide 5">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="hero-txt">Corporate Event</h5>
                        <p>Professional management for conferences, seminars, and corporate gatherings.</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="imgs/hero-carousel/fam-ban 1.jfif" class="d-block w-100 c-img" alt="slide 6">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="hero-txt">Family reunion</h5>
                        <p>Bring families together with fun-filled reunions, fostering cherished memories.</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="imgs/hero-carousel/meh 1.jpg" class="d-block w-100 c-img" alt="slide 7">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="hero-txt">Mehndi</h5>
                        <p>Enhance traditional ceremonies with artistic henna designs and cultural flair.</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="imgs/hero-carousel/des-ban 1.jpg" class="d-block w-100 c-img" alt="slide 8">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="hero-txt">Decorate</h5>
                        <p>Transform venues with exquisite designs, creating stunning atmospheres for events.</p>
                    </div>
                </div>
            </div>
            <div class="container px-5">
                <button class="carousel-control-prev mt-5" type="button" data-bs-target="#hero-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next mt-5" type="button" data-bs-target="#hero-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- Hero section -->
    </header>

    <!-- About Us  -->
    <section id="about-us">
        <div class="about-us-wrapper">

            <div class="container py-5 w-100 h-100">
                <div class="row  py-5  d-flex flex-row">
                    <div class="col-4  about-sec1 ">
                        <div class="container p-5">
                            <p class="text-uppercase   about-p ">we are the</p>
                            <div class="about-text mt-3 ">
                                <span class="h2 fw-bolder">No.1</span>
                                <span class="fs-2 ms-3">Event Management</span>
                                <p class="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
                                    voluptate veniam odio illo quas ea ratione quidem non minima a.</p>
                                <div class="about-bttn ">
                                    <button class=" about-btn text-center text-uppercase  w-100 ">Services</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-8  about-sec2 d-flex flex-column">
                        <div class="row no-gutters h-50">
                            <div class="col about-div p-4 d-flex justify-content-center align-item-center flex-column">
                                <div class="cust-div">
                                    <div class="about-sec2-icon-wrapper text-center ">
                                        <i class='bx bx-happy-alt'></i>
                                    </div>
                                    <p class="my-2 fw-bold fs-5 text-dark text-center">Friendly Team</p>
                                    <p class="text-center text-secondary about-sec2-p">more than 200 teams</p>
                                </div>
                            </div>
                            <div class="col about-div p-4 d-flex justify-content-center align-item-center flex-column">
                                <div class="about-sec2-icon-wrapper text-center ">
                                    <i class='bx bxs-plane-alt'></i>
                                </div>
                                <p class="my-2 fw-bold fs-5 text-dark text-center">Perfect Venues</p>
                                <p class="text-center text-secondary about-sec2-p">beautiful venues</p>
                            </div>
                            <div class="col about-div p-4 d-flex justify-content-center align-item-center flex-column">
                                <div class="about-sec2-icon-wrapper text-center ">
                                    <i class='bx bxs-drink'></i>
                                </div>
                                <p class="my-2 fw-bold fs-5 text-dark text-center">Uniqu e Scenario</p>
                                <p class="text-center text-secondary about-sec2-p">wethink out of the box</p>
                            </div>

                        </div>
                        <div class="row no-gutters h-50">
                            <div class="col about-div p-4 d-flex justify-content-center align-item-center flex-column">
                                <div class="about-sec2-icon-wrapper text-center ">
                                    <i class='bx bx-party'></i>
                                </div>
                                <p class="my-2 fw-bold fs-5 text-dark text-center">Unforgettable Time</p>
                                <p class="text-center text-secondary about-sec2-p">we make you perfect event</p>
                            </div>
                            <div class="col about-div p-4 d-flex justify-content-center align-item-center flex-column">
                                <div class="about-sec2-icon-wrapper text-center ">
                                    <i class='bx bx-support'></i>
                                </div>
                                <p class="my-2 fw-bold fs-5 text-dark text-center">24/7 Support</p>
                                <p class="text-center text-secondary about-sec2-p">anywhere anytime</p>
                            </div>
                            <div class="col about-div p-4 d-flex justify-content-center align-item-center flex-column">
                                <div class="about-sec2-icon-wrapper text-center ">
                                    <i class='bx bx-bulb'></i>
                                </div>
                                <p class="my-2 fw-bold fs-5 text-dark text-center">Brillient idea</p>
                                <p class="text-center text-secondary about-sec2-p">we have million ideas </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </section>
    <!-- About Us  -->


         

    <!-- Banner 2 -->
    <section class="banner2">
        <div class="container py-3 ">
            <div class="row ">
                <div class="col text-white fs-2 me-5 py-3 flex">
                    Creating unforgettable moments, one event at a time.
                </div>
                <div class="col ">
                    <div class="row text-white py-3">
                        At PK, we believe in crafting moments that last a lifetime. From intimate gatherings to grand
                        celebrations, we're here
                        to make every event unforgettable.
                    </div>
                    <div class="row text-white py-3">
                        <div class="col text-light"><span class="fw-bold text-white fs-4">100+ </span>Events</div>
                        <div class="col text-light"><span class="fw-bold text-white fs-4">10+ </span>Services</div>
                        <div class="col text-light"><span class="fw-bold text-white fs-4">4 </span>Stars</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Banner 2 -->

    <!-- why choose PK -->
    <section class="sec-why-choose-pk  py-5">
        <div class="container">
            <div class="text-wrapper">
                <h2 class="mb-4 text-center">Why choose PK ?</h2>
                <p class="p mb-5 text-center">PK offers unmatched services in event management, turning every occasion
                    into a
                    memorable
                    experience.</p>
            </div>
            <div class="card-wrapper">
                <div class="row mb-3">
                    <div class="col card me-3">
                        <i class='bx bxs-sun text-success fs-3 mb-3'></i>
                        <p class="fw-bold fs-5 mb-3">Wedding Expertise</p>
                        <p class="p">Specializing in weddings, PK guarantees a romantic and flawless ceremony.</p>
                    </div>
                    <div class="col card me-3 bg-success">
                        <i class='bx bxs-heart text-white fs-3 mb-3'></i>
                        <p class="fw-bold fs-5 mb-3 text-white">Diverse Events</p>
                        <p class="p text-white">PK expertly handles events of all types, ensuring a unique experience.
                        </p>
                    </div>
                    <div class="col card me-3">
                        <i class='bx bxs-like text-success fs-3 mb-3'></i>
                        <p class="fw-bold fs-5 mb-3">Design Mastery</p>
                        <p class="p">From decorations to themes, PK masters the art of event aesthetics.</p>
                    </div>
                </div>
                <!--Row 2-->
                <div class="row">
                    <div class="col card me-3">
                        <i class='bx bx-award text-success fs-3 mb-3'></i>
                        <p class="fw-bold fs-5 mb-3">Full Coverage</p>
                        <p class="p">With PK, every aspect of your event is meticulously planned and executed.</p>
                    </div>
                    <div class="col card me-3 ">
                        <i class='bx bxs-bolt text-success fs-3 mb-3 fw-bolder'></i>
                        <p class="fw-bold fs-5 mb-3 ">Creative Solutions </p>
                        <p class="p ">PK provides innovative and personalized event solutions, making your
                            dreams come true.
                        </p>
                    </div>
                    <div class="col card me-3">
                        <i class='bx bx-check text-success fs-3 mb-3'></i>
                        <p class="fw-bold fs-5 mb-3">Outstanding Service</p>
                        <p class="p">Entrust your special occasions to PK's dedicated team for an extraordinary
                            experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- why choose PK -->

    <!-- Banner 1 -->
    <section class="banner mb-5">
        <div class="container">
            <div class="row no-gutters banner-row">
                <div class="col-8 ">
                    <span class="h1 fw-bolder d-block text-white">Book Now</span>
                    <p class="text-light">Contact us now and we will make your event unique & unforgettable </p>
                </div>
                <div class="col-4">
                    <button class="custom-btn"><a href="Event-category.jsp">make an event now</a></button>
                </div>
            </div>
        </div>
    </section>
    <!-- Banner 1 -->


    <!-- Gallery -->

    <section class="gallery my-5">
        <div class="gallery-text-container my-5 text-center">
            <p class="text-center text-secondary g-text">PK Gallery</p>
            <span class="fs-3 text-capitalise ">Beautiful & <span class="fw-bolder fs-3">Unforgettable
                    Times</span></span>
        </div>

        <div class="gal-con">
            <div class="box box-up" id="box-1" style="background-image: url(imgs/gallery/wedding.jpg);"></div>
            <div class="box box-up" id="box-2" style="background-image: url(imgs/gallery/birthday.jpg);"></div>
            <div class="box box-up" id="box-3" style="background-image: url(imgs/gallery/party.jpg);"></div>
            <div class="box box-up" id="box-4" style="background-image: url(imgs/gallery/reception.jpg);"></div>
            <div class="box box-up" id="box-5" style="background-image: url(imgs/gallery/mehndi.jpg);"></div>
            <div class="box box-up" id="box-6" style="background-image: url(imgs/gallery/decorate.jpg);"></div>
            <div class="box box-up" id="box-7" style="background-image: url(imgs/gallery/family.jpg);"></div>

        </div>

    </section>

    <!-- Gallery -->


    <!-- suggestion and faq -->

    <section class="container mt-5 suggestion-faq-container my-5 " id="suggestion">
        <div class="text-center mb-4">
        	<h2 class="text-center mb-4 bg-danger text-white px-4 py-2 d-inline-block rounded shadow ">Suggestions and FAQ</h2>
        </div>

        <div class="row">
            <!-- Suggestion Form -->
            <div class="col-md-6 suggestion-section " id="suggestion-section">
                <div class="p-4 border rounded h-100">
                    <h5 class="mb-3">Submit Your Suggestion</h5>
                    <form>
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="nameInput" placeholder="Enter your name">
                        </div>
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Your Email</label>
                            <input type="email" class="form-control" id="emailInput" placeholder="Enter your email">
                        </div>
                        <div class="mb-3">
                            <label for="suggestionInput" class="form-label">Your Suggestion</label>
                            <textarea class="form-control" id="suggestionInput" rows="5"
                                placeholder="Enter your suggestion"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="col-md-6 faq-section " id="faq-section">
                <div class="p-4 border rounded h-100">
                    <h5 class="mb-3">FAQ - Event Management Website</h5>
                    <ul>
                        <li><strong>Q:</strong> How do I create an event?<br>
                            <strong>A:</strong> Navigate to the "Create Event" section and follow the instructions to
                            add event details, set ticket prices, and customize your event page.
                        </li>
                        <li><strong>Q:</strong> Can I sell tickets through the website?<br>
                            <strong>A:</strong> Yes, our platform supports secure ticket sales with various payment
                            options for both organizers and attendees.
                        </li>
                        <li><strong>Q:</strong> Is there a way to track attendees?<br>
                            <strong>A:</strong> Absolutely! You can easily track attendees, manage ticket sales, and
                            send event updates using our attendee management tools.
                        </li>
                        <li><strong>Q:</strong> What payment methods are supported?<br>
                            <strong>A:</strong> We support popular payment methods such as credit/debit cards and
                            PayPal to ensure the payment from our clients.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- suggestion and faq -->
    
    <!-- Google Map Integration  -->
    
    <section class="map-area shadow">
    	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15551.716958524681!2d77.55046664999998!3d12.976377600000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710953371685!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    
    <!-- Google Map Integration  -->
	
	
    <%@include file="Footer.jsp" %>
</body>
</html>
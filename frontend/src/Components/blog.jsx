import React from 'react'

function Blog() {
  return (
    <div>
        <header id="header">

        <div class="header-top">
            <div class="container">
                <div class="row d-flex flex-center">
                    <div class="col-sm-8">
                        <div class="ht-address">
                            <ul>
                                <li><i class="fa fa-phone"></i>+ 88 01916 444137</li>
                                <li><i class="fa fa-envelope"></i>info@example.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="ht-social">
                            <ul>
                            <li><a href="https://youtu.be/z4tOlwuHEZI"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://youtu.be/kXhBKjDKF84"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://youtu.be/BG9HSntowA8"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="https://youtu.be/aiRY36TPVo8"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom">
            <div class="container">
                <div class="header-bottom-inner">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-9">
                            <div class="logo">
                                <a href="index.html"><img src="assets2/images/icon/logo.png" alt="logo"/></a>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                            <div class="main-menu">
                                <nav>
                                    <ul id="m_menu_active">
                                    <li><a href="homepage2">Home</a></li>
                                    <li><a href="about">About</a></li>
                                    <li><a href="newcourses">Courses</a></li>
                                    <li><a href="teachers">Teachers</a></li>
                                    <li class="active"><a href="blog">Blogs</a></li>
                                    <li ><a href="contact">Contact</a></li>
                                    <li><a href='trainersidebar' class="avatar1"><img id='sidebar' src="r9.jpg" /></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-1 col-lg-2 col-sm-3">
                            <div class="hb-right">
                                <ul> 
                                    <li class="search_btn"><i class="fa fa-search"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 d-block d-lg-none">
                            <div id="mobile_menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>

    <div class="offset-search">
        <form action="#">
            <input type="text" name="search" placeholder="Search here..."/>
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>

    <div class="body_overlay"></div>

    <div class="crumbs-area">
        <div class="container">
            <div class="crumb-content">
                <h4 class="crumb-title"><span>Blog</span> & News</h4>
            </div>
        </div>
    </div>

    <div class="blog-area  pt--120 pb--70">
        <div class="container">
            <div class="row"> 

                <div class="col-lg-4 col-md-6">
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail1.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline blog-meta mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div> 
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail2.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline blog-meta mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail3.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline blog-meta mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div>     
                </div>

                <div class="col-lg-4 col-md-6">       
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail4.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline blog-meta mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">Aenean id ullamcorper</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6"> 
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail5.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline blog-meta mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div>    
                </div>
                
                <div class="col-lg-4 col-md-6"> 
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail6.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline blog-meta mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div>    
                </div>
            </div>
        </div>
    </div>

    <div class="cta-area primary-bg has-color ptb--50"> 
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9">
                    <div class="cta-content">
                        <p class="mb-2">Click to Join the Advance Workshop</p>
                        <h2>Training in advance networking</h2>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="cta-btn">
                        <a class="btn btn-light btn-round" href="#">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="footer-top has-color pt--120 pb--30">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="widget widget-company">
                            <img src="assets2/images/icon/logo.png" alt="image"/>
                            <div class="address">
                                <h6>OFFICE ADDRESS</h6>
                                <p>London Oxford Street, 012 United Kingdom.</p>
                            </div>
                            <div class="address">
                                <h6>BUSINESS PHONE</h6>
                                <p>+012 3456 7890</p>
                            </div>
                            <div class="address">
                                <h6>BUSINESS EMAIL</h6>
                                <p>Business@themerocket.net</p>
                            </div>
                            <ul class="social">
                                <li><a href="https://youtu.be/z4tOlwuHEZI"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://youtu.be/kXhBKjDKF84"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://youtu.be/BG9HSntowA8"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="https://youtu.be/aiRY36TPVo8"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="widget footer-link">
                            <h4 class="fwidget-title mb-5 pb-3 primary-color2">Footer Menu</h4> 
                            <ul>
                                <li><a href="whycc"><i class="fa fa-arrow-right"></i>Why Canadian Company</a></li>
                                <li><a href="about"><i class="fa fa-arrow-right"></i>About Us</a></li>
                                <li><a href="workwithus"><i class="fa fa-arrow-right"></i>Work with Us</a></li>
                                <li><a href="careers"><i class="fa fa-arrow-right"></i>Careers</a></li>
                                <li><a href="contact"><i class="fa fa-arrow-right"></i>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="widget widget-opening">
                            <h4 class="fwidget-title mb-5 pb-3 primary-color2">Working Day & time</h4>
                            <p>Architecto beatae vitae dicta sunt ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                           <ul>
                                <li><span>Mon - Tus :</span>6.00 am - 10.00 pm</li>
                                <li><span>Wed - Tur :</span>8.00 am - 6.00 pm</li>
                                <li><span>Friday :</span>3.00 pm - 8.00 pm</li>
                                <li><span>Sunday :</span>Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Copyright © 2022 <span><a class="primary-color2" href="https://youtu.be/r6zIGXun57U" target="_blank">Edification</a> </span> - All Rights Reserved. Made by <span><a class="primary-color2" href="https://youtu.be/r6zIGXun57U" target="_blank">GoalDiggers</a></span></p>
                </div>
            </div>
        </div>
    </footer>

    <script src="assets2/js/vendor/jquery-2.2.4.min.js"></script>

    <script src="assets2/js/bootstrap.min.js"></script>

    <script src="assets2/js/owl.carousel.min.js"></script>
    <script src="assets2/js/jquery.magnific-popup.min.js"></script>
    <script src="assets2/js/jquery.slicknav.min.js"></script>
    <script src="assets2/js/plugins.js"></script>
    <script src="assets2/js/scripts.js"></script>
    </div>
  )
}

export default Blog
import React from 'react'

function Blogdetails() {
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
                <h4 class="crumb-title"><span>Single</span> Blog Deatils</h4>
            </div>
        </div>
    </div>
    <div className="form-floating mb-3" />
    <div class="blog-details-area ptb--120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <div class="course-details">
                        <div class="cs-thumb mb-5">
                            <img src="assets2/images/blog/blog-details.jpg" alt="image"/>
                        </div>
                        <div class="cs-content">
                            <h3 class="mb-4">Excepteur sint occaecat cupidatat non proident</h3>                
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore voluptatem.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </div>

                    <div class="comment-area">
                        <h4 class="comment-title">Comments <span>(03)</span></h4>
                        <ul class="comment-list">
                            <li class="comment-info-inner">
                                <article>
                                    <div class="comment-thumb">
                                        <img src="assets2/images/author/cs-comment-auth1.jpg" alt="image"/>
                                    </div>
                                    <div class="comment-content">
                                        <h4>Tomas</h4>
                                        <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        <div class="cs-cmnt-meta">
                                            <ul>
                                                <li>AUGUST 6, 2018</li>
                                                <li><span>BY</span> Alebert dos</li>
                                            </ul>
                                            <a href="#">REPLY <i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li class="comment-info-inner">
                                <article>
                                    <div class="comment-thumb">
                                        <img src="assets2/images/author/cs-comment-auth3.jpg" alt="image"/>
                                    </div>
                                    <div class="comment-content">
                                        <h4>Bagun khan</h4>
                                        <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        <div class="cs-cmnt-meta">
                                            <ul>
                                                <li>AUGUST 6, 2018</li>
                                                <li><span>BY</span> Alebert dos</li>
                                            </ul>
                                            <a href="#">REPLY <i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li class="comment-info-inner">
                                <article>
                                    <div class="comment-thumb">
                                        <img src="assets2/images/author/cs-comment-auth1.jpg" alt="image"/>
                                    </div>
                                    <div class="comment-content">
                                        <h4>Tomas</h4>
                                        <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        <div class="cs-cmnt-meta">
                                            <ul>
                                                <li>AUGUST 6, 2018</li>
                                                <li><span>BY</span> Alebert dos</li>
                                            </ul>
                                            <a href="#">REPLY <i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>

                    <div class="leave-comment-area">
                        <h4 class="comment-title">Leave Your Comment</h4>
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" name="Name" placeholder="Enter your name"/>
                                </div>
                                <div class="col-md-6">
                                    <input type="email" name="email" placeholder="Your Email"/>
                                </div>
                            </div>
                            <textarea name="msg" id="msg" placeholder="Your message here"></textarea>
                            <button  class="btn btn-primary btn-round"  type="submit">Post Comment <i class="fa fa-long-arrow-right"></i></button>
                        </form>
                    </div>
                    <div className="form-floating mb-3" />
                </div>

                <div class="col-lg-4 col-md-4">
                    <div class="sidebar">
                        <div class="widget widget-course">
                            <h4 class="widget-title">Popular Posts</h4>
                            <div class="course-list">
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb1.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">Ui / Ux Design</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb2.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">Learn Java</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb3.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">C++</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb4.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">Seo</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb5.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">Python</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                            </div>
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

export default Blogdetails
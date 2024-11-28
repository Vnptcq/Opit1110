import logo from '../assets/images/all-img/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (<>
        <div id="navigation" className="fixed-top navbar-light bg-faded site-navigation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="site-logo">
                            <link to="index.html"><img src={logo} alt="logo" /></link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-9 col-sm-8 ">
                        <div className="header_right ">
                            <nav id="main-menu" className="ms-auto">
                                <ul>
                                    <li><link className="nav-link" to="index.html">Home</link>
                                    </li>
                                    <li><link className="nav-link" to="#">Pages <span className="ti-angle-down"></span></link>
                                        <ul>
                                            <li><link className="nav-link" to="about.html">About Us</link></li>
                                            <li><link className="nav-link" to="team.html">Instructor</link></li>
                                            <li><link className="nav-link" to="team-details.html">Instructor Details</link></li>
                                        </ul>
                                    </li>

                                    <li><link className="nav-link" to="allcourse.html">Courses <span
                                        className="ti-angle-down"></span></link>
                                        <ul>
                                            <li><link className="nav-link" to="allcourse.html">All Courses</link></li>
                                            <li><link className="nav-link" to="course3.html">Favorite Course</link></li>

                                        </ul>
                                    </li>
                                    <li><link className="nav-link" to="blog.html">Blog <span className="ti-angle-down"></span></link>
                                        <ul>
                                            <li><link className="nav-link" to="blog.html">Blog List</link></li>
                                            <li><link className="nav-link" to="blog_single.html">Single Blog</link></li>
                                        </ul>
                                    </li>
                                    <li><link className="nav-link" to="event.html">Event</link></li>
                                    <li><link className="nav-link" to="faq.html">FAQ's</link></li>
                                    <li><link className="nav-link" to="about.html">About Us</link></li>
                                    <li><link className="nav-link" to="contact.html">Contact</link></li>
                                </ul>
                            </nav>
                            <div id="mobile_menu"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-8">
                        <div className="home_lc">
                            <link to="#" className="hlc">
                                <i className="ti-heart"></i>
                                <span className="gactive">0</span>
                            </link>
                            <link to="cart.html" className="hlc">
                                <i className="ti-shopping-cart-full"></i>
                                <span className="gactive">2</span>
                            </link>
                        </div>
                        <div className="call_to_action">
                            <link className="btn_one" to="login.html">Login</link>
                            <link className="btn_two" to="register.html">Sign Up</link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Header
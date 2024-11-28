import logo from '../assets/images/all-img/logo.png'
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div id="navigation" className="fixed-top navbar-light bg-faded site-navigation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="site-logo">
                            <a to="index.html"><img src={logo} alt="logo" /></a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-9 col-sm-8 ">
                        <div className="header_right ">
                            <nav id="main-menu" className="ms-auto">
                                <ul>
                                    <li><a className="nav-link" to="index.html">Home</a>
                                    </li>
                                    <li><a className="nav-link" to="#">Pages <span className="ti-angle-down"></span></a>
                                        <ul>
                                            <li><a className="nav-link" to="about.html">About Us</a></li>
                                            <li><a className="nav-link" to="team.html">Instructor</a></li>
                                            <li><a className="nav-link" to="team-details.html">Instructor Details</a></li>
                                        </ul>
                                    </li>

                                    <li><a className="nav-link" to="allcourse.html">Courses <span
                                        className="ti-angle-down"></span></a>
                                        <ul>
                                            <li><a className="nav-link" to="allcourse.html">All Courses</a></li>
                                            <li><a className="nav-link" to="course3.html">Favorite Course</a></li>

                                        </ul>
                                    </li>
                                    <li><a className="nav-link" to="blog.html">Blog <span className="ti-angle-down"></span></a>
                                        <ul>
                                            <li><a className="nav-link" to="blog.html">Blog List</a></li>
                                            <li><a className="nav-link" to="blog_single.html">Single Blog</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="nav-link" to="event.html">Event</a></li>
                                    <li><a className="nav-link" to="faq.html">FAQ's</a></li>
                                    <li><a className="nav-link" to="about.html">About Us</a></li>
                                    <li><a className="nav-link" to="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                            <div id="mobile_menu"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-8">
                        <div className="home_lc">
                            <a to="#" className="hlc">
                                <i className="ti-heart"></i>
                                <span className="gactive">0</span>
                            </a>
                            <a to="cart.html" className="hlc">
                                <i className="ti-shopping-cart-full"></i>
                                <span className="gactive">2</span>
                            </a>
                        </div>
                        <div className="call_to_action">
                            <a className="btn_one" to="login.html">Login</a>
                            <a className="btn_two" to="register.html">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Navigation ;
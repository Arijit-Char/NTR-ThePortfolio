import React from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

const Header = ({ logo }) => {
    const scrollTo = (target) => {
        scroller.scrollTo(target, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div className="dizme_tm_header">
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        <Link
                            to="home"
                            onClick={() => {
                                scroll.scrollToTop();
                            }}
                        >
                            {logo && <img src={logo} alt="image" />}
                        </Link>
                    </div>
                    <div className="menu">
                        <ul className="anchor_nav">
                            <li>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    activeClass="active"
                                    onClick={() => scrollTo('home')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    activeClass="active"
                                    onClick={() => scrollTo('about')}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    activeClass="active"
                                    onClick={() => scrollTo('portfolio')}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="service"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    activeClass="active"
                                    onClick={() => scrollTo('service')}
                                >
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="blog"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    activeClass="active"
                                    onClick={() => scrollTo('blog')}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    activeClass="active"
                                    onClick={() => scrollTo('contact')}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="download_cv">
                                <Link
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    activeClass="active"
                                    onClick={() => scrollTo('portfolio')}
                                >
                                    <span>Download CV</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .anchor_nav .active {
                    color: #f75023 !important;
                }
            `}</style>
        </div>
    );
};

export default Header;

import { Link } from 'react-scroll';

const Header = ({ logo }) => {
    return (
        <div className="dizme_tm_header">
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        <a href="/">{<img src={logo} alt="image" />}</a>
                    </div>
                    <div className="menu">
                        <ul className="anchor_nav">
                            <li className="current">
                                <Link to="home" spy={true} smooth={true} hashSpy={true} offset={30} duration={300} delay={300}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} hashSpy={true} offset={30} duration={300} delay={300}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="portfolio" spy={true} smooth={true} hashSpy={true} offset={30} duration={300} delay={300}>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="service" spy={true} smooth={true} hashSpy={true} offset={30} duration={300} delay={300}>
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link to="blog" spy={true} smooth={true} hashSpy={true} offset={30} duration={300} delay={300}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="contact" spy={true} smooth={true} hashSpy={true} offset={30} duration={300} delay={300}>
                                    Contact
                                </Link>
                            </li>
                            <li className="download_cv">
                                <Link to="portfolio">
                                    <span>Download CV</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;

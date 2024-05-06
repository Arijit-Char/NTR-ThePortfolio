import { Link } from 'react-scroll';
import Counter from './Counter.jsx';

import { useState, useEffect } from 'react';
const About = ({ dark, about }) => {
    return (
        <div className="dizme_tm_section" id="about">
            <div className="dizme_tm_about">
                <div className="container">
                    <div className="wrapper">
                        <div className="left">
                            <div className="image">
                                <img className="rounded" src={about.avatar.url} alt="image" />
                                <div className="numbers year">
                                    <div className="wrapper">
                                        <h3>
                                            <Counter end={about?.exp_year} />
                                        </h3>
                                        <span className="name">
                                            Years of
                                            <br />
                                            Success
                                        </span>
                                    </div>
                                </div>
                                <div className="numbers project">
                                    <div className="wrapper">
                                        <h3>
                                            <Counter end={about?.some_total} />
                                        </h3>
                                        <span className="name">
                                            Total
                                            <br />
                                            Projects
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title wow fadeInUp" data-wow-duration="1s">
                                <span>{`I'm a ${about?.title}`}</span>
                                <h3>{about.subTitle}</h3>
                            </div>
                            <div className="text wow fadeInUp" data-wow-duration="1s">
                                <p>{about?.description}</p>
                            </div>
                            <div className="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
                                <Link className="anchor" to="contact">
                                    <span>Hire Me</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};
export default About;

import { useEffect, useState, useContext } from 'react';
import Preloader from './preloader';
const Contact = ({ about }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [about]);

    if (loading) {
        return <Preloader />;
    }
    console.log(about);

    return (
        <div className="dizme_tm_section" id="contact">
            <div className="dizme_tm_contact">
                <div className="container">
                    <div className="dizme_tm_main_title" data-align="center">
                        <span>Contact Me</span>
                        <h3>I Want To Hear From You</h3>
                        <p>Please fill out the form on this section to contact with me.</p>
                    </div>
                    <div className="contact_inner">
                        <div className="left wow fadeInLeft" data-wow-duration="1s">
                            {about && (
                                <ul>
                                    <li>
                                        <div className="list_inner">
                                            <div className="icon orangeBackground">
                                                <i className="icon-location orangeText" />
                                            </div>
                                            <div className="short">
                                                <h3>Address</h3>
                                                <span>{about?.address}</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list_inner">
                                            <div className="icon greenBackground">
                                                <i className="icon-mail-1 greenText" />
                                            </div>
                                            <div className="short">
                                                <h3>Email</h3>
                                                <span>
                                                    <a href="#">{about?.contactEmail}</a>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list_inner">
                                            <div className="icon purpleBackground">
                                                <i className="icon-phone purpleText" />
                                            </div>
                                            <div className="short">
                                                <h3>Phone</h3>
                                                <span>{about?.phoneNumber}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="right wow fadeInRight" data-wow-duration="1s">
                            <div className="fields">
                                <form action="/" method="post" className="contact_form" id="contact_form" autoComplete="off">
                                    <div className="returnmessage" data-success="Your message has been received, We will contact you soon." />
                                    <div className="empty_notice">
                                        <span>Please Fill Required Fields</span>
                                    </div>
                                    <div className="input_list">
                                        <ul>
                                            <li>
                                                <input id="name" type="text" placeholder="Your Name" />
                                            </li>
                                            <li>
                                                <input id="email" type="text" placeholder="Your Email" />
                                            </li>
                                            <li>
                                                <input id="phone" type="number" placeholder="Your Phone" />
                                            </li>
                                            <li>
                                                <input id="subject" type="text" placeholder="Subject" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="message_area">
                                        <textarea id="message" placeholder="Write your message here" defaultValue={''} />
                                    </div>
                                    <div className="dizme_tm_button">
                                        <a id="send_message" href="#">
                                            <span>Submit Now</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;

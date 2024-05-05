import parse from 'html-react-parser';
import { useEffect, useState, useContext } from 'react';
import ServicePopup from './popup/ServicePopup';
import VanillaTilt from 'vanilla-tilt';
const Service = ({ dark, services }) => {
    const [data, setData] = useState([]);
    const [popupdata, setPopupdata] = useState({});
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        setData(services.filter((item) => item.enabled));
        setTimeout(() => {
            // let VanillaTilt = require('vanilla-tilt');
            VanillaTilt.init(document.querySelectorAll('.tilt-effect'), {
                maxTilt: 6,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                speed: 500,
                transition: true,
            });
        }, 1000);
    }, [services]);

    const onClick = (index) => {
        setPopup(true);
        setPopupdata(data && data[index]);
    };
    return (
        <div className="dizme_tm_section" id="service">
            <ServicePopup data={popupdata} open={popup} close={() => setPopup(false)} />
            <div className="dizme_tm_services">
                <div className="container">
                    <div className="dizme_tm_main_title" data-align="center">
                        <span>Services</span>
                        <h3>What I Do for Clients</h3>
                    </div>
                    <div className="service_list">
                        <ul>
                            {data &&
                                data.map(
                                    (data, i) =>
                                        data && (
                                            <li
                                                className={`wow ${(i * 1) % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}`}
                                                data-wow-duration="1s"
                                                key={i}
                                                onClick={() => onClick(i)}
                                            >
                                                <div className="list_inner tilt-effect">
                                                    <span className="icon">
                                                        {dark ? (
                                                            <img className="back" src={data.image.url} alt="image" />
                                                        ) : (
                                                            <img className="back" src={data.image.url} alt="image" />
                                                        )}
                                                    </span>
                                                    <div className="title">
                                                        <h3>{data.name}</h3>
                                                        <span className="price">
                                                            Starts from <span>{data.charge}</span>
                                                        </span>
                                                    </div>
                                                    <div className="text">
                                                        <p>{data.desc}</p>
                                                    </div>
                                                    <a className="dizme_tm_full_link" href="#" />
                                                    <img className="popup_service_image" src={data.image.url} alt="image" />
                                                </div>
                                            </li>
                                        )
                                )}
                        </ul>
                    </div>
                </div>
                <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
                    <img src="img/brushes/service/5.png" alt="image" />
                </div>
                <div className="brush_2 wow zoomIn" data-wow-duration="1s">
                    <img src="img/brushes/service/6.png" alt="image" />
                </div>
            </div>
        </div>
    );
};
export default Service;

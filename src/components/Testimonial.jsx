import { useEffect, useState, useContext } from 'react';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonial = ({ data }) => {
    //   useEffect(() => {
    //     setData(data?.testimonials.filter(item=>item.enabled)); //filtering based on enabled property from the API.
    // }, [data1]);
    const props = {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.owl-dots',
            clickable: true,
        },
    };

    const convertToWord = (number) => {
        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        return ones[number];
    };
    return (
        <div className="dizme_tm_section">
            <div className="dizme_tm_testimonials">
                <div className="dizme_tm_main_title" data-align="center">
                    <span>Testimonials</span>
                </div>
                <div className="list_wrapper">
                    <div className="total">
                        <div className="in">
                            <Swiper {...props} className="">
                                {
                                  data
                                        .filter((item) => item.enabled)
                                        .map((data, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        version="1.1"
                                                        id="Layer_1"
                                                        x="0px"
                                                        y="0px"
                                                        width="200px"
                                                        height="200px"
                                                        viewBox="796 698 200 200"
                                                        enableBackground="new 796 698 200 200"
                                                        xmlSpace="preserve"
                                                        className="svg replaced-svg"
                                                    >
                                                        <g>
                                                            <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                                                            <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="text">
                                                    <p>{data.review}</p>
                                                </div>
                                                <div className="short">
                                                    <div className="image">
                                                        <img style={{ borderRadius: '100%' }} alt="image" src={data.image.url} />
                                                        {/* <div className="main" data-img-url={data.image.url} /> */}
                                                    </div>
                                                    <div className="detail">
                                                        <h3>{data.name}</h3>
                                                        <span>{data.position}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                            </Swiper>
                            <div className="owl-dots"></div>
                        </div>
                        <div className="left_details">
                            {data &&
                                data?.filter((item) => item.enabled)
                                    .map((data, i) => (
                                        <div
                                            key={i}
                                            className={`det_image ${convertToWord(i)} wow fadeIn`}
                                            data-wow-duration="1s"
                                            data-img-url={data?.image?.url}
                                        />
                                    ))}
                            <span className="circle green animPulse" />
                            <span className="circle yellow animPulse" />
                            <span className="circle border animPulse" />
                        </div>
                        <div className="right_details">
                            {data &&
                                data?.filter((item) => item.enabled)
                                    .map((data, i) => (
                                        <div
                                            key={i}
                                            className={`det_image ${convertToWord(i)} wow fadeIn`}
                                            data-wow-duration="1s"
                                            data-img-url={data?.image?.url}
                                        />
                                    ))}
                            <span className="circle yellow animPulse" />
                            <span className="circle purple animPulse" />
                            <span className="circle border animPulse" />
                        </div>
                    </div>
                </div>
                <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
                    <img src="img/brushes/testimonials/1.png" alt="image" />
                </div>
            </div>
        </div>
    );
};
export default Testimonial;

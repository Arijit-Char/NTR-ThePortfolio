import { useEffect, useState, useContext } from 'react';
import { aTagClick } from '../utilits';
import BlogPopUp from './popup/BlogPopUp';
import Preloader from './preloader';

const News = ({ data1 }) => {
    const [popupData, setPopupData] = useState(null);
    const [popup, setPopup] = useState(false);
    const [activeTab, setActiveTab] = useState('Work');
    const [timelineData, setTimelineData] = useState({ education: [], work: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [data1]);

    useEffect(() => {
        setTimelineData({
            education: data1?.timeline?.filter((item) => item.forEducation)?.sort((a, b) => a.sequence - b.sequence),
            work: data1?.timeline?.filter((item) => !item.forEducation)?.sort((a, b) => a.sequence - b.sequence), //filtered based on enabled and sorted based on sequence
        });
    }, [data1]);

    useEffect(() => {
        aTagClick();
    }, [timelineData.work]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    if (loading) {
        return <Preloader />;
    }

    return (
        <div className="dizme_tm_section" id="blog">
            <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
            <div className="dizme_tm_news">
                <div className="container">
                    {/*Main*/}
                    <div className="dizme_tm_main_title" data-align="center">
                        <span>My Timeline</span>
                        <h3>{activeTab === 'Work' ? 'Work Experience and Achievements' : 'Education'}</h3>
                    </div>
                    <div className=" ctr wow fadeInUp ">
                        <a onClick={() => handleTabChange('Work')} className={`btn c-pointer ${activeTab === 'Work' && 'active'}`}>
                            Work Experience
                        </a>
                        <a onClick={() => handleTabChange('Edu')} className={`btn c-pointer ${activeTab === 'Edu' && 'active'}`}>
                            Education
                        </a>
                    </div>
                    <div className="news_list">
                        <ul>
                            {activeTab === 'Work'
                                ? timelineData?.work?.map((timeline, i) => (
                                      // Render Work Timeline Items
                                      <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                                          <div className="list_inner">
                                              <div className="image">
                                                  <img
                                                      src="https://www.careeraddict.com/uploads/article/59897/career-developm-work-experience-benefits.jpg?v=12345"
                                                      alt="image"
                                                  />
                                                  <div
                                                      className="main"
                                                      data-img-url="https://www.careeraddict.com/uploads/article/59897/career-developm-work-experience-benefits.jpg?v=12345"
                                                      style={{
                                                          backgroundImage: `url("https://www.careeraddict.com/uploads/article/59897/career-developm-work-experience-benefits.jpg?v=12345")`,
                                                      }}
                                                  />
                                                  <div className="date">
                                                      <h3>{timelineData?.work && new Date(timeline.startDate).toLocaleDateString()}</h3>
                                                      <span>to {timelineData?.work && new Date(timeline.endDate).getUTCFullYear()}</span>
                                                  </div>
                                                  <a
                                                      className="dizme_tm_full_link"
                                                      href="#"
                                                      onClick={(e) => {
                                                          e.preventDefault();
                                                          setPopupData(timeline);
                                                          setPopup(true);
                                                      }}
                                                  />
                                              </div>
                                              <div className="details">
                                                  <span className="category">
                                                      <a href="#">{timeline.company_name}</a>
                                                  </span>
                                                  <h3 className="title">
                                                      <a href="#">{timeline.jobTitle}</a>
                                                  </h3>
                                              </div>
                                              <div className="news_hidden_details">
                                                  <div className="news_popup_informations">
                                                      <div className="text">
                                                          {timeline.bulletPoints.map((timeline, i) => (
                                                                  <p key={i}>{timeline.bulletPoints}</p>
                                                              ))}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                  ))
                                : timelineData?.education?.map((timeline, i) => (
                                      // Render Education Timeline Items
                                      <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                                          <div className="list_inner">
                                              <div className="image">
                                                  <img
                                                      src="https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg?v=123"
                                                      alt="image"
                                                  />
                                                  <div
                                                      className="main"
                                                      data-img-url="https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg?v=123"
                                                      style={{
                                                          backgroundImage: `url("https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg?v=123")`,
                                                      }}
                                                  />
                                                  <div className="date">
                                                      <h3>{timelineData?.education && new Date(timeline.startDate).toLocaleDateString()}</h3>
                                                      <span>to {timelineData?.education && new Date(timeline.endDate).getUTCFullYear()}</span>
                                                  </div>
                                                  <a
                                                      className="dizme_tm_full_link"
                                                      href="#"
                                                      onClick={(e) => {
                                                          e.preventDefault();
                                                          setPopupData(timeline);
                                                          setPopup(true);
                                                      }}
                                                  />
                                              </div>
                                              <div className="details">
                                                  <span className="category">
                                                      <a href="#">{timeline.company_name}</a>
                                                  </span>
                                                  <h3 className="title">
                                                      <a href="#">{timeline.jobTitle}</a>
                                                  </h3>
                                              </div>
                                              <div className="news_hidden_details">
                                                  <div className="news_popup_informations">
                                                      <div className="text">
                                                          {timeline.bulletPoints.map((timeline, i) => (
                                                                  <p key={i}>{timeline.bulletPoints}</p>
                                                              ))}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                  ))}
                        </ul>
                    </div>
                </div>
                {/* Brushes */}
                <div className="brush_1 wow zoomIn" data-wow-duration="1s">
                    <img src="img/brushes/news/1.png" alt="image" />
                </div>
                <div className="brush_2 wow zoomIn" data-wow-duration="1s">
                    <img src="img/brushes/news/2.png" alt="image" />
                </div>
            </div>
        </div>
    );
};
export default News;

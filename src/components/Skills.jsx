import { useEffect, useState, useContext } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import {animate, motion} from 'framer-motion';
import { fadeIn } from '../components/variants';
import VanillaTilt from 'vanilla-tilt';
import { Link } from "react-scroll";

const Skills = ({ dark,data,about }) => {

  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  setTimeout(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, 1000);
  


  return (
    <div className="dizme_tm_section">
        <div className="dizme_tm_skills">
          <div className="container">
            <div id="wrapperall" className="wrapper">
              <div className="left">
                <div
                  className="dizme_tm_main_title wow fadeInUp"
                  data-wow-duration="1s"
                  data-align="left"
                >
                  <span>{about.quote}</span>
                  <h2>{about.subTitle}</h2>
                  <p>
                {about.description}
                  </p>
                </div>
                <div
                  className="dodo_progress fadeInUp wow"
                  data-wow-duration="1s"
                >
                  <div className="over ">
                    {data &&
                        data?.filter(item => item.enabled).map((skill, i) => {
                          let color;
                          if (skill.percentage < 71) {
                            color = '#f7a334';
                          } else if (skill.percentage < 80) {
                            color = '#f79234';
                          } else if (skill.percentage < 90) {
                            // Interpolate the color between dark orange and light orange
                            color = "#f77834";
                          }else if (skill.percentage < 95) {
                            // Interpolate the color between dark orange and light orange
                            color = "#f75b34";
                          }else {
                            // Skill percentage is 90 or above, use light orange
                            color = '#f75023';
                          } return(
                        <div
                          className="container progress_inner skillsInner___"
                          data-value={skill.percentage}
                          data-color={color}
                          key={i}
                        >
                          <span>
                            <span className="label">{skill.name}</span>
                            <span className="number">{skill.percentage}%</span>
                          </span>
                          <div className="background">
                            <div className="bar">
                              <div className="bar_in" />
                            </div>
                          </div>
                        </div>
                      )})}
                  </div>
                </div>
              </div>
              <div
               className="right hidden1 tilt-effect">
                <div className="boxx">
                  <div className="contentt">
                    <img className="" src={about?.avatar?.url} alt="image" />  
                    <h2>{about?.name}<br></br><span>{about?.title}</span></h2>
                    <Link to="contact">Hire Me</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Skills;

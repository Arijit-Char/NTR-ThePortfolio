// Portfolio.js

import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import { dataImage, portfolioHover } from '../utilits';
import DetailsPopup from './popup/DetailsPopup';
import PreLoader from './preloader';

const Portfolio = ({ projects }) => {
    const [data, setData] = useState([]);
    const [techStack, setTechStack] = useState([]);
    const [loading, setLoading] = useState(true);
    const [techStackFilter, setTechStackFilter] = useState('*');
    const [popup, setPopup] = useState(false);
    const [popupData, setPopupData] = useState(null);
    const isotope = useRef(null);

    useEffect(() => {
        setData(projects?.filter(item => item.enabled)?.sort((a, b) => a.sequence - b.sequence));
        setLoading(false);
    }, [projects]);

    useEffect(() => {
        dataImage();
        portfolioHover();
        const allTechStacks = data.flatMap(project => project.techStack);
        const uniqueTechStacks = Array.from(new Set(allTechStacks.map(tech => tech.replace(/\s/g, ''))));
        setTechStack(uniqueTechStacks);
    }, [data]);

    useEffect(() => {
        if (isotope.current) {
            techStackFilter === '*' ? isotope.current.arrange({ filter: '*' }) : isotope.current.arrange({ filter: `.${techStackFilter}` });
        }
    }, [techStackFilter]);

    const handleTechStackFilterChange = stack => () => {
        setTechStackFilter(stack);
    };

    const activeBtn = value => (value === techStackFilter ? 'current' : '');

    const handlePopupOpen = project => {
        setPopupData(project);
        setPopup(true);
    };

    if (loading) {
        return <PreLoader />;
    }
    return (
        <div className="dizme_tm_section" id="portfolio">
            <DetailsPopup open={popup} data={popupData} close={() => setPopup(false)} />
            <div className="dizme_tm_portfolio">
                <div className="container">
                    <div className="dizme_tm_main_title" data-align="center">
                        <span>Portfolio</span>
                        <h3>My Amazing Works</h3>
                        <p>
                            {data?.quote ? data?.quote : "Most common methods for designing websites that work well on desktop is responsive and adaptive design"}
                        </p>
                    </div>
                    <div className="portfolio_filter">
                        <ul>
                            <li>
                                <a className={`c-pointer ${activeBtn("*")}`} onClick={handleTechStackFilterChange("*")}>All</a>
                            </li>
                            {data && techStack.map((stack, i) => (
                                <li key={i}>
                                    <a className={`c-pointer ${activeBtn(stack)}`} onClick={handleTechStackFilterChange(stack)}>{stack}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="dizme_tm_portfolio_titles" />
                    <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
                        <ul className="gallery_zoom grid">
                            {data && data.map((project, i) => (
                                <li key={i} className={`${project?.techStack} grid-item`} onClick={() => handlePopupOpen(project)}>
                                    <div className="inner">
                                        <div className="entry dizme_tm_portfolio_animation_wrap" data-title={project?.title} data-category={project?.techStack}>
                                            <img src={project?.image?.url} alt="Project" />
                                            <div className="main" data-img-url={project?.image?.url} />
                                        </div>
                                        <div className="mobile_title">
                                            <h3>{project?.title}</h3>
                                            <span>{project?.techStack}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="brush_1 wow zoomIn" data-wow-duration="1s">
                    <img src="img/brushes/portfolio/1.png" alt="Brush" />
                </div>
                <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
                    <img src="img/brushes/portfolio/2.png" alt="Brush" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

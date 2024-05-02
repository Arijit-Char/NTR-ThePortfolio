import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import parse from 'html-react-parser';
// import UserContext from '../userContext/userContext';
import PreLoader from '../components/preloader';

function Home({ dark }) {
    const params = useParams();
    const navigate = useNavigate();
    const userId = '65b3a22c01d900e96c4219ae'; //John doe

    const BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        document.cookie = `portfolio-name=portfolio1`;
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/get/user/${params?.user ?? userId}`);

                const userData = await response.json();

                document.title = `${userData?.user?.about?.name + ' - ' + userData?.user?.about?.title}`;
                setUser(userData?.user);
                setIsLoading(false);
                document.body.classList.remove('loaded');
            } catch (error) {
                navigate('/');
                setIsLoading(true);
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [params?.user, userId, navigate]);
    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const formData = Object.fromEntries(new FormData(e.target).entries());
        const body = {
            ...formData,
            toEmail: 'ayushbhardwaj5718@gmail.com',
            toName: user?.about?.name,
        };

        try {
            const response = await fetch(`${BASE_URL2}/temp/user-email/contact`, {
                method: 'POST',
                body: JSON.stringify(body), // You may need to adjust the serialization based on your server's expectations
                headers: {
                    'Content-Type': 'application/json', // Set the appropriate content type
                },
            });

            if (response.ok) {
                alert('Message sent successfully!');
                e.target.reset();
                // Handle success, such as showing a success message to the user
            } else {
                alert('Something went wrong!');
                console.error('Error sending message:', response.statusText);
                // Handle error, such as displaying an error message to the user
            }
        } catch (error) {
            console.error('Error sending message:', error.message);
            // Handle error, such as displaying an error message to the user
        } finally {
            setIsSending(false);
        }
    };

    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const sortedFilteredProject = user?.projects?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredServices = user?.services?.filter((item) => item.enabled);
    const filteredTestimonials = user?.testimonials?.filter((item) => item.enabled);
    const filteredSocialHandles = user?.social_handles?.filter((item) => item.enabled);
    const filteredEducation = user?.timeline?.filter((item) => item.forEducation && item.enabled);
    const filteredExperience = user?.timeline?.filter((item) => !item.forEducation && item.enabled);
    const about = user?.about;

    // if (isLoading) {
    //     return <div className="w-full h-screen bg-black flex items-center justify-center text-center">Loading..</div>;
    // }

    if (isLoading || about === undefined) {
        return <PreLoader />;
    }
    console.log(sortedFilteredSkills);
    return (
        <>
            <div className="dizme_tm_section" id="home">
                <div className="dizme_tm_hero">
                    <div className="background" data-img-url={`../../public/img/slider/${dark ? 2 : 1}.jpg`} />
                    <div className="container">
                        <div className="content">
                            <div className="details">
                                <div className="hello">
                                    <h3 className="orangeText">{`Hello, I'm`}</h3>
                                </div>
                                <div className="name">
                                    <h3>{about?.name}</h3>
                                </div>
                                <div className="job">
                                    <p>
                                        A <span className="greenText">{about?.title}</span> From <span className="purpleText">{about?.address}</span>
                                    </p>
                                </div>
                                <div className="text">
                                    <p>{about?.description}</p>
                                </div>
                                <div className="button">
                                    <div className="dizme_tm_button">
                                        <a className="anchor" href="#about">
                                            <span>About Me</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="image-container">
                                <div className="mask-image">
                                    <img className="masked-image" src={about?.avatar?.url} alt="image" />
                                    {sortedFilteredSkills.map(
                                        (skill, i) =>
                                            skill.icon && (
                                                <span key={i} className={`skills ${skill.name} anim_moveBottom`}>
                                                    {parse(skill.icon)}
                                                </span>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dizme_tm_down">
                        <a className="anchor" href="#process">
                            <svg
                                width="26px"
                                height="100%"
                                viewBox="0 0 247 390"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                style={{
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                    strokeMiterlimit: '1.5',
                                }}
                            >
                                <path
                                    id="wheel"
                                    d="M123.359,79.775l0,72.843"
                                    style={{
                                        fill: 'none',
                                        stroke: dark ? '#fff' : '#000',
                                        strokeWidth: 20,
                                    }}
                                />
                                <path
                                    id="mouse"
                                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                                    style={{
                                        fill: 'none',
                                        stroke: dark ? '#fff' : '#000',
                                        strokeWidth: 20,
                                    }}
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Timeline />
            <Testimonial />
            <Contact />
        </>
    );
}

export default Home;

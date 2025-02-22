//const subTitle = "Why Choose Us, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";
// const title = "Become Online Instructor";
const desc = ["Charotar University of Science and Technology (CHARUSAT) has been conceived by Shri Charotar Moti Sattavis Patidar Kelavani Mandal to put India on global education map by making Charotar – the Land of Sardar Patel, a Global Education Hub. Hence, CHARUSAT fosters an aspiration of being a World Class University. It strives, initially, to be in the league of Top 20 Universities at National Level.",
"The exceptional vision of the President, CHARUSAT and Kelavani Mandal - Shri Surandrabhai Patel (fondly known as Kaka) strengthened by institutional values of Honesty, Integrity and transparency has enabled the university to realize the ambitious goal by 2025.",<br/>,
"I am honored and privileged to be a Member of CHARUSAT Family during this very special time in its history. I believe that in these challenging times, CHARUSAT Fraternity needs to move forward together and succeed in its mission of preparing the students for global assignments by fostering attitude, building knowledge and sharpening skills so as to create a talent pool best fit not only for jobs but also for enterpreneurship with a spirit of service to the society.",<br/>,
"What distinguishes CHARUSAT from the rest of the universities is how it implements the strategy to achieve its goals. The strategy takes into consideration its own vision, its past accomplishments, its strengths and resources, and the challenges posed by the environment. Primarily, CHARUSAT Framework for Excellence focuses on the Core Performance Areas: Teaching, Learning and Assessment; Research Development and Innovation; and Extension and Community Services and Core Capacity Dimensions like Good Governance, Infrastructure, Faculty Competence, and Student Talent.",<br/>,
"Student Centricity of the Curricula and Pedagogy at CHARUSAT focuses on creating sustainable and conducive environment for the ensure sustainability in what they gain from the experience. To achieve this, all efforts at CHARUSAT, are dedicated to inculcate active and experiential learning in the courses and capitalize on the use of technology in class.",<br/>,
"Education at CHARUSAT accord with many opportunities within and beyond the classroom to acquire knowledge, to develop interests and inclinations, and to stretch the potential, all within a nurturing and conducive learning environment. To foster institutional cultural change, emphasis is placed on learning, member engagement, faculty involvement in the shared governance process, and continual improvement.",<br/>,
"It is also essential that university productivity and research funding in different faculties is increased. Along with enhance sustainability, this will also enhance the visibility of the university. It will establish a dynamic research environment through faculty involvement in graduate teaching and research and the expansion of graduate programs in multidisciplinary fields.",<br/>,
"The Provost office will serve and support the faculty all the times, reinforcing a culture of excellence, respect and open communication in their efforts in the direction.",<br/>,
"I look forward to your kind cooperation and support."
];
//const text='From Presidents Desk';
const title = "From the Provost's Desk";
//const subTitle = "About CHARUSAT";


const ProvostDesk = () => {
    return (
        <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/images/about/Provost_RVU.webp" alt="about" />
                                </div>
                                <h3>Dr. R. V. Upadhyay</h3>
                                <h4>Provost, CHARUSAT</h4>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="about-right">
                                <div className="section-header">
                                    {/* <span className="subtitle">{subTitle}</span> */}
                                    <h2 className="title">{title}</h2>
                                    <p style={{textAlign:"justify"}}>{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
}
 
export default ProvostDesk;
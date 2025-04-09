import React from "react";
import "./AboutUs.css";

const aboutData = [
  {
    title: "Who We Are",
    content:
      "Established in 1989, Sai Egotherm India stands as a pioneer among manufacturers and exporters of thermostats and space heaters. With over four decades of expertise, we proudly offer India's most extensive range of panel heating and controlling solutions. The name Sai Egotherm India is synonymous with reliability, precision, and timely delivery of superior-quality products. Trusted nationwide, we are dedicated to providing world-class solutions that meet and exceed customer expectations, cementing our position as an industry leader.",
  },
  {
    title: "Infrastructure",
    content:
      "Our state-of-the-art manufacturing unit forms the cornerstone of our operations, equipped with cutting-edge machinery and advanced technology. This ensures precision and efficiency in producing world-class quality products. Our well-established sales office caters to both domestic and international markets, ensuring seamless communication and exceptional customer support. A highly skilled and experienced technical team drives our success, focused on research, development, and continuous improvement.",
  },
  {
    title: "Quality",
    content:
      "Quality is at the heart of Sai Egotherm India. From design and development to manufacturing and delivery, we maintain the highest standards. Our systems & products are 'ISO' and 'CE' marked, meeting stringent national and international safety and quality benchmarks. Advanced technology and rigorous quality control measures ensure precision, durability, and reliability.",
  },
  {
    title: "Vision",
    content:
      "Our vision is to lead the industry with the largest, most innovative, and reliable range of panel heating and controlling solutions. We aim to empower industries with energy-efficient, high-performance solutions that enhance precision, safety, and sustainability. By embracing advanced technology and maintaining our commitment to quality, we aspire to set new standards and foster global trust in our solutions.",
  },
  {
    title: "Mission",
    content:
      "At Sai Egotherm India, our mission is to deliver superior heating and controlling solutions that exceed customer expectations. We are committed to Innovation & Precision.",
  },
  {
    title: "Sustainability",
    content:
      "By adhering to the highest national and international standards, embracing continuous improvement, and adopting a customer-centric approach, we strive to build lasting partnerships, empower industries, and contribute to a smarter, more efficient future.",
  },
];
const wavePaths = [
  "M0,96L24,112C48,128,96,160,144,181.3C192,203,240,213,288,186.7C336,160,384,96,432,96C480,96,528,160,576,197.3C624,235,672,245,720,240C768,235,816,213,864,224C912,235,960,277,1008,250.7C1056,224,1104,128,1152,122.7C1200,117,1248,203,1296,224C1344,245,1392,203,1416,181.3L1440,160L1440,320L0,320Z",

  "M0,160L30,186.7C60,213,120,267,180,266.7C240,267,300,213,360,197.3C420,181,480,203,540,192C600,181,660,139,720,117.3C780,96,840,96,900,117.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,213.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z",

  "M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,176C420,149,480,107,540,112C600,117,660,171,720,181.3C780,192,840,160,900,138.7C960,117,1020,107,1080,138.7C1140,171,1200,245,1260,250.7C1320,256,1380,192,1410,160L1440,128L1440,320L0,320Z",

  "M0,224L30,208C60,192,120,160,180,138.7C240,117,300,107,360,133.3C420,160,480,224,540,224C600,224,660,160,720,138.7C780,117,840,139,900,170.7C960,203,1020,245,1080,250.7C1140,256,1200,224,1260,213.3C1320,203,1380,213,1410,218.7L1440,224L1440,320L0,320Z",

  "M0,192L40,213.3C80,235,160,277,240,277.3C320,277,400,235,480,197.3C560,160,640,128,720,122.7C800,117,880,139,960,170.7C1040,203,1120,245,1200,256C1280,267,1360,245,1400,234.7L1440,224L1440,320L0,320Z",

  "M0,256L30,245.3C60,235,120,213,180,192C240,171,300,149,360,154.7C420,160,480,192,540,213.3C600,235,660,245,720,224C780,203,840,149,900,122.7C960,96,1020,96,1080,106.7C1140,117,1200,139,1260,170.7C1320,203,1380,245,1410,266.7L1440,288L1440,320L0,320Z",
];

const images = [
  "https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-19816.jpg?uid=R194030063&ga=GA1.1.1463399089.1735449957&semt=ais_country_boost&w=740",
  "https://img.freepik.com/free-vector/electric-power_1284-19036.jpg?uid=R194030063&ga=GA1.1.1463399089.1735449957&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7401.jpg?uid=R194030063&ga=GA1.1.1463399089.1735449957&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-vector/virtual-reality-illustration-concept_114360-888.jpg?uid=R194030063&ga=GA1.1.1463399089.1735449957&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg?uid=R194030063&ga=GA1.1.1463399089.1735449957&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-vector/save-planet-concept-with-people-taking-care-earth_23-2148522570.jpg?uid=R194030063&ga=GA1.1.1463399089.1735449957&semt=ais_hybrid&w=740",
];


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-heading">About Us</h2>
      {aboutData.map((section, index) => (
        <div key={index} className="about-section">
          {/* <div className="circle-top-right" />
          <div className="circle-bottom-left" /> */}
          <div className="wave">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="section-content-container">
            <h3 className="section-title">{section.title}</h3>
            <p className="section-content">{section.content}</p>
          </div>
          {/* Image (mapped from array) */}
          <img
            src={images[index % images.length]}
            alt={section.title}
            className="about-image"
          />
          {/* SVG Wave Background */}

          {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="wave-svg"
              >
                <defs>
                  <linearGradient
                    id="waveGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="10%" stopColor="#334f47" />
                    <stop offset="60%" stopColor="#577d73" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#waveGradient)"
                  fillOpacity="1"
                  d={wavePaths[index % wavePaths.length]}
                ></path>
              </svg> */}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;

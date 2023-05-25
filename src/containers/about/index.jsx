import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { ImInfo, ImAndroid, ImAppleinc } from "react-icons/im";
import { BsUnity } from "react-icons/bs";
import { FaDev, FaDatabase } from "react-icons/fa";
import { SiUnrealengine, SiReact, SiAdobe, SiBlender } from "react-icons/si";
import { personalData } from "./utils";
import "./styles.scss";
import { Animate } from "react-simple-animate";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent headerText="About Me" icon={<ImInfo size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="selfContent">Developer / Designer / Creator</h3>
            <p>
              Hello! I'm thrilled to have this opportunity to introduce myself.
              I'm a tech enthusiast with a deep love for programming, design,
              and creating digital experiences. My name is Qujuan Miller, and
              I'm excited to share a little bit about myself and my interests.
              Programming has always been my true passion. The ability to bring
              ideas to life through code is an incredibly rewarding experience
              for me. I enjoy the problem-solving aspect of programming and the
              endless possibilities it offers. Whether it's developing software
              applications, crafting efficient algorithms, or scripting
              automation tools, I find joy in every line of code I write. Design
              is another area where my creativity shines. I have a keen eye for
              aesthetics and enjoy crafting visually appealing designs that
              captivate users. From user interfaces to logos and branding, I
              relish the process of creating engaging visuals that enhance the
              overall user experience. Combining my programming skills with
              design allows me to build functional and visually stunning
              websites and applications. Speaking of websites and applications,
              I have a diverse skill set when it comes to developing them. I
              have experience working with various web technologies, such as
              HTML, CSS, and JavaScript, to build responsive and interactive
              websites. Additionally, I'm proficient in programming languages
              like Python, Java, and C++, which enables me to develop robust
              software applications. Furthermore, I have a passion for 3D
              modeling and animation. I love bringing characters and objects to
              life, giving them personality and movement through animation.
              Whether it's creating 3D models for games, architectural
              visualization, or animated shorts, the world of 3D art is an
              endless realm of possibilities that I thoroughly enjoy exploring.
              In addition to my technical skills, I have also worked on several
              personal projects. These projects have allowed me to dive deep
              into various aspects of programming, design, and development. They
              have not only sharpened my skills but have also provided me with
              valuable experience in managing projects from inception to
              completion. Overall, I am an enthusiastic and driven individual
              who thrives on challenges and continuous learning. I'm always
              looking for new opportunities to expand my knowledge and skills
              while creating meaningful and impactful experiences. If you're
              looking for someone who is passionate about programming, design,
              and creating innovative digital solutions, I would love to
              collaborate and contribute my skills to your projects. Thank you
              for taking the time to read about me. I look forward to connecting
              with you and exploring exciting possibilities together!
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateY(500px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <ImAndroid color="var(--selected-theme-main-color)" size={60} />
              </div>
              <div>
                <ImAppleinc
                  color="var(--selected-theme-main-color)"
                  size={60}
                />
              </div>
              <div>
                <BsUnity color="var(--selected-theme-main-color)" size={60} />
              </div>
              <div>
                <SiUnrealengine
                  color="var(--selected-theme-main-color)"
                  size={60}
                />
              </div>
              <div>
                <SiReact color="var(--selected-theme-main-color)" size={60} />
              </div>
              <div>
                <SiAdobe color="var(--selected-theme-main-color)" size={60} />
              </div>
              <div>
                <SiBlender color="var(--selected-theme-main-color)" size={60} />
              </div>
              <div>
                <FaDev color="var(--selected-theme-main-color)" size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;

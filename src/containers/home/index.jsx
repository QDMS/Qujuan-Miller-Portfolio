import React from "react";
import "./styles.scss";
import { FaImdb } from "react-icons/fa"
import {
  ImFacebook2,
  ImLinkedin,
  ImGithub,
  ImInstagram,
  ImTwitter,
  ImYoutube,
  ImSoundcloud2,
  ImSteam2,
} from "react-icons/im";
import { Animate } from "react-simple-animate";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Qujuan,
          <br />
          Developer / Designer / Creator
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(600px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <button>Hire Me</button>
            <a>Download Resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <Link to="https://www.facebook.com/qujuan.miller.75/">
              <ImFacebook2 size={32} />
            </Link>
            <Link to="https://www.linkedin.com/in/qujuan-miller-70187116b/">
              <ImLinkedin size={32} />
            </Link>
            <Link to="https://github.com/QDMS">
              <ImGithub size={32} />
            </Link>
            <Link to="https://www.instagram.com/tismstudios/">
              <ImInstagram size={32} />
            </Link>
            <Link to="https://twitter.com/Qujuankone">
              <ImTwitter size={32} />
            </Link>
            <Link to="https://www.youtube.com/channel/UC7TYpkyqeRxmwkLQYpthJog">
              <ImYoutube size={32} />
            </Link>
            <Link to="https://soundcloud.com/millertime239">
              <ImSoundcloud2 size={32} />
            </Link>
            <Link to="https://steamcommunity.com/profiles/76561198116529002/">
              <ImSteam2 size={32} />
            </Link>
            <Link to="https://www.imdb.com/name/nm9305978/?ref_=nv_sr_srsg_0_tt_1_nm_2_q_Qujua">
              <FaImdb size={32} />
            </Link>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;

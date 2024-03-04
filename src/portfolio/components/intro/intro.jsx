import React, { useContext } from "react";
import './intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../floatingdiv/floatingDiv'
import { themeContext } from "../../../context";
import { motion } from "framer-motion";

const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
                    <span>Rakesh Ponna</span>
                    <span>Mobile Application developer with high level of experiance in designing and development </span>
                </div>
                <button className="button i-button">Hire me</button>

                <div className="i-icons">
                    <a href='https://www.github.com/rakeshponna/' target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="GitHub" />
                    </a>
                    <a href='https://www.github.com/rakeshponna/' target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href='https://www.github.com/rakeshponna/' target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>

            </div>

            <div className="i-right">

                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={boy} alt="boy" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt="glassesimoji" />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div">
                    <FloatingDiv img={crown} text1="Mobile" text2="Developer" />
                </motion.div>
                <motion.div initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div">
                    <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Intro

import React, { useContext } from "react";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import "./services.css";
import Card from "../cards/card";
import { themeContext } from "../../../context";
import { motion } from "framer-motion";

const Services = () => {
    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id="services">

            {/* left side */}
            <div className="awesome">

                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <a href={''} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div
                    initial={{ left: '30rem', top: '2rem'  }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    // style={{ left: '30rem', top: '2rem' }}
                    >
                    <Card emoji={HeartEmoji}
                        heading={'Desgin'}
                        detail={"Android, IOS, React"}
                    />
                </motion.div>

                <motion.div
                    initial={{ top: '12rem', left: '4rem' }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    // style={{ top: '12rem', left: '4rem' }}
                    >
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Android, IOS, React Native, Flutter,React, Nodejs, Express"}
                    />
                </motion.div>

                <motion.div
                    initial={{ top: '25rem', left: '25rem' }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    // style={{ top: '25rem', left: '25rem' }}
                    >
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where we need some random text"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}>

                </div>
            </div>
        </div>

    )
}

export default Services
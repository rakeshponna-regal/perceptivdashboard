import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "./portfol.css";
import "swiper/css";
import { themeContext } from "../../../context";

const Portfol = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className="protfol" id="portfol">
            {/* heading */}
            <span style={{color: darkMode?'white': ''}}>Recent projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={1}
                slidesPerView={3}
                grabCursor={true}
                className="protfol-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfol
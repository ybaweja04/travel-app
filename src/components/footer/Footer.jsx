import React from 'react'
import "./footer.css"
import video1 from "../img/video.mp4"
import { IoIosSend } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { LiaAirbnb } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <section className='footer'>
            <div className='videoDiv'>
                <video src={video1} loop autoPlay muted 
                type='video/mp4'></video>
            </div>

            <div className='footerContent container'>
                <div className='contactDiv flex'>
                    <div className='text'>
                        <small>Prepare yourself to be a part of exploration of</small>
                        <h2>The Beauty Of This World</h2>
                    </div>

                    <div className='inputDiv flex'>
                        <input type='text' placeholder='enter E-mail Address'/>
                        <button className='btn flex' type='submit'>
                            SEND <IoIosSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className='mainFooter'>
                    <hr/>
                    <div className='footerLinks'>
                        <div class="copyright">
                            <p>&#169; all rights reserved</p>
                        </div>
                        <div className='links'>
                            <AiFillInstagram />
                            <LiaAirbnb />
                            <LiaFacebookF />
                            <AiFillTwitterCircle />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import {AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
        <div className="waves">
            <div className="wave" id='wave1'></div>
            <div className="wave" id='wave2'></div>
            <div className="wave" id='wave3'></div>
            <div className="wave" id='wave4'></div>
        </div>
        <ul className='social-icon'>
            <li> <BsFacebook/></li>
            <li><BsTwitter/></li>
            <li><FiInstagram/></li>
            <li><AiFillLinkedin/></li>
        </ul>

        <ul className='menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <p>©2022 All Right Reserved | Created By Mohammad Raihan</p>
    </div>
  )
}

export default Footer
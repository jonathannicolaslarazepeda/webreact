import React, { useEffect, useRef } from 'react';
import bgImg from '../../assets/about003.png';
import charaImg from '../../assets/about002.png';
import planeImg from '../../assets/about001.png';
import Map from '../../components/map/Map';

const Contact = () => {

    return (

        <div className="about">

            <h2>Contact & Location</h2>

            <Map />

            <div className="about-text">
                <h4>Office Direction</h4>
                <p>C/ Pepito Palote nº 1</p>
                <p>CP: 35001</p>
                <p>Las Palmas de Gran Canaria</p>
                <p> </p>
                <p> </p>
                <h4>Contact Email or Telephone</h4>
                <p>contact@hbattoilustration.com</p>
                <p>+34 623 123 456 789</p>
                <p> </p>
                <p> </p>
                <h4>Social Media</h4>
                <p>X</p>
                <p>Instagram</p>
                <p>Tik Tok</p>
                <p>Youtube</p>
            </div>
        </div>
    );
};

export default Contact;

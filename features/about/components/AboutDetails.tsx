import React from 'react';
import Image from "next/image";

function AboutDetails() {
    return (
        <div className='about'>
            <div className='about__header'>
                <h1>What we do</h1>
                <div className="about__header-img">
                    <Image layout="fill" objectFit="cover" src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'/>
                </div>
            </div>

            <div className="about__content">
                <div className="about__content-info">
                    <h1>WE ARE PERFECT LOVE FOR YOU</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                </div>

                <div className="about__content-service">
                    <h2>OUR SERVICES</h2>
                    <ul>
                        <li>CMS-System</li>
                        <li>Webshop-System</li>
                        <li>Native-Apps</li>
                        <li>Web-Apps</li>
                        <li>Motion & Animation</li>
                    </ul>
                </div>

                <div className="about__content-awards">
                    <h2>AWARDS</h2>
                    <ul>
                        <li>Grafik-Design</li>
                        <li>Image Corporate Identity</li>
                        <li>Corporate Design Content</li>
                        <li>Marketing UI/UX-Design 2021.</li>
                        <li>Messe & Events</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutDetails;
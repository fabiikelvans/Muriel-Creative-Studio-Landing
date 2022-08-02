import React from 'react';
import AboutPortfolioItem from "./AboutPortfolioItem";
import {projects__data} from "../../../data/projectsData";


function AboutPortfolio() {
    return (
        <div className='about__portfolio'>
            <h1 className='title'>Portfolio</h1>
            <div className='about__portfolio-items'>

                <AboutPortfolioItem
                    title={"Soft Shadows"}
                    category={"Creative"}
                    image1={"https://images.unsplash.com/photo-1590912469735-8bdd4a492801?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxzb2Z0JTIwc2hhZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                    image2={"https://images.unsplash.com/photo-1589523795613-c3fce27eea23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                    image3={"https://images.unsplash.com/photo-1658855321614-f93dceb5fe3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}/>
            </div>
        </div>
    );
}

export default AboutPortfolio;
import React from 'react';
import Image from "next/image";
interface Props{
    title: string,
    category: string,
    image1: string
    image2: string
    image3: string
}

function AboutPortfolio({title, category, image1, image2, image3}: Props) {
    return (
        <div>
            <div className="about__portfolio-item">
                <div className="image-1">
                    <img src={image2}  />
                </div>

                <div className="image-2">
                    <img src={image3}  />
                </div>

                <div className="image-main">
                    <img src={image1} />
                </div>

            </div>

                <div className="about__portfolio-item_info">
                    <div className="pagination">01</div>
                    <div className="i">
                        <h2 className="i-name">Soft Shadows</h2>
                        <p className="i-category">Creative</p>
                    </div>
                </div>
        </div>

    );
}

export default AboutPortfolio;
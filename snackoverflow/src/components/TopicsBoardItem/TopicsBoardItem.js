import React from 'react';
import img_crisps from "../../assets/images/pexels-iconcom-479628.jpg";
import img_candies from "../../assets/images/pexels-ylanite-koppens-1906435.jpg"
import img_biscuits from "../../assets/images/lefteris-p-B1Wqz1iLvo0-unsplash.jpg"

const images = [img_crisps, img_candies, img_biscuits];


const TopicsBoardItem = () => {
    return (
        <div>
            {images.map((image, index) => (
                <div
                
                key={index}>
                   <img
                    style={{ width: "10%", height: "10%" }}
                    src={image} alt=""/> 
                </div>

            ))}
            
        </div>
    )
}

export default TopicsBoardItem;
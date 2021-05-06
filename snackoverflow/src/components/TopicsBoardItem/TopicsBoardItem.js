import React from 'react';
import { Link } from 'react-router-dom'
import img_crisps from "../../assets/images/pexels-iconcom-479628.jpg";
import img_candies from "../../assets/images/pexels-ylanite-koppens-1906435.jpg"
import img_biscuits from "../../assets/images/lefteris-p-B1Wqz1iLvo0-unsplash.jpg"
import img_cakes from "../../assets/images/1c1bdb911de65537addceb67ffc8d635.jpg"
import img_popcorns from "../../assets/images/charles-deluvio-PvAAYZx-yf8-unsplash.jpg"
import img_chocolates from "../../assets/images/jessica-loaiza-DHYfjAe_eeo-unsplash.jpg"
import img_nutsandseeds from "../../assets/images/maksim-shutov-pUa1On18Jno-unsplash.jpg"
import img_shreds from "../../assets/images/61eb6xiwT6L.jpg"
import img_chewinggums from "../..//assets/images/pete-alexopoulos-BZoJlaXPqWQ-unsplash.jpg"


import style from "./topicsboarditem.module.scss"


const images = [img_crisps, img_candies, img_biscuits, img_cakes, img_popcorns, img_chocolates, img_nutsandseeds, img_shreds, img_chewinggums];


const TopicsBoardItem = () => {
    return (
        <div className={style['topicsboard-container']}>
            {images.map((image, index) => (
                <div className={style['item-container']}>
                <Link to="" className={style.item} 
                
                key={index}>
                   <img
                    
                    src={image} alt=""/> 
                </Link>
                </div>
            ))}
            
        </div>
    )
}

export default TopicsBoardItem;


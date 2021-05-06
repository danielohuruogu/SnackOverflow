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
        <div>
            {/* {images.map((image, index) => (
                //<div className={style['item-container']}>
                <Link className={style.item} 
                
                key={index}>
                   <img
                    
                    src={image} alt=""/> 
                </Link>
                //</div>
            ))} */}
            <div className={style.gameboard}>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_crisps} alt="Crisps"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Crisps</div>
                        </Link>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_candies} alt="Candies"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Candies</div>
                        </Link>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_biscuits} alt="Biscuits"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Biscuits</div>
                        </Link>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_cakes} alt="Cakes"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Cakes</div>
                        </Link>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_popcorns} alt="Popcorn"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Popcorn</div>
                        </Link>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_chocolates} alt="Chocolates"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Chocolates</div>
                        </Link>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_nutsandseeds} alt="Nuts and Seeds"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Nuts and Seeds</div>
                        </Link>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_shreds} alt="Shreds"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Shreds</div>
                        </Link>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.box}>
                        <img src={img_chewinggums} alt="Chewing Gum"></img>
                        <Link to='/' class={style.middle}>
                            <div class={style.text}>Chewing Gum</div>
                        </Link>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default TopicsBoardItem;


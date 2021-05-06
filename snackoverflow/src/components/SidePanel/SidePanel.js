import React from 'react'
import style from './sidepanel.module.scss'

const SidePanel = () => {
    return (
        <div className={style.marginTop}>
            <div className={style.sidepanel}>
                <div className={style.titles}>Trending Snacks</div>
                <ul>
                    <li>Ferrero Rocher</li>
                    <li>Toblerone</li>
                    <li>Kitkat</li>
                    <li>Gummy Bears</li>
                    <li>Sunkist</li>
                </ul>

                <div className={style.titles}>Recent Posts</div>
                <ul>
                    <li>Petition to stop gaps in Toblerone from getting wider every year</li>
                    <li>KitKat is better than Twix, change my mind</li>
                    <li>Auctioning super rare editions of Ferrero Roche</li>
                </ul>
            </div>
        </div>
    )
}

export default SidePanel

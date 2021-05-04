import React from 'react'
import style from './crisps.module.scss'
import { Link, useParams } from "react-router-dom"

const Crisps = () => {
    console.log('hello');
    const { crisps } = useParams();

    return (
        
        <div className={style.crisps}>
            {/* <div> */}

                
                <p>crisps</p>
                <p>{crisps}</p>
                
            {/* </div> */}
        </div>

    )
}

export default Crisps;
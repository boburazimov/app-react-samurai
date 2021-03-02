import React from "react";
import preloader from "../../../assets/images/Preloader.svg"

let Preloader = () => {

    return (
        <div style={{backgroundColor: 'none'}}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader;
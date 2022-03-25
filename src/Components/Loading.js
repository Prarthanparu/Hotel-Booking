import React from 'react'
import loadingGif from '../images/gif/giphy.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h4>room data LOADing....</h4>
            <img src={loadingGif} alt="" />
        </div>
    )
}

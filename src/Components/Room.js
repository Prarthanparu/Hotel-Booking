import React from 'react';
import {Link} from 'react-router-dom';
import {defaultImg} from '../images/details-3.jpeg';
import PropTypes from 'prop-types';

export default function Room({room}) {
    const {name,images,slug,price} = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="Single Room" />
                <div className="price-top">
                    <h6>₹{price}</h6>
                    <p>Per Night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}


Room.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        image:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}
import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';

export default function Home() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Luxurious Room" subtitle="Delux Rooms 
                    Starting From 5000₹">
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>  
            </Hero>
            <Services/> 
            <FeaturedRooms/>
        </React.Fragment>
    );
}



import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services:[
      {
        icon: <FaCocktail/>,
        title:"Free CockTail",
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. adipisci '
      },
      {
        icon: <FaHiking/>,
        title:"Hiking Trails",
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '
      },
      {
        icon: <FaShuttleVan/>,
        title:"Free Shuttle",
        info:'Lorem ipsum dolor sit amet consectetur,  consequuntur adipisci ipsum obcaecati '
      },
      {
        icon: <FaBeer/>,
        title:"Strong Beer",
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus repudiandae sint assumenda .'
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="Services"/>
        <div className="services-center">
          {this.state.services.map((item, index) =>{
              return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
          })}
        </div>
      </section>
    );
  }
}

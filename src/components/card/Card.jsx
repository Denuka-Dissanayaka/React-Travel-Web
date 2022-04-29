import React from 'react';
import CardItem from '../cardItem/CardItem';
import './card.css';
import {info1, info2} from './info.js';

function Card() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    
                    {
                        info1.map((item, index) => {
                            return (
                                <CardItem 
                                    key = {index}
                                    src = {item.src}
                                    text = {item.text}
                                    label = {item.label}
                                    path = {item.path}
                                />
                            )
                        })
                    }
                </ul>
                <ul className="cards__items">
                    
                    {
                        info2.map((item, index) => {
                            return (
                                <CardItem 
                                    key = {index}
                                    src = {item.src}
                                    text = {item.text}
                                    label = {item.label}
                                    path = {item.path}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card

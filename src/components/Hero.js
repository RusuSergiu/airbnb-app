import React from 'react'
import Image01 from '../images/image-01.jpg'
import Image02 from '../images/image-02.jpg'
import Image03 from '../images/image-03.jpg'
import Image04 from '../images/image-04.jpg'
import Image05 from '../images/image-05.jpg'
import Image06 from '../images/image-06.jpg'
import Image07 from '../images/image-07.jpg'
import Image08 from '../images/image-08.jpg'
import Image09 from '../images/image-09.jpg'


export default function Hero() {
    return (
        <section>
            <div className = 'row'>
                <img src = {Image01} alt = 'image01' className = 'first-grid-image' />
                <div className = 'column-one'>
                    <img src = {Image02} alt = 'image02' className = 'grid-image' />
                    <img src = {Image03} alt = 'image03' className = 'grid-image' />
                </div>
                <div className = 'column-two'>
                    <img src = {Image04} alt = 'image04' className = 'grid-image' />
                    <img src = {Image05} alt = 'image05' className = 'grid-image' />
                </div>
                <div className = 'column-three'>
                    <img src = {Image06} alt = 'image06' className = 'grid-image' />
                    <img src = {Image07} alt = 'image07' className = 'grid-image' />
                </div>
                <div className = 'column-four'>
                    <img src = {Image08} alt = 'image08' className = 'grid-image' />
                    <img src = {Image09} alt = 'image09' className = 'grid-image' />
                </div>
            </div>
            <h1 className = 'hero-header'>Online Experiences</h1>
            <p className = 'hero-text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
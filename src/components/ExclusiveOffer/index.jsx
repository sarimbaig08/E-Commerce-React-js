import React from 'react'
import "./ExclusiveOffer.css"

const ExclusiveOffer = () => {
    return (
        <div className='ExclusiveBanner'>
            <h1>
                Get Exclusive Offers On Your Email
            </h1>
            <p>Subscribe to our news letter and get updates</p>
            <div className='inputWrapper'>
                <input type="text" placeholder='Enter your email' className='exclusiveInput' />
                <button className='exclusiveButton'>Subscribe</button>
            </div>
        </div>
    )
}

export default ExclusiveOffer
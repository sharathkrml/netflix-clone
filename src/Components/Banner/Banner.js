import React from 'react'
import './Banner.css';
function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner-buttons'>
                    <button className='play'>Play</button>
                    <button className='mylist'>My List</button>
                </div>
                <h1 className='description'>
                     Irure occaecat id consequat exercitation labore cillum nostrud magna exercitation sint eu sunt esse voluptate. Ad velit laboris laboris labore anim enim mollit fugiat id mollit. Mollit enim et ullamco incididunt officia Lorem.
                </h1>
            </div>
           {/* use div.fade-bottom */}
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner

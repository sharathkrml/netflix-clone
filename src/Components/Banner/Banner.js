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
                    Ipsum consequat enim velit irure eu ea id proident Lorem deserunt aliquip. Quis officia quis qui exercitation. Nisi nisi duis cillum nisi dolore. Irure occaecat id consequat exercitation labore cillum nostrud magna exercitation sint eu sunt esse voluptate. Ad velit laboris laboris labore anim enim mollit fugiat id mollit. Mollit enim et ullamco incididunt officia Lorem.
                </h1>
            </div>
        </div>
    )
}

export default Banner

import React from 'react'
import './video-banner.css';
import back from '../../asses/video/back.mp4'

function VideoBanner() {
    return (
        <div className="Header">
            <div className="header-section">

			    <div className="center-div">
                
				
                <video 
                autoPlay
                loop
                muted
                className="video"
                >
                    <source src= {back} type="video/mp4" />
                </video>

                
		        </div>

                <div className="center-div-overlay"> 
                
                <div className="header-buttons">
					<a href="contact.html">Contact Us</a>
				</div>
                </div>

                
                
            </div>
             </div>
        
        
    )
}
 
export default VideoBanner;

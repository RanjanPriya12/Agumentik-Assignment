import React from 'react';
import "./footer.css";


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerCol'>
            <h2><em style={{color:"rgb(234,76,137)", fontSize:"28px", fontWeight:"bold"}}>dribbble</em></h2>
            <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
            <p className='imageContainer'>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/198/029/original/grid-globe-map-png.png" alt="pic" />
               
                    <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="pic" />
               
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRpI_gK5tFrnBv3KR8WepIOfiCUX_pdmUm_u4Ju0&s" alt="pic" />
              
                    <img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="pic" />
               
                    <img src="https://i.pinimg.com/474x/61/6a/d8/616ad83e3cf5ef66fbcc43acb2b7499a--windows-desktop-pinterest-app.jpg" alt="pic" />
              
            </p>
        </div>
        <div className='footerCol'>
            <h3>For designers</h3>
            <p>Go Pro!</p>
            <p>Explore design work</p>
            <p>Design blog</p>
            <p>Overtime podcast</p>
            <p>Playoffs</p>
            <p>Refer a Friend</p>
            <p>Code of Contact</p>
        </div>
        <div className='footerCol'>
            <div>
                <h3>Hire Designers</h3>
                <p>Post a job opening</p>
                <p>Post a freelance project</p>
                <p>Search for designers</p>
            </div>
            <div>
                <h3>Brands</h3>
                <p>Advertise with Us</p>
            </div>
        </div>
        <div className='footerCol'>
            <h3>Company</h3>
            <p>Abouts</p>
            <p>Careers</p>
            <p>Support</p>
            <p>Media Kit</p>
            <p>Testimonials</p>
            <p>API</p>
            <p>Terms of Services</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
        </div>
        <div className='footerCol'>
            <div>
                <h3>Directories</h3>
                <p>Design jobs</p>
                <p>Designers for hire</p>
                <p>Freelance designers for hire</p>
                <p>Tags</p>
                <p>Places</p>
            </div>
            <div>
                <h3>Design assets</h3>
                <p>Creative Market</p>
                <p>Fontspring</p>
                <p>Font Squirrel</p>
            </div>
        </div>
        <div className='footerCol'>
            <h3>Design Resources</h3>
            <p>Freelancing</p>
            <p>Design Hiring</p>
            <p>Design Portfolio</p>
            <p>Design Education</p>
            <p>Creative Process</p>
            <p>Design Industry Trends</p>
        </div>
    </div>
  )
}

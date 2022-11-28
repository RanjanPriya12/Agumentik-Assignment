import React from 'react';
import "./section.css";

export const Section1 = () => {
  return (
    <div className='section1'>
        <div className='logoSection'>
            <div className='line'></div>
            <div>
                <img style={{borderRadius:"50%", width:"80px"}} src="https://cdn.dribbble.com/users/6850340/avatars/normal/09e52d7cca4f82c18e68ba67bbaeb1dc.png?1664764970" alt="pic" />
            </div>
            <div className='line'></div>
        </div>
        <h3>Odama</h3>
        <p>Underrated agency with passionate people in the industry.</p>
        <div className='btn'><span>📩</span> Hire Us</div>
    </div>
  )
}

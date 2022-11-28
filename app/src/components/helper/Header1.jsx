import React from 'react';
import './header1.css';

export const Header1 = () => {
  return (
    <div className='header1'>
        <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
        <div>
            <img style={{borderRadius:"50%", cursor:"pointer"}} src="https://cdn.dribbble.com/users/6850340/avatars/small/09e52d7cca4f82c18e68ba67bbaeb1dc.png?1664764970" alt="logo" />
        </div>
        <div>
            <div>
                <h4>Kontrako Landing Page Exploration ✨</h4>
            </div>
            <div style={{display:"flex", gap:"10px",alignItems:"center"}}>
                <p>Odama</p>
                <ul style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <li><p style={{fontSize:"16px", cursor:"pointer"}}>Follow</p></li>
                    <li><p style={{color:"rgb(234,76,137)",fontSize:"16px", cursor:"pointer"}}>Hire Us</p></li>
                </ul>
            </div>
        </div>
        </div>
        <div style={{display:"flex", alignItems:"center", gap:"2rem"}}>
        <p className='button' id='save'>Save</p>
        <p className='button' id='like'><span>&#9829;</span>Like</p>
        </div>
        
    </div>
  )
}

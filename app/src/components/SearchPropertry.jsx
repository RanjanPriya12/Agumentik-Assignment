import React from 'react'
import { Header1 } from './helper/Header1';
import "./helper/header1.css";
import { Header2 } from './helper/Header2';

export const SearchPropertry = () => {
  return (
    <div className='propertySearch'>
        <Header1/>
        <Header2/>
        <div className='details'>
          <p>Hi Dribbblers! 🥳</p>
          <p>Here our new Landing page for Kontrako. Hope you like it guys. Cheers! ✨</p>
          <p>You can also read our case study here : <span className='pink'> Medium</span></p>
          <p>This Landing Page Created by <span className='pink'>Azie</span></p>
          <p>Feel free to give me some feedback.</p>
<p>And don't forget to press "L" if you love it.</p>

<p>----------------</p>
<div className='detailDiv'>
  <p>We available for work together :</p>
  <ul>
    <li><p>📩Email Us :<span className='pink'> odamastudio@gmail.com</span></p></li>
    <li><p>😎Instagram :<span className='pink'> Odama Studio</span></p></li>
    <li><p>🎉Figma Community :<span className='pink'> Odama Studio</span></p></li>
    <li><p>🛒Gumroad : <span className='pink'>Odama</span></p></li>
  </ul>
</div>
        </div>
        
    </div>
  )
}

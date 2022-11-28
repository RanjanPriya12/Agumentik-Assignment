import React from 'react';
import "./section.css";

export const Section2 = () => {
    const datas=[
        {
            "image":"https://www.theworkspace.co.za/wp-content/uploads/2021/01/inspirational-quotes.jpg",
            "title":"FindTrand Land...",
            "icon1":"📧",
            "icon2":"❤️"
        },
        {
            "image":"https://www.heloplus.com/wp-content/uploads/2020/02/sad-quotes-about-life.jpg",
            "title":"Odama Landin...",
            "icon1":"📧",
            "icon2":"❤️"
        },
        {
            "image":"https://www.finetoshine.com/wp-content/uploads/Sad-Quotes-750x536.jpg",
            "title":"Pondansi Landin...",
            "icon1":"📧",
            "icon2":"❤️"
        },
        {
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxIf-G9Jczp3edeMeKPE1q6370DFJYjMyy6sXhfScrXDGIptrNQlK0HCSo6Mt8L-ILCg&usqp=CAU",
            "title":"Odama Landin...",
            "icon1":"📧",
            "icon2":"❤️"
        }
    ]
  return (
    <div className='section2'>
        <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
            <div style={{color:"black", fontWeight:"bold"}}>More by Odama</div>
            <div style={{color:"rgb(234,76,137)", cursor:"pointer"}}>View profile</div>
        </div>
        <div className='flexContainer'>
            {
                datas.map((item,ind)=>(
                    <div key={ind} className="flexItem">
                        <div id='DivForHoverItem'>
                            <span>{item.title}</span>
                            <span>{item.icon1}</span>
                            <span>{item.icon2}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

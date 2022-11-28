import React from "react";
import "./header1.css";

export const Header2 = () => {
    const property=[
        {"image":"https://img.staticmb.com/mbphoto/property/cropped_images/2019/Mar/20/Photo_h180_w240/40799605_1_kn-professional-architects-interior-designer-10142577-4ac1cd58_180_240.jpeg",
          "title":"Chitaland Tower",
          "type":"2 BHK",
          "price":"Rs. 40,000"
        },
        {"image":"https://is1-2.housingcdn.com/01c16c28/3f2acfdd4bc3effde2bfa3da0481c7f5/v0/medium/2_bhk_apartment-for-sale-sangamvadi-Pune-bedroom.jpg",
          "title":"Tamansari Urbano",
          "type":"1 BHK",
          "price":"Rs. 20,000"
        },
        {"image":"https://apollo-singapore.akamaized.net/v1/files/1tppr9ki7ewl1-IN/image;s=272x0",
          "title":"Borneo Paradiso",
          "type":"3 BHK",
          "price":"Rs. 80,000"
        },
        {"image":"https://mediacdn.99acres.com/media1/19700/4/394004748M-1669450193357.jpg",
          "title":"D'java Residence",
          "type":"2 BHK",
          "price":"Rs. 70,000"
        },
    ]
  return (
    <div className="header2">
      <div className="leftPart">
        <div
          style={{
            backgroundImage: `url("https://www.shutterstock.com/image-photo/warsaw-poland-22-february-2021-260nw-1923844013.jpg")`,
            width: "100%",
            height: "100%",
            opacity: "0.8",
            objectFit: "cover"
          }}

          className="child1"
        >
          <ul className="miniNav">
            <li>Home</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li style={{ display: "flex", flexDirection: "flex-end" }}>
              KONTRAKO
            </li>
          </ul>
          <h2>Easy way to find the property according to your choice.</h2>
          <p>
            We provides various propetry models for you at affordable prices and
            the quality.
          </p>
          <div className="inputSection">
            <select>
                <option value="location">Location</option>
                <option value="">Noida</option>
                <option value="">Delhi</option>
                <option value="">Banglore</option>
                <option value="">Hydrabad</option>
                <option value="">Chennai</option>
                <option value="">Panjab</option>
                <option value="">Pune</option>
                <option value="">Mumbai</option>
                <option value="">Dehradun</option>
                <option value="">Jaipur</option>
            </select>
            <select>
                <option value="type">Property Type</option>
                <option value="">1 BHK</option>
                <option value="">2 BHK</option>
                <option value="">3 BHK</option>
            </select>
            <select>
                <option value="range">Price Range</option>
                <option value="">Rs. 20,000 to Rs. 40,000</option>
                <option value="">Rs. 40,000 to Rs. 60,000</option>
                <option value="">Rs. 60,000 to Rs. 80,000</option>
                <option value="">Rs. 80,000 to Rs. 100k</option>
                <option value="">Rs. 100k to Rs. 120k</option>
                <option value="">Rs. 120k to Rs. 140k</option>
                <option value="">Rs. 140k to Rs. 160k</option>
                <option value="">Above 1 Lack 60k</option>
            </select>
            <span style={{marginLeft:"1.5rem", fontSize:"16px", cursor:"pointer"}}>&#128269;</span>
          </div>

          <div style={{display:"flex", width:"80%", margin:"auto", color:"white",fontWeight:"bold", fontSize:"12px", gap:"40px", paddingTop:"10px"}}>
            <span>&#10004; 100% Best quality guarantee.</span><span>&#10004; More affordable price</span>
          </div>
        </div>
        <div className="child2">
            <h5>Our Property</h5>
            <p>We provide various type of property for you with different categories.</p>

            <div className="propertyContainer">
                {property.map((el,ind)=>(
                    <div key={ind} className="propertyItem">
                        <div className="propertyImage">
                            <img src={el.image} alt="pic" />
                        </div>
                        <h5 style={{fontSize:"10px", textAlign:"left", marginTop:"-10px"}}>{el.title}</h5>
                        <p style={{fontSize:"8px", textAlign:"left", marginTop:"px"}}>{el.type}</p>
                        <p style={{fontSize:"8px", textAlign:"left", marginTop:"-10px", color:"blue", fontWeight:"bold"}}>{el.price}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <div className="rigthPart">
      <div
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092__340.jpg")`,
            width: "100%",
            height: "100%",
            opacity: "0.8",
            objectFit: "cover"
          }}

          className="child3"
        >
          <ul className="miniNav">
            <li>
              KONTRAKO
            </li>
            <li><span>&#9776;</span></li>
          </ul>
          <h2>Easy way to find the property according to your choice.</h2>
          <p>
            We provides various propetry models for you at affordable prices and
            the quality.
          </p>
          <div className="inputSection">
            <select>
                <option value="location">Location</option>
                <option value="">Noida</option>
                <option value="">Delhi</option>
                <option value="">Banglore</option>
                <option value="">Hydrabad</option>
                <option value="">Chennai</option>
                <option value="">Panjab</option>
                <option value="">Pune</option>
                <option value="">Mumbai</option>
                <option value="">Dehradun</option>
                <option value="">Jaipur</option>
            </select>
            <span style={{marginLeft:"1.5rem", fontSize:"16px", cursor:"pointer"}}>&#128269;</span>
          </div>

          <div style={{display:"flex", flexDirection:"column", width:"80%", margin:"auto", color:"white",fontWeight:"bold", fontSize:"10px", gap:"10px", paddingTop:"10px"}}>
            <span>&#10004; 100% Best quality guarantee.</span><span>&#10004; More affordable price</span>
          </div>
          <h4>Our Property</h4>
        </div>

      </div>
    </div>
  );
};

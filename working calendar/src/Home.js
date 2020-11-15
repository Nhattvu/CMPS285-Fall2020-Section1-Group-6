import React from 'react';
import './index.css';



function Home() {
  return (
    <div >
       <div id= "main1">
         <div id= "left1">
            <img src={require("./images/classic.jpeg")}/>
         </div>
         <div id= "middle1">
             <img src={require("./images/hybrid.png")}/>
            </div>
         <div id= "right1"> 
             <img src={require("./images/volume.png")}/>
         </div>
      </div> 
      <div id= "main2">
         <div id= "left2">
         </div>
         <div id= "middle2">
            </div>
         <div id= "right2"> 
         </div>
      </div> 
       <div id= "footer"> 
       </div>
       </div>
  );
}

export default Home;

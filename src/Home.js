import React from 'react';
import './index.css';



function Home() {
  return (
    <div >
       <div id= "main1">
         <div id= "left1">
            <h1> Classic Set</h1> 
            <img src={require("./images/classic.jpeg")}/>
         </div>
         <div id= "middle1">
             <h1> Hybrid Set </h1>
             <img src={require("./images/hybrid.png")}/>
            </div>
         <div id= "right1"> 
             <h1> Volume Set </h1>
             <img src={require("./images/volume.png")}/>
         </div>
      </div> 
      <div id= "main2">
         <div id= "left2">
            <h1> Classic Refill </h1> 
         </div>
         <div id= "middle2">
             <h1> Hybrid Refill </h1>
            </div>
         <div id= "right2"> 
             <h1> Volume Refill </h1>
         </div>
      </div> 
       <div id= "footer"> 
        <ul> 
        <li>
            <h1>Ayonna's Lashes</h1>
            <script src="./Ayonna&#39;s Lashes_files/jquery.min.js.download"></script>
            <script src="./Ayonna&#39;s Lashes_files/bootstrap.bundle.min.js.download"></script>
            <script src="./Ayonna&#39;s Lashes_files/site.js.download"></script>
          </li>
          </ul>  
       </div>
       </div>
  );
}

export default Home;

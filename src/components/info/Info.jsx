import React from 'react'
import "./info.css"

const Info = () => {
  return (
    <div className='info-container'>
        <div className="experince">
            <div style={{fontSize:'50px',color:"white"}}>3</div>
            <div className='three'>
                <div style={{color:'#DCCFED'}}>YEARS OF</div> 
                <div style={{color:'#DCCFED'}}>EXPERIENCE </div> 
            </div>
        </div>

        <div className="experince">
            <div style={{fontSize:'50px',color:"white"}}>12</div>
            <div className='three'>
                <div className='info-text'  style={{color:'#DCCFED'}}>PROJECT COMPLETED</div> 
                <div className='info-text'  style={{color:'#DCCFED'}}>AROUND THE WORLD</div> 
            </div>
        </div>

        <div className="icon-section">

        <img src="./infoAssets/html5.svg" />
        <img src="./infoAssets/css3.svg" />
        <img src="./infoAssets/react-js.svg" />
        <img src="./infoAssets/nodejs.svg" />
        <img src="./infoAssets/vs-code.svg" />
        <img src="./infoAssets/react-native.svg" />
        </div>
    </div>
  )
}

export default Info
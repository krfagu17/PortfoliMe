import React from 'react'
import "./info.css"
import { motion } from 'framer-motion'

const Info = () => {
  return (
    <motion.div
    
    className='info-container'>
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

        <motion.div 
        
        className="icon-section">

        <motion.img initial={{ y:-100 ,opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.4}} src="./infoAssets/html5.svg" />
        <motion.img initial={{ y:120 ,opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.6}} src="./infoAssets/css3.svg" />
        <motion.img initial={{ y:-140 ,opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.8}} src="./infoAssets/react-js.svg" />
        <motion.img initial={{ y:160 ,opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.4}} src="./infoAssets/nodejs.svg" />
        <motion.img initial={{ y:-180 ,opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.6}} src="./infoAssets/vs-code.svg" />
        <motion.img initial={{ y:200 ,opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.8}} src="./infoAssets/react-native.svg" />
        </motion.div>
    </motion.div>
  )
}

export default Info
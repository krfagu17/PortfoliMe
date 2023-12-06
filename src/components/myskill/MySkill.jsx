import React from 'react'
import './myskill.css'
import { motion } from 'framer-motion'

const MySkill = () => {
    return (
        <div className='skill-container'>
            <div>

                <h1>My Skill</h1>
            </div>
            <div className="main-container">
                <motion.div 
                transition={{ duration: 0.8 }}
                  initial={{ opacity: 0 , x: -1000}}
                  whileInView={{ opacity: 1, x: 0 }}
                className="skill-icons">
                    <motion.img
                    whileHover={{ scale: 1.2}} src='./infoAssets/html5-gradient.svg' />
                    <motion.img
                    whileHover={{ scale: 1.2}} src='./infoAssets/css3-gradient.svg' />
                    <motion.img
                    whileHover={{ scale: 1.2}} src='./infoAssets/node-js-gradient.svg' />
                    <motion.img
                    whileHover={{ scale: 1.2}} src='./infoAssets/react-js-gradient.svg' />
                </motion.div>

                <motion.div 
                
                transition={{ duration: 0.8 }}
                  initial={{ opacity: 0 , x: 1000}}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="skill-icons">
                    <motion.img
                    whileHover={{ scale: 1.2}}
                    src='./infoAssets/vs-code-gradient.svg' />
                    <motion.img
                    whileHover={{ scale: 1.2}} src='./infoAssets/firebase.svg' />
                    <motion.img
                    whileHover={{ scale: 1.2}} src='./infoAssets/github-skill.svg' />
                    <motion.img
                    whileHover={{ scale: 1.2}} src='./infoAssets/mongo-db.png' />
                </motion.div>
            </div>
        </div>
    )
}

export default MySkill
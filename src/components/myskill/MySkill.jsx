import React from 'react'
import './myskill.css'

const MySkill = () => {
    return (
        <div className='skill-container'>
            <div>

                <h1>My Skill</h1>
            </div>
            <div className="main-container">
                <div className="skill-icons">
                    <img src='./infoAssets/html5.svg' />
                    <img src='./infoAssets/css3.svg' />
                    <img src='./infoAssets/nodejs.svg' />
                    <img src='./infoAssets/react-js.svg' />
                </div>

                <div className="skill-icons">
                    <img src='./infoAssets/vs-code.svg' />
                    <img src='./infoAssets/html5.svg' />
                    <img src='./infoAssets/html5.svg' />
                    <img src='./infoAssets/html5.svg' />
                </div>
            </div>
        </div>
    )
}

export default MySkill
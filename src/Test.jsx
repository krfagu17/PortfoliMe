import React from 'react'
import Slider from "react-slick";
import './slide.css'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Test = () => {
  const data=[{
    id:1,
    title:"Diet App",
    img:"./projects/diet-app.jpeg",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    link:"https://github.com/krfagu17/Diet-app",
    live:"https://diet-app-jade.vercel.app/"
  
  },
{
  id:2,
  title:"Crypto",
  img:"./projects/Crypto.jpeg",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  link:"https://github.com/krfagu17/Crypto",
  live:"https://crypto-graphy.vercel.app/"
},
{
  id:3,
  title:"E-commerce Web Design",
  img:"https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  link:"",
},
{
  id:4,
  title:"E-commerce Web Design",
  img:"https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  link:"",

}]


const settings = {
  dots:true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
};
  return (
    <div style={{background:"rgba(122, 14, 14, 0.2)",height:'100vh',width:"auto", justifyContent:"center",alignItems:"center", display:"flex"}}>
  <div className="slider">
  <Carousel useKeyboardArrows={true} centerMode={true} showArrows={true} axis='horizontal'>
                <div className='slidercontent'>
                    <img src={data[0].img} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className='slidercontent'>
                    <img src={data[1].img} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='slidercontent'>
                    <img src={data[2].img} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
  </div>
  )
}

export default Test

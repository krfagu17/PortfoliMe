
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./projects.css"

export default function App() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });


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
}]

  return (
    <motion.div
    className="project">
      <h1>Projects</h1>
      
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
          />
      </svg>
      <motion.ul
      transition={{ duration: 1}}
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
      ref={ref}>
        {data.map((d)=>(
          <motion.li 
          whileHover={{scale:1.1}}
          key={d.id} className="card">
            <h3>{d.title}</h3>
            <img src={d.img} alt="" srcset="" />
            <div className="btns">
              <button><a href={d.link}>Code</a></button>
              <button><a href={d.live}>Live</a></button>
              
            </div>
          </motion.li>
        ))}
       
      </motion.ul>
          </motion.div>
  );
}

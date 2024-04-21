import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillAmazonCircle} from "react-icons/ai";
const Home = () => {
  return (<>
    <div className='home' id="home">
        <main>
    <h1>TechSolver</h1>
    <p>Solution to all your daily Tech problems</p>
    </main>
    </div>
    <div className="home2">
<img src={vg} alt = 'Graphics' />
<div>
  <p>We are your one and only solution to the tech problems you face
  every day. </p>
</div>
    </div>
    <div className="home3" id="about">
<div><h1>Who we are?</h1>
<p>
"We are a dedicated team passionate about solving everyday tech challenges. With expertise in various domains, we craft innovative solutions to simplify your digital life. Our mission is to empower users with seamless experiences, offering reliable support and guidance every step of the way."
   </p></div>


    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{ animationDelay: "0.3s",}}>
            <AiFillGoogleCircle />
            <p>Google</p>

          </div>
          <div style={{ animationDelay: "0.5s",}}>
            <AiFillAmazonCircle />
            <p>Amazon</p>

          </div>
          <div style={{ animationDelay: "0.7s",}}>
            <AiFillYoutube />
            <p>Youtube</p>

          </div>
          <div style={{ animationDelay: "1s",}}>
            <AiFillInstagram />
            <p>Instagram</p>

          </div>
        </article>
      </div>
    </div>
    
    </>
  
    )
}

export default Home
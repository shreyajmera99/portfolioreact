import React from 'react'
import { Link } from 'react-router-dom'

export default function Certification() {
  return (
    <>
     <section id="products2">
    <h1>Certification</h1>
    <div class="products2container">
      <div class="products2">
        <img src="avs.PNG" alt="" />
      </div>
      <div class="products2">
        <img src="sqlc.PNG" alt="" />
      </div>
      <div class="products2">
        <img src="sqli.PNG" alt="" />
      </div>
      <div class="products2">
        <img src="sqlc.PNG" alt="" />
      </div>
      <div class="products2">
        <img src="bb.PNG" alt="" />
      </div>
      <div class="products2">
        <img src="internshala.PNG" alt="" />
      </div>
      </div>
    </section>
    <div className="container" style={{fontSize:'12px',backgroundColor:'white'}}>
      <h1 id="projects" style={{color:'blueviolet',textAlign:'center'}}>Projects</h1>

      <div className="row d-flex justify-content-center">
        <div className="card m-3" style={{ width: '17rem' }}>
          <video src="crpto.mp4" poster="thumb1.jpeg" height="200px" className="card-img-bottom" controls></video>
          <div className="card-body">
            <h3>Crypto</h3>
            <p className="card-text">
              Stay ahead of the crypto market with our feature-rich app built using Material-UI and ReactJS! Track real-time prices, analyze trends with interactive graphs for 24h, 7d, 1m, 6m, and 1 year periods, and make informed investment decisions with ease.
            </p>
            <a href="https://crypto-five-vert.vercel.app/"   rel="noreferrer" target="_blank" className="btn btn-primary mb-3">Visit</a>
            <a href="https://github.com/shreyajmera99/Crypto"  rel="noreferrer"  target="_blank" className="btn btn-primary mx-2 mb-3"><img src="git.png" width="20" alt="" srcset="" /> Github</a>
            <p>Tech Stack: <img src="mui.png" width="20" alt="" /><img src="react.png" width="20" alt="" /></p>
          </div>
        </div>
        <div className="card m-3" style={{ width: '17rem' }}>
          <video src="xand0.mp4" poster="thumb2.jpeg" height="200px" className="card-img-bottom" controls></video>
          <div className="card-body">
            <h3>X and 0</h3>
            <p className="card-text">
              Experience the classic game of X and O with a modern twist in our React-powered app! Play against friends and enjoy smooth animations, and relive nostalgic moments with our HTML, CSS, and JS-designed user interface.
            </p>
            <a href="https://xand0.vercel.app/" target="_blank"  rel="noreferrer" className="btn btn-primary mb-3">Play</a>
            <a href="https://github.com/shreyajmera99/Xand0"  rel="noreferrer" target="_blank" className="btn btn-primary mx-2 mb-3"><img src="git.png" width="20" alt="" srcset="" /> Github</a>
            <p>Tech Stack: <img src="htmlpics.png" width="20" alt="" srcset="" /><img src="csspics.png" width="20" alt="" srcset="" /> <img src="jspics.png" width="20" alt="" /><img src="react.png" width="20" alt="" /></p>
          </div>
        </div>
        <div className="card m-3" style={{ width: '17rem', backgroundColor: 'white', color: 'rgb(21, 11, 72)' }}>
          <img src="textutils.jpeg" height="200px" className="card-img-bottom" alt="..." />
          <div className="card-body">
            <h3>Text Utils</h3>
            <p className="card-text">Text Utils is a utility module that provides various text manipulation functions. It offers functionalities to convert text to uppercase, lowercase, clear text, and remove extra spaces. Using React</p>
            <a href="https://shreyajmera99.github.io/textutils/" target="_blank"  rel="noreferrer" className="btn btn-primary mb-3">View</a>
            <a href="https://github.com/shreyajmera99/textutils" target="_blank"   rel="noreferrer" className="btn btn-primary mx-2 mb-3"><img src="git.png" width="20" alt="" srcset="" /> Github</a>
            <p>Tech Stack: <img src="htmlpics.png" width="20" alt="" srcset=""  /><img src="csspics.png" width="20" alt=""  /> <img src="jspics.png" width="20" alt="" /><img src="react.png" width="20" alt="" /><img src="boot.png" width="20" alt="" srcset="" /></p>
          </div>
        </div>
        <div className=" text-center">
            <Link to="/projects">
            <button className="btn btn-danger text-container">Show All</button>

            </Link>
        </div>
      </div>
    </div>
    </>
  )}
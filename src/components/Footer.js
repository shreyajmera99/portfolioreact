import React from 'react'
import "../App.css"
export default function Footer() {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <p>Download Resume</p>
      </div>

      <div className="midFooter">
      
        <p>Copyrights 2023 &copy; <a href="https://github.com/shreyajmera99" style={{color:"white"}}>Shrey Ajmera</a></p>
 
      </div>

      <div className="rightFooter">
        <p>Follow me</p>
        <a href="https://www.instagram.com/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346"
            alt="Instagram"
            className="styleimg"
            

          />
        </a>
        <a href=""target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Fv8jNuPZ_21YnkuZCBJWMQJbQqos3A8do58JRTA8Hw&s"
            className="styleimg"
            alt="Facebook"

          />
        </a>
        <a href="https://github.com/shreyajmera99"target="_blank">
          <img
            src="data:image/png;base64,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"
            className="styleimg"
            
            alt="Github"
          />
        </a>
      </div> 
    </footer>
  )
}

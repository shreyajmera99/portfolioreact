import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Section1() {
  const textArray = ["Software Developer", "Web Developer", "Data Analyst"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const typingSpeed = 50; // Adjust the typing speed (lower value for faster typing)

  useEffect(() => {
    function typeText(index, text, currentCharacterIndex) {
      if (index === textArray.length) return; // Stop typing when all strings are shown

      if (currentCharacterIndex < text.length) {
        setDisplayText(text.substr(0, currentCharacterIndex + 1));
        setTimeout(() => {
          typeText(index, text, currentCharacterIndex + 1);
        }, typingSpeed);
      } else {
        // Delay before erasing the text
        setTimeout(() => {
          eraseText(index, text, text.length);
        }, 1000); // Adjust the delay before erasing (in milliseconds)
      }
    }

    function eraseText(index, text, currentCharacterIndex) {
      if (currentCharacterIndex >= 0) {
        setDisplayText(text.substr(0, currentCharacterIndex));
        setTimeout(() => {
          eraseText(index, text, currentCharacterIndex - 1);
        }, typingSpeed);
      } else {
        // Move to the next string
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
    }

    typeText(currentIndex, textArray[currentIndex], 0);
  }, [currentIndex]);

  return (
    <>
      <section className="home" id="home">
        <div className="homesec" id="leftcontainer">
          Hi, My name is <span className="purple">Shrey</span>
          <div>and I am Passionate</div>
          <div></div>
          <span id="element">{displayText}</span>
        </div>

        <div className="homesec" id="rightcontainer">
          <img src="bg1.png" alt="" />
        </div>
      </section>
    </>
  );
}

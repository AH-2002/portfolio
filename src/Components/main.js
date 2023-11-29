import React, { useState, useEffect } from 'react';
import './main.css';
import Button from './Button.js'
function Main(){
const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [words] = useState(["Abdelrahman Hamada", "a Data Analyst", "a Python Developer"]);

  useEffect(() => {
    const dynamicText = document.querySelector(".word");
    dynamicText.classList.add("stop-blinking");

    const typingInterval = setInterval(() => {
      const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);

        dynamicText.textContent = currentChar;

        if (charIndex < currentWord.length) {
          setCharIndex(charIndex + 1);
        } else {
          setCharIndex(0);
          setWordIndex((wordIndex + 1) % words.length);
        }
      };

      typeEffect();
    }, 130); // Adjust the interval here

    return () => clearInterval(typingInterval);
  }, [wordIndex, charIndex, words]);

    
    return(
        <section className="main" id='main'>
            <div className='main-info'>
                <h2>Welcome,</h2>
                <p>I'm <span className='word'></span></p>
                <Button value="Hire Me" href="#contact"/>
            </div>
        </section>
    );
    }
export default Main;
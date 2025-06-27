import { useState, useEffect } from 'react';
import '../App.css'; // ✅ Correct relative path from src/components


const Hero = () => {
  const words = ['planets', 'stars', 'moons', 'galaxies', 'multiverse'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 120);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Exploring universe</h1>

        <p>
         
        </p>

        <div className="hero-btn">
          <button>In the silence of stars, I find my soul's embrace</button>
          <button>The universe — my eternal lover in infinite space</button>
        </div>

        <div className="working">
          <p>
            love for <span className="animated-text">{displayText}</span>
          </p>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/space.png" alt="space" />
      </div>
    </main>
  );
};

export default Hero;

  
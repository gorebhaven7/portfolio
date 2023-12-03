import React, { useState } from 'react';
import useTypingEffect from '../hooks/useTypingEffect';
import './TypingAnimation.css';

const TypingAnimation = () => {
  const words = ["Software Developer", "Full Stack Developer", "Android Developer","UI/UX Designer & App Developer"];
  const typing = useTypingEffect(words, 2000);
  const [isDeleting, setIsDeleting] = useState(false);

  // Assuming useTypingEffect calls setIsDeleting(true) when backspacing starts
  // and setIsDeleting(false) when a new word starts typing
  // You'll need to adjust useTypingEffect to use this setter appropriately

  return (
    <div className="typing">
      <h2>
        {typing}
        <span className={`cursor ${isDeleting ? 'cursor--hidden' : ''}`}></span>
      </h2>
    </div>
  );
};

export default TypingAnimation;

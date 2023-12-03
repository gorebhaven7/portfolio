import { useState, useEffect } from 'react';

const useTypingEffect = (words, delay = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay); // Add delay before starting to backspace
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : subIndex === words[index].length ? delay : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, delay, words]);

  return `${words[index].substring(0, subIndex)}`;
};
export default useTypingEffect;

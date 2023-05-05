import React, { useEffect, useState } from 'react';
import { useSprings, animated } from 'react-spring';

const randomEmojis = ['💰', '💸', '💲', '🤑', '📈', '💱', '💹', '🚀', '💳', '🤖', '🧠', '❤️'];

const styles = {
  emojiContainer: {
    position: 'absolute',
  },
  floating: (duration, delay) => ({
    animation: `floatingY ${duration}s ease-in-out infinite, floatingX ${duration * 2}s linear infinite`,
    animationDelay: `${delay}s`,
  }),
};

const Emoji = ({ children, style }) => {
  return (
    <div style={{ ...styles.emojiContainer, ...style }}>
      <span role="img" aria-label="emoji">
        {children}
      </span>
    </div>
  );
};

const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const generateEmojis = () => {
      const newEmojis = [];
      for (let i = 0; i < 20; i++) {
        const emoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
        const size = Math.random() * 20 + 30;
        const left = Math.random() * 40;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 2;

        newEmojis.push(
          <Emoji
            key={i}
            style={{
              ...styles.floating(duration, delay),
              fontSize: size,
              left: `${left}%`,
            }}
          >
            {emoji}
          </Emoji>,
        );
      }
      setEmojis(newEmojis);
    };

    generateEmojis();
  }, []);

  return <>{emojis}</>;
};

export default FloatingEmojis;

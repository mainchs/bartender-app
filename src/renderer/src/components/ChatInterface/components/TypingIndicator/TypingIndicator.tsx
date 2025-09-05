import React from 'react';
import styles from './TypingIndicator.module.css';

const TypingIndicator = () => {
  return (
    <div className={`${styles.message} ${styles.assistantMessage} ${styles.typingIndicator}`}>
      <span className={styles.typingDots}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
  );
};

export default TypingIndicator;
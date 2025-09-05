import React, { useState } from 'react';
import styles from './MessageInput.module.css';

interface MessageInputProps {
  onSubmit: (message: string) => void;
}

const MessageInput = ({ onSubmit }: MessageInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputActions}>
          <button type="button" className={styles.attachButton}>
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.50016 3.41659H3.41683V5.49992C3.41683 5.61043 3.37293 5.71641 3.29479 5.79455C3.21665 5.87269 3.11067 5.91658 3.00016 5.91658C2.88966 5.91658 2.78368 5.87269 2.70553 5.79455C2.62739 5.71641 2.5835 5.61043 2.5835 5.49992V3.41659H0.500163C0.389656 3.41659 0.283675 3.37269 0.205535 3.29455C0.127395 3.21641 0.0834961 3.11043 0.0834961 2.99992C0.0834961 2.88941 0.127395 2.78343 0.205535 2.70529C0.283675 2.62715 0.389656 2.58325 0.500163 2.58325H2.5835V0.499919C2.5835 0.389412 2.62739 0.283431 2.70553 0.205291C2.78368 0.127151 2.88966 0.083252 3.00016 0.083252C3.11067 0.083252 3.21665 0.127151 3.29479 0.205291C3.37293 0.283431 3.41683 0.389412 3.41683 0.499919V2.58325H5.50016C5.61067 2.58325 5.71665 2.62715 5.79479 2.70529C5.87293 2.78343 5.91683 2.88941 5.91683 2.99992C5.91683 3.11043 5.87293 3.21641 5.79479 3.29455C5.71665 3.37269 5.61067 3.41659 5.50016 3.41659Z" fill="white"/>
            </svg>
          </button>
          <div className={styles.tags}>
            <span className={styles.tag}>
              앱 연결
            </span>
            <span className={styles.tag}>할 일</span>
          </div>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="오늘은 어떤 도움을 드릴까요?"
          className={styles.textInput}
        />
        <button type="submit" className={styles.sendButton}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0.5V7.5M4 0.5L7 3.5M4 0.5L1 3.5" stroke="white" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
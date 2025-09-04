import React, { useState } from 'react';
import styles from './ChatInterface.module.css';

interface ChatInterfaceProps {
  title?: string;
}

const ChatInterface = ({ title = '홈' }: ChatInterfaceProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setInputValue('');
    }
  };

  return (
    <div className={styles.chatInterface}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>
      
      <div className={styles.chatArea}>
      </div>

      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputActions}>
            <button type="button" className={styles.attachButton}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 8.5V8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8V8.5C2 11.2614 4.23858 13.5 7 13.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 14L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className={styles.tags}>
              <span className={styles.tag}>앱 연결</span>
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289Z" fill="currentColor"/>
              <path d="M14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071Z" fill="currentColor"/>
              <path d="M1 1L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
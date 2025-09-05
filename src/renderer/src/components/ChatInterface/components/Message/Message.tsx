import React from 'react';
import styles from './Message.module.css';

interface MessageProps {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
}

const Message = ({ content, sender }: MessageProps) => {
  return (
    <div className={`${styles.message} ${sender === 'user' ? styles.userMessage : styles.assistantMessage}`}>
      {content}
    </div>
  );
};

export default Message;
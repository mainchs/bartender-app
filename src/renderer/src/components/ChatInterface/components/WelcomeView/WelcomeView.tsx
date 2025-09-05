import React from 'react';
import MessageInput from '../MessageInput/MessageInput';
import styles from './WelcomeView.module.css';

interface WelcomeViewProps {
  onSubmit: (message: string) => void;
}

const WelcomeView = ({ onSubmit }: WelcomeViewProps) => {
  return (
    <>
      <div className={styles.welcomeMessage}>
        서명균님, 무엇을 도와드릴까요?
      </div>
      <div className={styles.inputContainer}>
        <MessageInput onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default WelcomeView;
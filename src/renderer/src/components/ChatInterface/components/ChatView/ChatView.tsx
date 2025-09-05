import React from 'react';
import Message from '../Message/Message';
import MessageInput from '../MessageInput/MessageInput';
import TypingIndicator from '../TypingIndicator/TypingIndicator';
import styles from './ChatView.module.css';

interface MessageData {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
}

interface ChatViewProps {
  messages: MessageData[];
  isTyping: boolean;
  onSubmit: (message: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const ChatView = ({ messages, isTyping, onSubmit, messagesEndRef }: ChatViewProps) => {
  return (
    <div className={styles.messagesView}>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <Message
            key={message.id}
            id={message.id}
            content={message.content}
            sender={message.sender}
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.fixedInputContainer}>
        <MessageInput onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default ChatView;
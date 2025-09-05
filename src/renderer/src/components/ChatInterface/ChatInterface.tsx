import React, { useState } from 'react';
import WelcomeView from './components/WelcomeView/WelcomeView';
import ChatView from './components/ChatView/ChatView';
import styles from './ChatInterface.module.css';

interface ChatInterfaceProps {
  title?: string;
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
}

const ChatInterface = ({ title = '홈' }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const handleSubmit = (inputValue: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // 어시스턴트 응답 시뮬레이션 (1-2초 후)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now()).toString(),
        content: getAssistantResponse(inputValue),
        sender: 'assistant'
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAssistantResponse = (userInput: string): string => {
    const responses = [
      "네, 도움이 되었다니 다행입니다. 다른 궁금한 점이 있으시면 언제든 말씀해 주세요!",
      "요청하신 작업을 완료했습니다. 추가로 필요한 것이 있으시면 알려주세요.",
      "잘 이해했습니다. 더 자세한 설명이 필요하시거나 다른 도움이 필요하시면 말씀해 주세요.",
      "좋은 질문이네요! 이 부분에 대해서 자세히 설명드리겠습니다.",
      "말씀해 주신 내용을 바탕으로 도움을 드리겠습니다. 어떤 부분이 궁금하신가요?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // 메시지 추가 시 자동 스크롤
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className={styles.chatInterface}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      <div className={styles.chatArea}>
        {messages.length === 0 ? (
          <WelcomeView onSubmit={handleSubmit} />
        ) : (
          <ChatView 
            messages={messages} 
            isTyping={isTyping} 
            onSubmit={handleSubmit}
            messagesEndRef={messagesEndRef}
          />
        )}
      </div>
    </div>
  );
};

export default ChatInterface;

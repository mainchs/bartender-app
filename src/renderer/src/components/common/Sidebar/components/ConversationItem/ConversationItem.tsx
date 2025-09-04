import styles from './ConversationItem.module.css';

interface ConversationItemProps {
  name: string;
  onClick?: () => void;
}

const ConversationItem = ({ name, onClick }: ConversationItemProps) => {
  return (
    <div className={styles.chatItem} onClick={onClick}>
      {name}
    </div>
  );
};

export default ConversationItem;
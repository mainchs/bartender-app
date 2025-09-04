import styles from './FolderItem.module.css';
import ConversationItem from '../ConversationItem/ConversationItem';

interface FolderItemProps {
  name: string;
  conversations: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const FolderItem = ({ name, conversations, isOpen, onToggle }: FolderItemProps) => {
  return (
    <div className={styles.folder}>
      <div className={styles.folderName} onClick={onToggle}>
        <span className={`${styles.folderIcon} ${isOpen ? styles.folderOpen : ''}`}>
          {isOpen ? '▼' : '▶'}
        </span>
        {name}
      </div>
      {isOpen && conversations.length > 0 && (
        <div className={styles.folderItems}>
          {conversations.map((conversation, index) => (
            <ConversationItem key={index} name={conversation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderItem;
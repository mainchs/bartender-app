import { useState } from 'react';
import styles from './Sidebar.module.css';
import profileImage from '../../../assets/mock/audrbs.jpg';

type Route = 'main' | 'chat' | 'connect' | 'task';

const mockProfile = {
  name: '서명균',
  email: 'joohee0831@gmail.com',
};

interface Folder {
  id: string;
  name: string;
  conversations: string[];
  isOpen: boolean;
}

interface SidebarProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
  name?: string;
  email?: string;
}

const Sidebar = ({ 
  currentRoute, 
  onNavigate,
  name = mockProfile.name,
  email = mockProfile.email,
}: SidebarProps) => {
  const [folders, setFolders] = useState<Folder[]>([
    { id: '1', name: '폴더1', conversations: ['대화 1', '대화 1'], isOpen: true },
    { id: '2', name: '폴더1', conversations: ['대화 1'], isOpen: true },
    { id: '3', name: '폴더1', conversations: ['대화 1'], isOpen: true },
    { id: '4', name: '폴더1', conversations: [], isOpen: false },
  ]);

  const toggleFolder = (folderId: string) => {
    setFolders(folders.map(folder => 
      folder.id === folderId 
        ? { ...folder, isOpen: !folder.isOpen }
        : folder
    ));
  };
  return (
    <aside className={styles.sidebar}>
      <section className={styles.profileSection}>
        <figure className={styles.profileImage}>
          <img src={profileImage} alt="Profile" />
        </figure>
        <address className={styles.profileInfo}>
          <p className={styles.profileName}>{name}</p>
          <p className={styles.profileEmail}>{email}</p>
        </address>
      </section>

      <nav className={styles.nav}>
        <button
          className={`${styles.navButton} ${
            currentRoute === 'main' ? styles.active : ''
          }`}
          onClick={() => onNavigate('main')}
        >
          홈
        </button>
        <button
          className={`${styles.navButton} ${
            currentRoute === 'task' ? styles.active : ''
          }`}
          onClick={() => onNavigate('task')}
        >
          할 일
        </button>
        <button
          className={`${styles.navButton} ${
            currentRoute === 'connect' ? styles.active : ''
          }`}
          onClick={() => onNavigate('connect')}
        >
          앱 연결
        </button>
        <button
          className={`${styles.navButton} ${
            currentRoute === 'chat' ? styles.active : ''
          }`}
          onClick={() => onNavigate('chat')}
        >
          채팅
        </button>

        <div className={styles.chatFolders}>
          {folders.map((folder) => (
            <div key={folder.id} className={styles.folder}>
              <div 
                className={styles.folderName}
                onClick={() => toggleFolder(folder.id)}
              >
                <span className={`${styles.folderIcon} ${folder.isOpen ? styles.folderOpen : ''}`}>
                  {folder.isOpen ? '▼' : '▶'}
                </span>
                {folder.name}
              </div>
              {folder.isOpen && folder.conversations.length > 0 && (
                <div className={styles.folderItems}>
                  {folder.conversations.map((conversation, index) => (
                    <div key={index} className={styles.chatItem}>
                      {conversation}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

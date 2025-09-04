import { useState } from 'react';
import styles from './Navigation.module.css';
import FolderItem from '../FolderItem/FolderItem';

type Route = 'main' | 'chat' | 'connect' | 'task';

interface Folder {
  id: string;
  name: string;
  conversations: string[];
  isOpen: boolean;
}

interface NavigationProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

const Navigation = ({ currentRoute, onNavigate }: NavigationProps) => {
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

  const navItems = [
    { route: 'main' as Route, label: '홈' },
    { route: 'task' as Route, label: '할 일' },
    { route: 'connect' as Route, label: '앱 연결' },
    { route: 'chat' as Route, label: '채팅' },
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map(({ route, label }) => (
        <button
          key={route}
          className={`${styles.navButton} ${
            currentRoute === route ? styles.active : ''
          }`}
          onClick={() => onNavigate(route)}
        >
          {label}
        </button>
      ))}

      <div className={styles.chatFolders}>
        {folders.map((folder) => (
          <FolderItem
            key={folder.id}
            name={folder.name}
            conversations={folder.conversations}
            isOpen={folder.isOpen}
            onToggle={() => toggleFolder(folder.id)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
import styles from './Sidebar.module.css';

type Route = 'main' | 'chat' | 'connect' | 'task';

interface SidebarProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

const Sidebar = ({ currentRoute, onNavigate }: SidebarProps) => {
  return (
    <aside className={styles.sidebar}>
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
      </nav>
    </aside>
  );
};

export default Sidebar;

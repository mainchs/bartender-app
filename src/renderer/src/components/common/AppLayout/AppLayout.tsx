import { ReactNode } from 'react';
import styles from './AppLayout.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

type Route = 'main' | 'chat' | 'connect' | 'task';

interface AppLayoutProps {
  children: ReactNode;
  currentRoute: Route;
  onNavigate: (route: Route) => void;
  title?: string;
}

const AppLayout = ({
  children,
  currentRoute,
  onNavigate,
  title,
}: AppLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header title={title} />
      <div className={styles.body}>
        <Sidebar currentRoute={currentRoute} onNavigate={onNavigate} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
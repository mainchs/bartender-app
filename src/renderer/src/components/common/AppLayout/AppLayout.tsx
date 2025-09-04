import { ReactNode } from 'react';
import styles from './AppLayout.module.css';
import Sidebar from '../Sidebar/Sidebar';

type Route = 'main' | 'chat' | 'connect' | 'task';

interface AppLayoutProps {
  children: ReactNode;
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

const AppLayout = ({
  children,
  currentRoute,
  onNavigate,
}: AppLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar currentRoute={currentRoute} onNavigate={onNavigate} />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default AppLayout;

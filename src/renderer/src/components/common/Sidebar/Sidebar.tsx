import styles from './Sidebar.module.css';
import ProfileSection from './components/ProfileSection/ProfileSection';
import Navigation from './components/Navigation/Navigation';
import profileImage from '../../../assets/mock/audrbs.jpg';

type Route = 'main' | 'chat' | 'connect' | 'task';

const mockProfile = {
  name: '서명균',
  email: 'joohee0831@gmail.com',
};

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
  return (
    <aside className={styles.sidebar}>
      <ProfileSection 
        name={name}
        email={email}
        profileImage={profileImage}
      />
      <Navigation 
        currentRoute={currentRoute}
        onNavigate={onNavigate}
      />
    </aside>
  );
};

export default Sidebar;

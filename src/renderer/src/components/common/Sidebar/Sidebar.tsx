type Route = 'main' | 'chat' | 'connect' | 'task';

interface SidebarProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

const Sidebar = ({ currentRoute, onNavigate }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <button 
          className={currentRoute === 'main' ? 'active' : ''} 
          onClick={() => onNavigate('main')}
        >
          Main
        </button>
        <button 
          className={currentRoute === 'chat' ? 'active' : ''} 
          onClick={() => onNavigate('chat')}
        >
          Chat
        </button>
        <button 
          className={currentRoute === 'connect' ? 'active' : ''} 
          onClick={() => onNavigate('connect')}
        >
          Connect
        </button>
        <button 
          className={currentRoute === 'task' ? 'active' : ''} 
          onClick={() => onNavigate('task')}
        >
          Task
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

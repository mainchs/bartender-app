import { useState } from 'react';
import AppLayout from './components/common/AppLayout/AppLayout';
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';
import ConnectPage from './pages/ConnectPage';
import TaskPage from './pages/TaskPage';

type Route = 'main' | 'chat' | 'connect' | 'task';

function App(): React.JSX.Element {
  const [currentRoute, setCurrentRoute] = useState<Route>('main');

  const navigate = (route: Route) => {
    setCurrentRoute(route);
  };

  const getPageTitle = (route: Route) => {
    switch (route) {
      case 'main':
        return '홈';
      case 'chat':
        return '채팅';
      case 'connect':
        return '앱 연결';
      case 'task':
        return '할 일';
      default:
        return '홈';
    }
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'main':
        return <MainPage />;
      case 'chat':
        return <ChatPage />;
      case 'connect':
        return <ConnectPage />;
      case 'task':
        return <TaskPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <AppLayout
      currentRoute={currentRoute}
      onNavigate={navigate}
    >
      {renderPage()}
    </AppLayout>
  );
}

export default App;

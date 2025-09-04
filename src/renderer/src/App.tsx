import { useState } from 'react';
import Header from './components/common/Header/Header';
import Sidebar from './components/common/Sidebar/Sidebar';
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
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar currentRoute={currentRoute} onNavigate={navigate} />
        <main className="main-content">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;

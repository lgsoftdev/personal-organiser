import './App.css';
import Navigation from './components/navigation';
import { useState, type SyntheticEvent } from 'react';
import TodoList from './components/todo/todo-list';
import { NAV_LINKS } from './constants';

const App = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClickLink = (event: SyntheticEvent) => {
    const selectedLink = (event.target as HTMLElement).innerText;
    if (activeLink !== selectedLink) {
      setActiveLink(selectedLink);
    }
  };

  const getMainContent = () => {
    switch (activeLink) {
      case NAV_LINKS.TODO:
        return <TodoList />;
      default:
        return (
          <div className="content">
            <h2>Personal Organiser</h2>
            <p>A tool that helps you manage your time effectively.</p>
          </div>
        );
    }
  };

  return (
    <>
      <Navigation onClickLink={handleClickLink} />
      {getMainContent()}
    </>
  );
};

export default App;

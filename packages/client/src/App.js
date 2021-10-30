import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoPage from './pages/ToDoPage';
import { ThemeContext } from './contexts';

function App () {
  const theme = useState('lightTheme');
  return (
    <div className='App'>
      <ThemeContext.Provider value={theme}>
        <ToDoPage />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

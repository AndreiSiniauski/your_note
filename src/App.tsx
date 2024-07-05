import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if(window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      setUsername(window.Telegram.WebApp.initDataUnsafe.user.username)
    }

    window.Telegram.WebApp.expand();
  },[])

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Добро пожаловать, <strong>{username || 'гость'}</strong>!</p>
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Header } from '@shared/ui';
import { Calendar } from "@feature/calendar";
import "./mainPage.css";

function MainPage() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if(window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      setUsername(window.Telegram.WebApp.initDataUnsafe.user.username || '')
    }

    window.Telegram.WebApp.expand();
  },[])

  return (
    <main className="main">
      <Header username={username}/>
      <Calendar/>
    </main>
  );
}

export default MainPage;

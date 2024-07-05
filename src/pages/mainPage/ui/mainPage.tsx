import { useEffect, useState } from "react";
import { AddReminderButton, Header } from '@shared/ui';
import { Calendar } from "@feature/calendar";
import "./mainPage.css";

interface IReminder {
  text: string;
  date: string;
}

function MainPage() {
  const [username, setUsername] = useState('');
  const [reminders] = useState<IReminder[]>([]);

  useEffect(() => {
    if(window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      setUsername(window.Telegram.WebApp.initDataUnsafe.user.username || '')
    }

    window.Telegram.WebApp.expand();
  },[])

  const handle = () => {
    console.log('asdjik')
  }

  return (
    <main className="main">
      <Header username={username}/>
      <Calendar reminders={reminders}/>
      <AddReminderButton />
    </main>
  );
}

export default MainPage;

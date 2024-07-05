import { useEffect, useState } from "react";
import { AddReminderButton, Header } from '@shared/ui';
import { Calendar } from "@feature/calendar";
import { format } from "date-fns";
import "./mainPage.css";
import { ReminderList } from "@/entites";

interface IReminder {
  text: string;
  date: string;
}

function MainPage() {
  const [username, setUsername] = useState('');
  const [reminders, setReminders] = useState<IReminder[]>([]);

  useEffect(() => {
    if(window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
      setUsername(window.Telegram.WebApp.initDataUnsafe.user.username || '')
    }

    window.Telegram.WebApp.expand();
  },[])

  const handleAddReninder = () => {
    const newReminderText = prompt('Введите текст напоминания');
    const dateString = format(new Date(), 'yyyy-MM-dd');
    if(newReminderText) {
      setReminders([...reminders, {text: newReminderText, date: dateString}])
    }
  }

  return (
    <main className="main">
      <Header username={username}/>
      <Calendar reminders={reminders}/>
      <ReminderList reminders={reminders}/>
      <AddReminderButton onAdd={handleAddReninder}/>
    </main>
  );
}

export default MainPage;

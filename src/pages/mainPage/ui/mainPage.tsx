import { FC, useEffect, useState } from "react";
import { AddReminderButton, Header } from '@shared/ui';
import { Calendar } from "@feature/calendar";
import { format } from "date-fns";
import "./mainPage.css";
import { ReminderList } from "@/entites";
import { getReminders, addReminder } from "@shared/firebase";

interface IReminder {
  text: string;
  date: string;
}

interface IMainPageProps {
  user: WebAppUser;
}

const MainPage: FC<IMainPageProps> = ({user}) => {
  const [reminders, setReminders] = useState<IReminder[]>([]);
  const userId = user?.id?.toString();

  useEffect(() => {
    const fetchReminders = async () => {

      if(userId) {
        const reminders = await getReminders(userId);
        setReminders(reminders);
      }
    };
    fetchReminders();
  },[userId])

  const handleAddReninder = async () => {
    const newReminderText = prompt('Введите текст напоминания');
    const dateString = format(new Date(), 'yyyy-MM-dd');
    if(newReminderText && userId) {
      console.log('dada')
      await addReminder(userId, newReminderText, dateString);
      const reminders = await getReminders(userId)
      setReminders(reminders)
    }
  }

  return (
    <main className="main">
      <Header username={user?.username || ''}/>
      <Calendar reminders={reminders}/>
      <ReminderList reminders={reminders}/>
      <AddReminderButton onAdd={handleAddReninder}/>
    </main>
  );
}

export default MainPage;

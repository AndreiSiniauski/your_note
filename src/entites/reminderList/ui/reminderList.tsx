import {FC} from 'react';
import './reminderList.css';

interface IReminder {
  text: string;
  date: string;
}

interface IReminderListProps {
  reminders: IReminder[];
}

const ReminderList: FC<IReminderListProps> = ({ reminders }) => {
  return (
    <div className="reminder-list">
      {reminders.map((reminder, index) => (
        <div key={index} className="reminder-item">
          {reminder.text} (on {reminder.date})
        </div>
      ))}
    </div>
  );
};

export default ReminderList;
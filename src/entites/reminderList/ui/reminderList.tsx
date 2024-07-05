import {FC} from 'react';
import './ReminderList.css';

interface Reminder {
  text: string;
  date: string;
}

interface ReminderListProps {
  reminders: Reminder[];
}

const ReminderList: FC<ReminderListProps> = ({ reminders }) => {
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
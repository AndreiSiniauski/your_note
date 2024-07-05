import { useState, FC } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import './calendar.css';

interface Reminder {
  text: string;
  date: string;
}

interface CalendarViewProps {
  reminders: Reminder[];
}

const CalendarView: FC<CalendarViewProps> = ({ reminders }) => {
  const [date, setDate] = useState<Date>(new Date());

  const renderTileContent = ({ date, view }: { date: Date; view: string }) => {
    const dateString = format(date, 'yyyy-MM-dd');
    const reminder = reminders.find(r => r.date === dateString);
    return reminder ? <span className="reminder-dot"></span> : null;
  };

  return (
    <div className="calendar-container">
      <div className="current-date">{format(date, 'EEEE, MMMM d, yyyy')}</div>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={renderTileContent}
      />
    </div>
  );
};

export default CalendarView;
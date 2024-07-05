import React, { useState } from 'react';
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

const CalendarView: React.FC<CalendarViewProps> = ({ reminders }) => {
  const [date] = useState<Date | null>(new Date());

  const renderTileContent = ({ date }: { date: Date}) => {
    const dateString = format(date, 'yyyy-MM-dd');
    const reminder = reminders?.find(r => r.date === dateString);
    return reminder ? <span className="reminder-dot"></span> : null;
  };

  return (
    <div className="calendar-container">
      <Calendar
        value={date}
        tileContent={renderTileContent}
      />
    </div>
  );
};

export default CalendarView;
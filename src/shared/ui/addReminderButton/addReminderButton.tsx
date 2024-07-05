import React from 'react';
import './addReminderButton.css';

interface AddReminderButtonProps {
  onAdd: () => void;
}

const AddReminderButton: React.FC<AddReminderButtonProps> = ({ onAdd }) => {
  return (
    <div className="add-reminder-button">
      <button onClick={onAdd}>Добавить напоминание</button>
    </div>
  );
};

export default AddReminderButton;
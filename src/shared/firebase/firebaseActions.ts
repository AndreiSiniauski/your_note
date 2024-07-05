import { db } from './firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

interface Reminder {
  userId: string;
  text: string;
  date: string;
}

export const addReminder = async (userId: string, text: string, date: string) => {
  try {
    await addDoc(collection(db, 'reminders'), {
      userId,
      text,
      date,
    });
  } catch (error) {
    console.error("Error adding reminder: ", error);
  }
};

export const getReminders = async (userId: string): Promise<Reminder[]> => {
  try {
    const q = query(collection(db, 'reminders'), where('uid', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as Reminder);
  } catch (error) {
    console.error("Error getting reminders: ", error);
    return [];
  }
};
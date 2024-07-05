import { db } from './firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

interface Reminder {
  uid: string;
  text: string;
  date: string;
}

export const addReminder = async (uid: string, text: string, date: string) => {
  try {
    console.log("Adding reminder:", { uid, text, date });
    await addDoc(collection(db, 'reminders'), {
      uid,
      text,
      date,
    });
    console.log("Reminder added successfully!");
  } catch (error) {
    console.error("Error adding reminder: ", error);
  }
};

export const getReminders = async (uid: string): Promise<Reminder[]> => {
  try {
    console.log("Getting reminders for UID:", uid);
    const q = query(collection(db, 'reminders'), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const reminders = querySnapshot.docs.map(doc => doc.data() as Reminder);
    console.log("Reminders retrieved:", reminders);
    return reminders;
  } catch (error) {
    console.error("Error getting reminders: ", error);
    return [];
  }
};
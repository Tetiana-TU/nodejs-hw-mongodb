import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (err) {
    console.error('Помилка при видаленні контактів:', err);
  }
};

removeAllContacts();

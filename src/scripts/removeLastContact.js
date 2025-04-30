import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = readContacts();
    if (contacts.langth === 0) {
      return;
    }
    const removed = contacts.pop();
    await writeContacts(contacts);
    console.log(`Видалено останній контакт: ${removed.name} (${removed.id})`);
  } catch (err) {
    console.error('Помилка при видаленні контакту:', err);
  }
};

removeLastContact();

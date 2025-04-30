import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (err) {
    return 0;
  }
};

console.log(await countContacts());

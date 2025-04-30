import { readContacts } from './utils/readContacts.js';

const start = async () => {
  const contacts = await readContacts();
  console.log('📋 Контакти:', contacts);
};

start();

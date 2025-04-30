import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
    console.log('Контакти успішно збережено!');
  } catch (err) {
    console.error('Помилка читання файлу:', err);
    throw err;
  }
};

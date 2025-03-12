import sql from 'better-sqlite3';
const db = sql('news.db');

const login = (email: string, password: string): News.Item_[] => {
  const results = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?').get(email, password);
  return results as News.Item_[];
}

export {
  login
}
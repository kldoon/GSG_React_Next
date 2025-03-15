import sql from 'better-sqlite3';
const db = sql('news.db');

const findUserByEmail = (email: string) => {
  const results = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  return results as News.IUser;
}

const createUser = (user: News.IUser) => {
  console.log(user);
  /*
    This function will 
    1- Validate
    2- Check if email already exists
    3- Hash the password
    4- insert into db
  */
}

export {
  findUserByEmail,
  createUser
}
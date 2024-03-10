import pool from "./database";

export const getUsers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM User');
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const getPosts = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM Post');
    return rows;
  } catch (error) {
    console.error(error);
   
  }
};

export const getPost = async (slug) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Post WHERE slug = ?', [slug]);
    return rows[0];
  } catch (error) {
    console.error(error);
    // throw new Error(error);
  }
};

export const getUser = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM User WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
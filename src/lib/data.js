import pool from "./database";

export const getUsers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM user');
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const getPosts = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM post');
    return rows;
  } catch (error) {
    console.error(error);
   
  }
};

export const getPost = async (slug) => {
  try {
    const [rows] = await pool.query('SELECT * FROM post WHERE slug = ?', [slug]);
    return rows[0];
  } catch (error) {
    console.error(error);
    // throw new Error(error);
  }
};

export const getUser = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM user WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
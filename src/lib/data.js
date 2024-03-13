import pool from "./database";
import { unstable_noStore as noStore } from "next/cache";
import { commonServices } from "./services/common";

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
    const posts = await commonServices.readAllData('post','*');
    return posts;
  } catch (error) {
    console.error(error);

  }
};

export const getPost = async (slug) => {
  try {
    const post = await commonServices.readSingleData('post', '*', { "slug": slug })
    return post[0];
  } catch (error) {
    console.error(error);

  }
};

export const getUser = async (id) => {
  noStore();
  try {
    const user = await commonServices.readSingleData('user', 'firstName,lastName,profilePicture,email', { "id": id })
    return user[0]
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};


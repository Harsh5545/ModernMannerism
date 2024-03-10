import prisma from "../../database/db";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getUsers = async () => {

    try {

        const Users = await prisma.user.findMany();
        return Users;

    } catch (error) {
        console.log(error)
        throw new Error(error);
    }

};

export const getPosts = async () => {

    try {

        const Posts = await prisma.post.findMany();
        return Posts;

    } catch (error) {
        console.log(error)
        throw new Error(error);
    }

};

export const getPost = async (slug) => {
  
    try {
       
        const Post = await prisma.post.findFirst({
            where: {
                slug: slug,
                
            }
        });
        console.log(Post);
        return Post;

    } catch (error) {
        console.log(error)
        // throw new Error(error);
    }
};

export const getUser = async (id) => {
    try {

        const User = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        return User;

    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
};
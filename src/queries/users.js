import prisma from "@/lib/prisma";

export async function createUser(user) {
    console.log(user)
    try {
        // Ensure user data is passed correctly. `user` should be an object with user fields
        const newUser = await prisma.user.create({
          data: user, // Use the `data` field to pass the user object
        });
        console.log(newUser)
        return newUser;
      } catch (e) {
        console.error("Error creating user:", e);
        throw new Error("Error creating user: " + e.message); // Make the error message more informative
      }
}

export async function getUserByEmail(email) {
  const user = await prisma.user.findUnique(
    {
      where: {
        email: email
      }
    }
  );
  return user;
}
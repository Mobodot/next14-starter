"use server";

import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export async function addPost(prevState, formData) {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    revalidatePath("/blogs");
    revalidatePath("/admin");

    await newPost.save();
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export async function addUser(prevState, formData) {
  console.log("add user form data", formData);
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
      isAdmin: isAdmin === "false" || isAdmin === "" ? false : true,
    });
    revalidatePath("/admin");
    await newUser.save();
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// user login with github
export const handleGithubLogin = async () => {
  // "use server";

  await signIn("github");
};

// handle logout
export const handleGithubLogout = async () => {
  // "use server";

  await signOut();
};

// register
export const handleRegister = async (prevState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  // password mismatch
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  // // validate & register
  try {
    await connectToDb();
    console.log("db connected");
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

// login with credentials
export const handleLoginCredentials = async (prevState, formData) => {
  try {
    const { username, password } = Object.fromEntries(formData);

    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Wrong username or password" };
    }
    throw error;
  }
};

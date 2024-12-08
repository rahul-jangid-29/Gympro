// auth.js
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { assignRole } from "./roles";

/**
 * Sign up a new user and assign a role
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} role - User role (e.g., "user", "admin")
 * @returns {Promise<void>}
 */
export const signUpUser = async (email, password, role = "user") => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await assignRole(user.uid, email, role); // Assign role to the new user
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

/**
 * Log in an existing user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<void>}
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

/**
 * Log out the current user
 * @returns {Promise<void>}
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

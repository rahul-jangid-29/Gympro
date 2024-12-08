// firestore.js
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
 * Assign a role to a user in Firestore
 * @param {string} uid - User ID
 * @param {string} email - User email
 * @param {string} role - Role to assign (e.g., "user", "admin")
 */
export const assignRole = async (uid, email, role) => {
  try {
    await setDoc(doc(db, "users", uid), {
      email,
      role,
    });
  } catch (err) {
    console.error("Error assigning role:", err);
    throw err;
  }
};

/**
 * Get the role of a user from Firestore
 * @param {string} uid - User ID
 * @returns {Promise<string>} - The role of the user (e.g., "user", "admin")
 */
export const getUserRole = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().role;
    } else {
      throw new Error("No user data found.");
    }
  } catch (err) {
    console.error("Error fetching user role:", err);
    throw err;
  }
};

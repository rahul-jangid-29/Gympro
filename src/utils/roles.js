// roles.js
import { db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
    console.log(`Assigned role '${role}' to user ${email}`);
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
    const userDoc = doc(db, "users", uid);
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
      return userSnap.data().role;
    } else {
      throw new Error("No user data found.");
    }
  } catch (error) {
    console.error("Error fetching user role:", error);
    throw error;
  }
};

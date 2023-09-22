import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
  updatePassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";

/**
 * Authentication
 * https://firebase.google.com/docs/auth/web/password-auth
 * @param {string} email
 * @param {string} password
 * @returns {Promise}
 */
export const userSignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast(errorCode);
    });
};

/**
 * Sign out
 * https://firebase.google.com/docs/auth/web/password-auth
 * @returns {Promise}
 */
export const userSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

/**
 * Google Sign In
 * https://firebase.google.com/docs/auth/web/google-signin#popup-mode
 * @returns {Promise}
 */
export const googleSignIn = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

/**
 * Sign Up
 * https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
 * @param {string} email
 * @param {string} password
 * @returns {Promise}
 */
export const userSignUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      sendEmailVerification(user).then(() => {
        // Email verification sent!
        // ...
        console.log("Email verification sent!");
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

/**
 * Send Password Reset Email
 * https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email
 * @param {string} email
 * @returns {Promise}
 */
export const sendUserPasswordResetEmail = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast("Password reset email sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

/**
 * Delete User
 * https://firebase.google.com/docs/auth/web/manage-users#delete_a_user
 * @returns {Promise}
 */
export const deleteAccount = () => {
  deleteUser(auth.currentUser)
    .then(() => {
      // User deleted.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
};

/**
 * Update Password
 * https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
 * @param {string} password
 * @returns {Promise}
 */
export const updateUserPassword = (password) => {
  updatePassword(auth.currentUser, password)
    .then(() => {
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
};

/**
 * Update Profile
 * https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
 * @param {object} updatedInfo
 * @returns {Promise}
 * @example
 * const updatedInfo = {
 *  displayName: "Jane Q. User",
 *  photoURL: "https://example.com/jane-q-user/profile.jpg",
 * };
 */
export const updateUserProfile = (updatedInfo) => {
  updateProfile(auth.currentUser, updatedInfo)
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { fireAuth } from "./firebase";

const logOut = (): void => {
  signOut(fireAuth)
    .then(() => {
      alert("logged out");
    })
    .catch((err) => {
      alert(err);
    });
};

const logInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(fireAuth, provider)
    .then((res) => {
      const user = res.user;
      alert(`log in user: ${user.displayName}`);
    })
    .catch((err) => {
      const errorMessage = err.message;
      alert(errorMessage);
    });
};

const getUser = () => {
  console.log(fireAuth.currentUser);
  return fireAuth.currentUser;
};

const onAuthStateChanged = (callback: any) => {
  fireAuth.onAuthStateChanged((user: User | null) => {
    callback(user);
  });
};

export const Auth = {
  logOut,
  logInWithGoogle,
  getUser,
  onAuthStateChanged,
};

export type GoogleUser = User;

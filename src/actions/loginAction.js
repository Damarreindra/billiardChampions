import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../config/firebaseConfig";

export const login = (email, password) => (dispatch) => {
  const auth = getAuth(app);
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        localStorage.setItem('zxc9238[0]-2Token', "KIMBEK");
        resolve(true);
      })
      .catch(() => {
       
        reject(false);
      });
  });
};
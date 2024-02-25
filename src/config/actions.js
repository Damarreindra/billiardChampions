import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

export const login = (email, password) => () => {
  const navigate = useNavigate()
  const auth = getAuth(app);
  console.log(email);
  // const loged = signInWithEmailAndPassword(auth,email,password)
  // if(loged){
  //   navigate('/home')
  // }
};

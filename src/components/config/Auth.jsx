import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    sendPasswordResetEmail } from "firebase/auth";
  import app from "./FirbaseConfig";
  
  const auth = getAuth(app);
  
  const userCreate = async (email, password) => {
    const resultado = await createUserWithEmailAndPassword(auth, email, password)
    return resultado.user;
  };
  
  const login = async (email, password) => {
    const resultado = await signInWithEmailAndPassword(auth, email, password)
    console.log(resultado);
    return resultado;
  };
  
  const sendPasswordReset = async (email) => {
    return await sendPasswordResetEmail(auth,email).then((user)=>{
      console.info(user);
      return true;
    }).catch((error)=>{
      console.log(error);
      return false;
    });
  }
  
  const sessionState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        alert("Session expired");
      }
    });
  };
  
  
  export { auth, userCreate, login, onAuthStateChanged,sendPasswordReset }
import app from "./firebase";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  arrayUnion,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
const db = getFirestore(app);

const addLead = async (
  nome,
  cognome,
  email,
  numero,
  citta,
  piano,
  ruolo,
  func
) => {
  const docRef = doc(collection(db, "leads"));

  await setDoc(docRef, {
    name: nome,
    cognome: cognome,
    email: email,
    phone: numero,
    citta: citta,
    piano: piano,
    ruolo: ruolo,
  }).then(() => {
    func();
  });
};

export default addLead;

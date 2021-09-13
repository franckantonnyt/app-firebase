
import { db } from '../firebaseConfig';
import { collection, setDoc, getDocs, doc } from "firebase/firestore";

export const getUsers = async () => {
    const users = await getDocs(collection(db, "users"));

    let arrayUser = [];

    users.forEach((doc) => {
        let user = { id: doc.id, name: doc.data().name, age: doc.data().age, state: doc.data().state };
        arrayUser.push(user);
    })
    
    return arrayUser;
};

export const setUser = async (id, name, age, state) => {
    const users = await setDoc(doc(db, "users", `${id}`), {
        name, age, state
    });
};
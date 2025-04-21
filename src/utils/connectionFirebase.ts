import {doc, getDoc} from "firebase/firestore";
import { db } from "@/firebase/config";

export async function testConnection() {
    try {
        const docRef = doc(db, 'testCollection', 'testDoc'); // pode ser qualquer doc real ou até inexistente
        await getDoc(docRef);
        console.log('Connected to Firebase!');
    } catch (error) {
        console.error('Error connecting to Firebase:', error);
    }
}



import { db } from "../firebase/config"; // ou onde você exporta seu Firestore
import { collection, addDoc } from "firebase/firestore";

async function createTestDoc() {
    try {
      const docRef = await addDoc(collection(db, "testCollection"), {
        name: "Teste no emulador",
        timestamp: new Date(),
      });
      console.log("Documento criado com ID:", docRef.id);
    } catch (e) {
      console.error("Erro ao adicionar documento:", e);
    }
  }

  export { createTestDoc };
import { firestore } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  addDoc,
  deleteField,
} from "firebase/firestore";

export const getSession = async (sessionId: string) => {
  try {
    const docRef = doc(firestore, "sessions", sessionId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
    return null;
  } catch (error: unknown) {
    console.error("Error fetching session:", error);
    throw error;
  }
};

export const getPlayer = async (sessionId: string, playerId: string): Promise<any> => {
  try {
    const docRef = doc(firestore, "sessions", sessionId, "players", playerId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
    return null;
  } catch (error: unknown) {
    console.error("Error fetching player:", error);
    throw error;
  }
};

export const createPlayer = async (sessionId: string, name: string) => {
  try {
    const colRef = collection(firestore, "sessions", sessionId, "players");
    const docRef = await addDoc(colRef, { name });
    return { id: docRef.id, name };
  } catch (error: unknown) {
    console.error("Error creating player:", error);
    throw error;
  }
};

export const updatePlayerResponse = async (sessionId: string, playerId: string, response: string[]) => {
  try {
    const docRef = doc(firestore, "sessions", sessionId, "players", playerId);
    await updateDoc(docRef, { response });
  } catch (error: unknown) {
    console.error("Error updating player response:", error);
    throw error;
  }
};

export const getPlayerResponses = async (sessionId: string) => {
  try {
    const colRef = collection(firestore, "sessions", sessionId, "players");
    const querySnapshot = await getDocs(colRef);
    const responses: Record<string, { name: string, response: string[] }> = {};
    querySnapshot.forEach((docSnap) => {
      responses[docSnap.id] = { name: docSnap.data().name, response: docSnap.data().response };
    });
    return responses;
  } catch (error: unknown) {
    console.error("Error fetching player responses:", error);
    throw error;
  }
};

export const clearPlayerResponses = async (sessionId: string) => {
  try {
    const colRef = collection(firestore, "sessions", sessionId, "players");
    const querySnapshot = await getDocs(colRef);
    querySnapshot.forEach((docSnap) => {
      updateDoc(docSnap.ref, { response: deleteField() });
    });
  } catch (error: unknown) {
    console.error("Error clearing player responses:", error);
    throw error;
  }
}

export const subscribeToSession = (sessionId: string, callback: (data: Record<string, any> | null) => void) => {
  const docRef = doc(firestore, "sessions", sessionId);

  const unsubscribe = onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      callback({ id: docSnap.id, ...docSnap.data() });
    } else {
      console.warn(`Session with ID ${sessionId} not found`);
      callback(null); // session not found
    }
  }, (error: unknown) => {
    console.error("Error in real-time listener:", error);
  });

  return unsubscribe;
};
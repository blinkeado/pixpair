import { database } from '../services/firebase';

export const participantsRef = (id) => database.ref(`sessions/${id}/participants`);
export const photosRef = (id) => database.ref(`sessions/${id}/photos`);

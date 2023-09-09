// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDayWDTvFHZ2miSIgWS3nauwb3gE34CCOU",
  authDomain: "react-native-app-hw.firebaseapp.com",
  databaseURL: "https://react-native-app-hw-default-rtdb.firebaseio.com",
  projectId: "react-native-app-hw",
  storageBucket: "react-native-app-hw.appspot.com",
  messagingSenderId: "532838966987",
  appId: "1:532838966987:web:5edfade614b897096f9d4e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
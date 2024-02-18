// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbI_PXiQrIKWhYBrLszgu4FhlIZ3O0u8Q",
  authDomain: "kraftsix-ecommerce-app.firebaseapp.com",
  projectId: "kraftsix-ecommerce-app",
  storageBucket: "kraftsix-ecommerce-app.appspot.com",
  messagingSenderId: "952110606678",
  appId: "1:952110606678:web:4e8e99387fe707538d0ef7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default {app ,auth, db};


// Function to add a product to the Firestore database
export const addProductToFirestore = async (product) => {
  try {
    // Add a new document with a generated ID to the "products" collection
    const docRef = await addDoc(collection(db, 'products'), product);
    console.log('Product added with ID: ', docRef.id);
    return docRef.id; // Return the ID of the added document
  } catch (error) {
    console.error('Error adding product: ', error);
    return null; // Return null if there was an error
  }
};





// Firestore database ID :   q3WW1JLlOrFKgicXfzKb














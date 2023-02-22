import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7S1T1nali0wDElNBPm4uaLbCs-sEserE",
    authDomain: "fantasy-sports-798ec.firebaseapp.com",
    projectId: "fantasy-sports-798ec",
    storageBucket: "fantasy-sports-798ec.appspot.com",
    messagingSenderId: "871522821047",
    appId: "1:871522821047:web:b73d7dabb15278ed45be32",
    measurementId: "G-2KF91FL1QY"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Devyn() {
  const [selectedNames, setSelectedNames] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleNameClick(name) {
    setSelectedNames((selectedNames) => {
      const isSelected = selectedNames.includes(name);
      return isSelected
        ? selectedNames.filter((selectedName) => selectedName !== name)
        : [...selectedNames, name];
    });
  }

  async function handleConfirmClick() {
    setIsSubmitting(true);

    if (selectedNames.length !== 3) {
      alert("Please select three names before confirming.");
      setIsSubmitting(false);
      return;
    }

    try {
      const namesCollection = collection(db, "names");
      const docRef = doc(namesCollection, "selectedNames");
      await setDoc(docRef, { selectedNames });

      console.log("Selected names saved to Firestore");
    } catch (error) {
      console.error("Error saving selected names to Firestore: ", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <h1>Select Three Names</h1>
      <p>Click on a name to select it.</p>

      <div>
        <button
          onClick={handleConfirmClick}
          disabled={isSubmitting || selectedNames.length < 3}
        >
          Confirm Selection
        </button>
      </div>

      <ul>
        <li onClick={() => handleNameClick("Alice")}>
          Alice {selectedNames.includes("Alice") && "(Selected)"}
        </li>
        <li onClick={() => handleNameClick("Bob")}>
          Bob {selectedNames.includes("Bob") && "(Selected)"}
        </li>
        <li onClick={() => handleNameClick("Charlie")}>
          Charlie {selectedNames.includes("Charlie") && "(Selected)"}
        </li>
      </ul>
    </div>
  );
}

export default Devyn;

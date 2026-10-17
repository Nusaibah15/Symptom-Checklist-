import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const symptomInput = document.getElementById("symptomInput");
const symptomList = document.getElementById("symptomList");

// 1. Fetch symptoms immediately when the page loads
document.addEventListener("DOMContentLoaded", () => {
  getSymptoms();
});

async function saveSymptom() {
  // FIXED: Changed ariaValueMax to value
  const symptom = symptomInput.value.trim();

  if (symptom === "") {
    alert("Please enter a symptom");
    return;
  }

  try {
    await addDoc(collection(db, "symptoms"), {
      symptom: symptom,
      createdAt: new Date().toISOString()
    });

    symptomInput.value = "";

    await getSymptoms();

  } catch (error) {
    console.error("Error saving symptom:", error);
  }
}

async function getSymptoms() {
  try {
    const querySnapshot = await getDocs(collection(db, "symptoms"));

    const symptoms = querySnapshot.docs.map(function(document) {
      return {
        id: document.id,
        symptom: document.data().symptom
      };
    });

    symptomList.innerHTML = symptoms.map(function(item) {
      return `<li>${item.symptom} <button onclick="deleteSymptom('${item.id}')">Delete</button></li>`;
    }).join("");

  } catch (error) {
    console.error("Error getting symptoms:", error);
  }
}

async function deleteSymptom(id) {
  try {
    await deleteDoc(doc(db, "symptoms", id));

    await getSymptoms();

  } catch (error) {
    console.error("Error deleting symptom:", error);
  }
}

// Expose functions globally so HTML onclick attributes can see them
window.saveSymptom = saveSymptom;
window.exitSymptom = deleteSymptom;
window.deleteSymptom = deleteSymptom;

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqjAhzGFjANKAGm7FWuenvQS7q6bSgMvA",
  authDomain: "wegner-practice-keeper.firebaseapp.com",
  projectId: "wegner-practice-keeper",
  storageBucket: "wegner-practice-keeper.appspot.com",
  messagingSenderId: "1035769785074",
  appId: "1:1035769785074:web:a5edb2cffba4ae27413e6b"
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;

const convertToObject=(obj: any)=>{
  return JSON.parse(JSON.stringify(obj))
}

export function submitObject(obj, path) {
  const db = firebase.firestore(app);
  const convertedObj = convertToObject(obj)
  db.collection(path)
    .doc(obj['id'])
    .set(convertedObj);
}

export function editObject(obj, propToUpdate, newPropValue, path) {
  const db = firebase.firestore(app);
  db.collection(path)
    .doc(obj.id)
    .update({
      [propToUpdate]: newPropValue
    });
}

export function retrieveDocument(path, docId) {
  const db = firebase.firestore(app);
  let docRef = db.collection(path).doc(docId)

  docRef.get().then((doc) => {
    if (doc.exists) {
      return doc.data()
    } else {

      return {}
    }
  })

  return{}
}
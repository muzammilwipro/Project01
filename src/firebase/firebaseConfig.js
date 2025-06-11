import { firebase } from "@react-native-firebase/firestore";

const firebaseConfig = {
  projectId: "cauthenb-bcb1e",
  messagingSenderId: "482624345274",
  appId: "1:482624345274:ios:d15e6c9279850b131fde83"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
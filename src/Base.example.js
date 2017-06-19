import Rebase from 're-base'
import Firebase from 'firebase/app'
import Database from 'firebase/database'

const app = Firebase.initializeApp({
  apiKey: "YOUR API KEY HERE",
  authDomain: "YOUR-APP.firebaseapp.com",
  databaseURL: "https://YOUR-PROJECT-ID.firebaseio.com",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "",
  messagingSenderId: "YOUR-MESSAGING-ID",
})

const db = Database(app)

export default Rebase.createClass(db)
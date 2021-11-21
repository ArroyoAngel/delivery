import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, setDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSbn9SsjTTvq6B6I94nH-Me7rjlF5e3SE",
    authDomain: "test-6a6ec.firebaseapp.com",
    projectId: "test-6a6ec",
    storageBucket: "test-6a6ec.appspot.com",
    messagingSenderId: "245123010241",
    appId: "1:245123010241:web:060b5ea26964d2710f8e40",
    measurementId: "G-ZRC891GQM5"
};

export class Firebase {
    app: any
    db: any
    auth: any
    provider: any
    constructor(){
        this.app = initializeApp(firebaseConfig)
        this.db = getFirestore(this.app)
        this.auth = getAuth()
        this.provider = new GoogleAuthProvider()
    }

/**
    FIRESTORE
    *   DOCUMENT REISTER
    *   GET COLLECTION
    *   GET DOCUMENT BY UID
    *   GET DOCUMENT BY EMAIL
    *   UPDATE DOCUMENT BY UID
 */
    async registerDocument(nameCollection: string, payload: any, uid: string): Promise<void>{
        try {
            if(uid){
                await setDoc(doc(this.db, nameCollection, uid), payload)
            }else{
                await addDoc(collection(this.db, "users"), payload);
            }
        }catch(e){
            console.error("Error adding document: ", e);
        }
    }
    async getCollection(nameCollection: string): Promise<Array<any>>{
        const querySnapshot = await getDocs(collection(this.db, nameCollection));
        const result: any = []
        querySnapshot.forEach((doc) => {
            result.push({uid: doc.id, ...doc.data()})
        });
        return result

    }
    async getDocumentByUid(nameCollection: string): Promise<any>{
        const docRef = await doc(this.db, nameCollection, "23fj6evyO6eGOd169yjTYIIWwFH3");
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Document data:", docSnap.data());
        }else{
            console.log(nameCollection+" is empty")
        }
        return null
    }
    async updateDocument(nameCollection: string, payload: any, uid: string): Promise<void>{
        const result = await updateDoc(doc(this.db, nameCollection, uid), payload);
        return result
    }

/*
    AUTHTENTICATION
    *   BY EMAIL
    *   BY GOOGLE
    *   BY PHONE NUMBER
    * 
    *   LOGIN
    *   LOGOUT
*/
    async authRegisterByEmail(email: string, password: string): Promise<any>{
        let result: any = null
        console.log(email, password)
        await createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            result = userCredential.user
        })
        .catch((error) => {
            result = error
        });
        return result
    }
    async authRegisterByProviderGoogle(): Promise<any>{
        let result: any = null
        await signInWithPopup(this.auth, this.provider)
        .then((userCredential) => {
            result = userCredential.user
        }).catch((error) => {
            result = error
        });
        return result
    }
}

export default new Firebase
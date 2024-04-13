import { firebase } from '@react-native-firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAd4tEn_abLXCoHCjai3k3OrL4xCBaaim0", // From "api_key" -> "current_key"
  authDomain: "foodapp-a7d1b.firebaseapp.com", // Default format: [PROJECT_ID].firebaseapp.com
  projectId: "foodapp-a7d1b", // From "project_info" -> "project_id"
  storageBucket: "foodapp-a7d1b.appspot.com", // From "project_info" -> "storage_bucket"
  messagingSenderId: "152472451562", // From "project_info" -> "project_number"
  appId: "1:152472451562:android:b8e80adf995b5d8a8d5a93", // From "client" -> "client_info" -> "mobilesdk_app_id"
  // measurementId is not provided in your snippet but it's optional unless you're using Google Analytics
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

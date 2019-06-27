import firebase from 'firebase';

// Your web app's Firebase configuration
var config = {
	apiKey: "AIzaSyCyGe0wl_h0X34VGd4EzT3sxmwCvsBqYTU",
	authDomain: "react-potluck-1734f.firebaseapp.com",
	databaseURL: "https://react-potluck-1734f.firebaseio.com",
	projectId: "react-potluck-1734f",
	storageBucket: "react-potluck-1734f.appspot.com",
	messagingSenderId: "416519544849",
	appId: "1:416519544849:web:94fe43f716e5eec3"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;

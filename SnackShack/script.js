// Change the configurations.  
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
        
  // Initialize Firebase.
  firebase.initializeApp(config);

new Vue({
  el: "#app",
	data: {
    searchQuery: '',
    gridColumns: ['Item', 'Price', 'Quantity']
	},
	firestore() {
     return {
       items: firebase.firestore().collection("SnackShackItems")
     }
  }
})

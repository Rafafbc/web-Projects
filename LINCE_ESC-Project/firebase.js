import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

// Criação de uma função anônima para que as configurações da Firebase não sejam expostas
const app = (function () {
    // Configurações do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCdVXuyK2f7PGgdMA83TOxFv7u0_Br1m2o",
        authDomain: "lince-esc-database.firebaseapp.com",
        databaseURL: "https://lince-esc-database-default-rtdb.firebaseio.com",
        projectId: "lince-esc-database",
        storageBucket: "lince-esc-database.appspot.com",
        messagingSenderId: "867715518799",
        appId: "1:867715518799:web:be374e59fa6a306b73b53a",
        measurementId: "G-53RFJ36RGD"
    };

    // Inicializa o Firebase
    return initializeApp(firebaseConfig);
})()

// Inicializa o Realtime Database
const database = getDatabase(app);

// Verificação da conexão com o Realtime Database
const connectedRef = ref(database, ".info/connected");
onValue(connectedRef, (snapshot) => {
    const connected = snapshot.val();
    if (connected) {
        console.log("Conectado ao Realtime Database com sucesso!");
        //alert("Conexão estabelecida com o Realtime Database!");
    } else {
        console.log("Desconectado do Realtime Database.");
    }
});

export { database };
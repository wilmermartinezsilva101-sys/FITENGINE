import { auth } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

console.log("Sistema de Auth cargado... 🚀");

// Registro
const registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
  console.log("Botón de registro detectado");
  registerBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log("Intentando registrar a:", email);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario creado:", userCredential.user);
      alert("¡Cuenta creada con éxito!");
      window.location.href = "index.html";
    } catch (error) {
      console.error("Error detallado:", error.code, error.message);
      alert("Error: " + error.message);
    }
  });
}

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  console.log("Botón de login detectado");
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Intentando entrar con:", email);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login exitoso");
      window.location.href = "index.html";
    } catch (error) {
      console.error("Error detallado:", error.code, error.message);
      alert("Error: " + error.message);
    }
  });
}
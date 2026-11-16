import { auth, provider } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const usuarioElemento = document.getElementById("usuario");
const botonLogin = document.getElementById("btnLogin");
const botonLogout = document.getElementById("btnLogout");

const actualizarUsuario = (user) => {
  if (!usuarioElemento) return;

  if (user) {
    usuarioElemento.textContent = `Usuario: ${user.displayName || user.email}`;
    if (botonLogout) botonLogout.style.display = "block";
    if (botonLogin) botonLogin.style.display = "none";
  } else {
    usuarioElemento.textContent = "No has iniciado sesión";
    if (botonLogout) botonLogout.style.display = "none";
    if (botonLogin) botonLogin.style.display = "block";
  }
};

if (botonLogin) {
  botonLogin.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      alert("No se pudo iniciar sesión con Google.");
    }
  });
}

if (botonLogout) {
  botonLogout.addEventListener("click", async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("No se pudo cerrar la sesión.");
    }
  });
}

onAuthStateChanged(auth, (user) => {
  actualizarUsuario(user);
});

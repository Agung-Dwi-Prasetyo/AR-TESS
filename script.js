document.addEventListener("DOMContentLoaded", () => {
  const debugBox = document.getElementById("debug-box");
  const sceneEl = document.querySelector("a-scene");
  const btnIg = document.querySelector("#btn-ig");
  const btnLinkedin = document.querySelector("#btn-Linkedin");

  // Tangkap error tersembunyi dan tampilkan di layar HP
  window.addEventListener("error", (e) => {
    debugBox.style.color = "#ff5555";
    debugBox.innerText = "Error JS: " + e.message;
  });

  window.addEventListener("unhandledrejection", (e) => {
    debugBox.style.color = "#ff5555";
    debugBox.innerText = "Error Sistem AR: " + (e.reason?.message || e.reason);
  });

  // Status saat mesin AR siap digunakan
  sceneEl.addEventListener("arReady", () => {
    debugBox.innerText = "AR Siap! Arahkan kamera ke kartu.";
    setTimeout(() => {
      debugBox.style.display = "none";
    }, 2500);
  });

  // Status jika target atau kamera gagal dimuat
  sceneEl.addEventListener("arError", () => {
    debugBox.style.color = "#ff5555";
    debugBox.innerText = "Gagal memuat targets.mind atau kamera.";
  });

  // Aksi saat tombol Instagram diklik
  btnIg.addEventListener("click", () => {
    window.location.href = "https://instagram.com/username_kamu";
  });

  // Aksi saat tombol LinkedIn diklik
  btnLinkedin.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/username-kamu";
  });
});
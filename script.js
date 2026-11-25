document.addEventListener("DOMContentLoaded", () => {
  const btnIg = document.querySelector("#btn-ig");
  const btnLinkedin = document.querySelector("#btn-Linkedin");
sceneEl.addEventListener("arError", (event) => {
    
    alert("AR gagal dimuat. Cek file targets.mind atau dukungan WebGL browser.");
  });
  // Aksi saat tombol Instagram diklik
  btnIg.addEventListener("click", () => {
    window.location.href = "https://instagram.com/Prabowo";
  });

  // Aksi saat tombol LinkedIn diklik
  btnLinkedin.addEventListener("click", () => {
    window.location.href = "https://www.voaindonesia.com/a/wiranto-pastikan-keterlibatan-prabowo-dalam-penculikan-1998/1940342.html";
  });
});
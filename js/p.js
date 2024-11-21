alert("Halo! selamat datang di website ku");

const contactBtn = document.getElementById("contactMeBtn");
contactBtn.addEventListener("click", function () {
  const whatsappNumber = "+6281392985652";
  window.open(`https://wa.me/${whatsappNumber}`, "_blank");
});

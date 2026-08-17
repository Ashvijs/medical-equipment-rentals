// IMPORTANT: replace the placeholder below with your WhatsApp number.
// Use India country code, without +, spaces or leading zero.
// Example: 919876543210
const WHATSAPP_NUMBER = "919967949000";

function sendWhatsApp(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const equipment = document.getElementById("equipmentSelect").value;
  const period = document.getElementById("period").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
    `Hello, I would like to enquire about renting medical equipment.%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Equipment: ${encodeURIComponent(equipment)}%0A` +
    `Rental period: ${encodeURIComponent(period)}%0A` +
    (message ? `Message: ${encodeURIComponent(message)}%0A` : "");

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add your WhatsApp number in script.js before publishing the website.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

document.getElementById("year").textContent = new Date().getFullYear();

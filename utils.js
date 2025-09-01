export function sendWhatsappMessage(message) {
  const phone_number = "+2349071673365";
  const encodeMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phone_number}?text=${encodeMessage}`;

  window.open(whatsappUrl, "_blank");
}

export function sendMail(message) {
  const email = "greatsolomon11@gmail.com";
  const encodeMessage = encodeURIComponent(message);
  const subject = "Inquiry from Portfolio";

  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeMessage}`;

  window.location.href = url;
}

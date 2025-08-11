import { sendContactForm } from 'backend/email-service';

$w.onReady(() => {
  setupContactForm();
});

function setupContactForm() {
  $w("#contactForm").onSubmit(async () => {
    const name = $w("#nameInput").value.trim();
    const email = $w("#emailInput").value.trim();
    const message = $w("#messageInput").value.trim();

    // Basic validation
    if (!name || !email || !message || !email.includes("@")) {
      $w("#formError").text = "Please fill out all fields correctly.";
      $w("#formError").show();
      return;
    }

    try {
      await sendContactForm({ name, email, message });
      $w("#formSuccess").text = "Thanks for reaching out! We'll get back to you soon.";
      $w("#formSuccess").show();
      $w("#contactForm").reset();
    } catch (error) {
      console.error("Contact form error:", error);
      $w("#formError").text = "Something went wrong. Please try again later.";
      $w("#formError").show();
    }
  });
}
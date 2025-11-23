document.addEventListener("DOMContentLoaded", function() {
  // Typing text
  const text = "Welcome to my portfolio!";
  let index = 0;
  const typingElement = document.querySelector(".typing-text");

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  if (typingElement) {
    type();
  }

  // Contact form
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };

    if (!formData.name || !formData.email || !formData.message) return;

    try {
      const response = await fetch("https://formspree.io/f/yamkela", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Message sent successfully!");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  });
});

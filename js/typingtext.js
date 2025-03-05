function typingText() {
  const text = "Transform Your Vision with Next-Gen Tech Solutions";
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typing-text").textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  window.onload = typeWriter;
}

typingText();

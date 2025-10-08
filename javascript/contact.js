function copyEmail() {
  const email = "zibmany@gmail.com";

  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    }).catch((err) => {
      console.error("Clipboard copy failed:", err);
      fallbackCopy(email);
    });
  } else {
    fallbackCopy(email);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    alert("Email copied to clipboard!");
  } catch (err) {
    alert("Failed to copy email");
  }
  document.body.removeChild(textarea);
}


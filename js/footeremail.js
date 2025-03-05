function sendFooterEmail() {
  document
    .getElementById("contactmailfooter")
    .addEventListener("submit", async function (event) {
      console.log("asd");
      event.preventDefault();

      const formData = {
        email: document.getElementById("email").value,
      };

      try {
        const response = await axios.post(
          "https://srv694651.hstgr.cloud/mailer/api/send-email",
          formData
        );
        console.log("Server Response:", response.data);
        alert(response.data.message);
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send email.");
      }
    });
}

sendFooterEmail();

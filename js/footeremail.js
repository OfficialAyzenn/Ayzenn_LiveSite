
function sendEmail() {
  document
    .getElementById("contactmailfooter")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const submitButton = this.querySelector("button");
      const originalButtonContent = submitButton.innerHTML;

      submitButton.innerHTML =
        '<i class="fa fa-spinner fa-spin"></i>'; 
      submitButton.disabled = true; 

      const formData = {
        email: document.getElementById("email").value,
      };

      try {
        const response = await axios.post(
          "https://srv694651.hstgr.cloud/mailer/api/send-email",
          formData
        );

        // console.log("Server Response:", response.data);

        const successModal = new bootstrap.Modal(
          document.getElementById("successModal")
        );
        successModal.show();
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send email.");
      } finally {
        submitButton.innerHTML = originalButtonContent;
        submitButton.disabled = false;
      }
    });
}

sendEmail();

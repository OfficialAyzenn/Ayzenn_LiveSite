function sendMessage() {
  document
    .getElementById("contactForm")
    .addEventListener("submit", async function (event) {
      // console.log('asd')
      event.preventDefault();

      document.getElementById("submitBtn").style.display = "none";
      document.getElementById("loader").style.display = "inline-block";
      setTimeout(function () {
        loader.style.display = "none";

        // Show success modal
        var successModal = new bootstrap.Modal(
          document.getElementById("successModal")
        );
        successModal.show();

        document.getElementById("contactForm").reset();
        submitBtn.style.display = "block";
      }, 1500);

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      try {
        const response = await axios.post(
          "https://srv694651.hstgr.cloud/mailer/api/send-message",
          formData
        );
        console.log("Server Response:", response.data);
        //   alert(response.data.message);
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send email.");
      }
    });
}

sendMessage();

// function sendMessage(){
//     document.getElementById("contactForm").addEventListener("submit", async function(event) {
//         event.preventDefault(); // Prevent default form submission

//         // Show loader and disable submit button
//         document.getElementById("submitBtn").style.display = "none";
//         document.getElementById("loader").style.display = "inline-block";

//           const formData = {
//               name: document.getElementById("name").value,
//               email: document.getElementById("email").value,
//               subject: document.getElementById("subject").value,
//               message: document.getElementById("message").value
//           };

//         try {
//             const response = await axios.post("http://localhost:5000/api/send-message", formData);
//               console.log("Server Response:", response.data);
//             //   alert(response.data.message);
//             const result = await response.json();

//             // Hide loader and show button again
//             document.getElementById("loader").style.display = "none";
//             document.getElementById("submitBtn").style.display = "block";

//             if (response.ok) {
//                 // Show success message from server in modal
//                 document.getElementById("modalMessage").textContent = result.message;
//                 const successModal = new bootstrap.Modal(document.getElementById("successModal"));
//                 successModal.show();

//                 // Hide modal after 3 seconds
//                 setTimeout(() => {
//                     successModal.hide();
//                 }, 3000);

//                 // Reset form fields
//                 document.getElementById("contactForm").reset();
//             } else {
//                 alert("Error: " + result.message);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Something went wrong. Please try again later.");
//         }
//     });
// }
// sendMessage();
